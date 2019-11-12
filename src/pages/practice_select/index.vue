<template>
  <div class="app-container mainContentContainer" v-if="questionList.length">
    <ai-header :back="goBack" :title="title"></ai-header>
    <van-tabs
      v-if="qType!='1' && qType!='2'"
      :active="activeMode"
      @change="activeModeChange"
      color="#f76f6f"
      line-width="40"
      duration="0.1"
      sticky
    >
      <van-tab title="练习模式"></van-tab>
      <van-tab title="学习模式"></van-tab>
    </van-tabs>
    <swiper
      class="swiper-container flex-1"
      interval="5000"
      duration="50"
      :current="curQuestionId"
      @animationfinish="swiperChange"
      @change="questionChange"
    >
      <swiper-item v-for="(item,index) in questionList" :key="index" style="overflow-y: scroll;">
        <template v-if="index - curQuestionId < 2 && index - curQuestionId > -2">
          <div class="q-content">
            <div class="q-question">
              <div class="quesiton-type">({{questionTypes[questionList[curQuestionId].type]}})</div>
              <span v-html="item.questionName"></span>
            </div>
            <div v-if="item.type<4" class="radio-box">
              <template v-if="activeMode==0">
                <ai-radio
                  v-if="item.type!=='2'"
                  :selected="item.selected"
                  :options="item.answers"
                  :question-type="item.type"
                  @updateSelected="updateSelected"
                  @updateCurQuestionId="updateCurQuestionId"
                ></ai-radio>
                <ai-checkbox
                  v-if="item.type=='2'"
                  :selected.sync="item.selected"
                  :options="item.answers"
                ></ai-checkbox>
              </template>
              <template v-else>
                <ai-radio
                  v-if="item.type!=='2'"
                  :selected="item.correctIndex"
                  :options="item.answers"
                  :question-type="item.type"
                ></ai-radio>
                <ai-checkbox
                  v-if="item.type=='2'"
                  :selected="item.correctIndex"
                  :options="item.answers"
                ></ai-checkbox>
              </template>
            </div>
            <div v-else class="no-answer">
              <div v-show="activeMode===0">此题型不支持在线作答，交卷后查看答案</div>
            </div>
            <template v-if="qType!='1' && qType!='2' && item.type<4 && activeMode == 0">
              <div class="end-box" v-show="curQuestionId === questionTotal-1">
                <p class="tips">最后一题啦~</p>
                <div class="submit-btn" @tap.stop="handleSubmit">点击交卷</div>
              </div>
            </template>
          </div>
          <transition name="fade">
            <div class="analysis-container" v-show="activeMode===1">
              <div class="title">题目解析：</div>
              <div class="analysis-answer">
                <template v-if="item.type < 4">
                  <div class="answer-item" v-if="item.type!=='3'">正确答案：{{item.correctAnswer}}</div>
                  <div
                    class="answer-item"
                    v-if="item.type==='3'"
                  >正确答案：{{item.isCorrect =='1'?'正确':'错误'}}</div>
                </template>

                <div class="answer-item">难度：{{questionDifficulty[item.questionDifficulty]}}</div>
                <div class="answer-item">
                  考点频率：
                  <span class="warn">{{testTypes[item.testType]}}</span>
                </div>
              </div>
              <div class="b-box">
                <div class="b-title">
                  <!-- <template v-if="item.type<4">解析：</template>
                  <template v-else>答案：</template>-->
                  解析：
                </div>
                <div class="error-correction" @tap.stop="handleClickTo(item.id)">点击纠错</div>
              </div>
              <div class="analysis-txt" v-html="item.remark"></div>
            </div>
          </transition>
        </template>
      </swiper-item>
    </swiper>
    <div class="footer">
      <div class="footer-box">
        <div class="sheet-box" @tap.stop="handleToSheet">
          <img src="../../../static/images/question/icon_answer_sheet@2x.png" alt />
          <p class="title">
            (
            <span class="sub">{{curQuestionId+1}}</span>
            /{{curQuestionId+1>questionTotal?curQuestionId+1:questionTotal}})
          </p>
        </div>
        <div class="time-box">
          <ai-timer
            :isOn="timerSwitch"
            sendSync="true"
            autoStart="true"
            @getDataFromChild="getTimerString"
            :defaultVal="defaultVal"
          >
            <template slot="icon">
              <div class="icon-timer">
                <img src="../../../static/images/question/icon_time@2x.png" alt />
              </div>
            </template>
          </ai-timer>
        </div>
        <div
          class="collect-box"
          @tap.stop="handleCollect(questionList[curQuestionId].id,curQuestionId)"
        >
          <img
            v-if="!questionList[curQuestionId].isMark"
            src="../../../static/images/question/collect_question.svg"
            alt="点击收藏"
          />
          <img
            v-else
            src="../../../static/images/question/collect_question_selected.svg"
            alt="取消收藏"
          />
          <p class="title">收藏</p>
        </div>
      </div>
    </div>
    <sheet
      :show="showSheet"
      @updateShowSheet="updateShowSheet"
      @updateCurQuestionIdBySheet="updateCurQuestionIdBySheet"
      @updateTimerSwitch="updateTimerSwitch"
    ></sheet>
    <van-dialog id="van-dialog" style="width: 60%;" />
    <van-dialog id="van-tip" style="width: 60%;" />
    <van-popup
      custom-class="guidelines-popup"
      custom-style="background-color:rgba(76, 76, 76, .1);"
      :show="isFirst"
      position="bottom"
      overlay="true"
      duration="100"
      @close="onCloseGuidelines"
    >
      <div class="guidelines-box">
        <img
          src="../../../static/images/operationLeader.svg"
          alt
          style="width: 274px;height: 120px;"
          @tap.stop="onCloseGuidelines"
        />
      </div>
    </van-popup>
  </div>
  <!-- <div v-else>
    <ai-header :back="goBack" :title="title"></ai-header>
    <div style="text-align: center;color: #999999;font-size: 12px;padding: 8px 0;">正在加载...</div>
  </div>-->
</template>
<script>
import { currentDateTime } from '@/utils/'
import AiRadio from '@/components/AiRadio'
import AiCheckbox from '@/components/AiCheckbox'
import AiTimer from '@/components/AiTimer'
import EncourageDialog from '@/components/EncourageDialog/'
import Dialog from '../../../static/vant/dialog/dialog'
import { ApiGetQuestion, ApiCollection, ApiGetQuestionSubmit } from '@/service/'
import submitAnswer from '@/mixins/submitAnswer'
import AiHeader from '@/components/AiHeader'
import Sheet from '@/components/practice/Sheet'
import { debounce, throttle } from '../../utils'

export default {
  components: { AiRadio, AiCheckbox, AiTimer, EncourageDialog, AiHeader, Sheet },
  mixins: [submitAnswer],
  data () {
    return {
      timerSwitch: true,
      defaultVal: 0,
      isFirst: true,
      questionTypes: this.$store.getters.questionTypes,
      questionList: [],
      curQuestionId: -1, // 记录当前题目的下标
      questionTotal: 0,
      queryQuestionParam: {
        type: '',
        courseId: '',
        chapterId: '',
        sectionId: '',
        customerId: '',
        pageNum: 0,
        pageSize: 20
      },
      isJust: this.$store.getters.answerOptions,
      questionDifficulty: this.$store.getters.questionDifficulty,
      testTypes: this.$store.getters.testTypes,
      isRequestEnd: false,
      checkAnalysis: false,
      isAnswerAll: true,
      mainH: '',
      title: '',
      doNum: 0,
      //  答题卡的变量
      showSheet: false,
      isLoading: false,
      activeMode: 0
    }
  },
  watch: {
    curQuestionId (newValue) {
      this.$nextTick(() => {
        if (newValue > this.questionListLen - 1) {
          this.curQuestionId = newValue - 1
        }
      })
    }
  },
  computed: {
    questionListLen () {
      return this.questionList.length
    },
    qType () {
      return this.$store.getters.questionType + ''
    }
  },
  onLoad: function (options) {
    // this.title = options.title || '题目练习'
    this.title = this.$store.getters.curSubjectName || '题目练习'
    this.questionTotal = +options.total
    this.queryQuestionParam.pageNum = options.pageNum
    this._init()
    this.getQuestions()
  },
  onShow () {
    this.timerSwitch = true
    this.showSheet = false
    if (Number(this.$store.getters.questionType) === 5) {
      Dialog.alert({
        selector: '#van-tip',
        message: '多选题需左滑到下一题'
      }).then(() => {
        // on close
      })
    }
  },
  methods: {
    _init () {
      this.questionList = []
      this.curQuestionId = -1
      this.timerSwitch = true
      this.checkAnalysis = false
      this.activeMode = 0
      this.mainH = this.$store.getters.mainWrapHeight - 37
      this.queryQuestionParam.type = this.$store.getters.questionType
      this.queryQuestionParam.courseId = this.$store.getters.courseId
      this.queryQuestionParam.chapterId = this.$store.getters.chapterId
      this.queryQuestionParam.sectionId = this.$store.getters.sectionId
      this.queryQuestionParam.customerId = this.$store.getters.customerId
      this.isFirst = this.checkIsFirst()
      this.$store.dispatch('updateStartTime', currentDateTime())
    },
    getQuestions () {
      this.isLoading = true
      ApiGetQuestion(this.queryQuestionParam).then(res => {
        // 关闭加载
        mpvue.hideLoading()
        let items = res.rows
        if (!items) {
          this.isRequestEnd = true
          return
        }
        let currQId = this.questionList.length
        items = items.map((item) => {
          // 去掉题目的标签
          // item.questionName = item.questionName.replace(/<\/?.+?>/g, '').replace(/ /g, '')
          this.$set(item, 'selected', [])
          this.$set(item, 'qid', ++currQId)
          let correctAnswer = []
          let correctIndex = []
          if (item.type === '3') {
            correctIndex.push(item.isCorrect)
            item.answers = this.isJust
          } else {
            item.answers.forEach((item, index) => {
              if (Number(item.isCorrect) === 1) {
                correctAnswer.push(item.itemCode)
                correctIndex.push(index)
              }
            })
          }
          this.$set(item, 'correctAnswer', correctAnswer.join(''))
          this.$set(item, 'correctIndex', correctIndex)
          return item
        })
        this.questionList = this.questionList.concat(items)
        if (this.curQuestionId < 0) this.curQuestionId++
        this.isLoading = false
      })
    },
    getTimerString (countString) {
      this.$store.dispatch('updateTimerString', countString)
    },
    // 跳转至答题卡
    handleToSheet () {
      this.showSheet = true
      this.$store.dispatch('updateQuestionList', this.questionList)
    },
    handleCollect (id, curId) {
      ApiCollection({ id: id, customerId: this.$store.getters.customerId }).then(res => {
        this.questionList[curId].isMark = this.questionList[curId].isMark ? 0 : 1
      })
    },
    updateCurQuestionId () {
      if (this.curQuestionId < this.questionList.length - 1) {
        this.curQuestionId++
      }
    },
    // 修改父组件的值
    updateSelected (selected) {
      if (this.activeMode) {
        this.questionList[this.curQuestionId].selected = selected
      }
    },
    handleSubmit: debounce(function () {
      this.timerSwitch = false
      this.isAnswerAll = true
      this.$store.dispatch('updateQuestionList', this.questionList)
      let qList = JSON.parse(JSON.stringify(this.questionList))
      qList = this.eachQList(qList)
      let data = this.handleQListData(qList)
      data = this.handleSubmitData(data)
      if (!this.isAnswerAll) {
        Dialog.confirm({
          message: '您还有未答的题目哟~确定要交卷？',
          selector: '#van-tip'
        }).then(() => {
          // on confirm
          this.handleSubmitApi(data)
        }).catch(() => {
          // on cancel
          this.timerSwitch = true
        })
      } else {
        Dialog.confirm({
          message: '优秀！题目都做完啦，确定要交卷？',
          selector: '#van-tip'
        }).then(() => {
          // on confirm
          this.handleSubmitApi(data)
        }).catch(() => {
          // on cancel
          this.timerSwitch = true
        })
      }
    }, 300),
    handleSubmitApi (data) {
      this.timerSwitch = false
      ApiGetQuestionSubmit(data).then(res => {
        if (res.msg === '请做题') {
          Dialog.alert({
            message: '请做题',
            selector: '#van-tip'
          }).then(() => {
            // on close
            !this.timerSwitch && (this.timerSwitch = true)
          })
        } else {
          this.timerSwitch = false
          mpvue.redirectTo({
            url: '../answer_results/main?recordId=' + res.data.questionRecord.id
          })
        }
      })
    },
    goBack () {
      if (['1', '2', '4', '5', '6', '7', '8'].indexOf(this.$store.getters.questionType + '') > -1 || this.questionList.length < 1) {
        mpvue.navigateBack({ delata: 1 })
        return
      }
      this.timerSwitch = false
      this.isAnswerAll = true
      this.$store.dispatch('updateQuestionList', this.questionList)
      let qList = JSON.parse(JSON.stringify(this.questionList))
      qList = this.eachQList(qList)
      let data = this.handleQListData(qList)
      data = this.handleSubmitData(data)
      if (this.curQuestionId === this.questionList.length - 1 && this.isAnswerAll) {
        Dialog.confirm({
          message: '忘记交卷啦~',
          selector: '#van-tip',
          confirmButtonText: '立即交卷',
          cancelButtonText: '下次再说'
        }).then(() => {
          // on confirm
          this.handleSubmitApi(data)
        }).catch(() => {
          // on cancel
          mpvue.navigateBack({ delata: 1 })
        })
      } else {
        Dialog.confirm({
          message: '您还有题目未作答，交卷吗？',
          selector: '#van-tip',
          confirmButtonText: '立即交卷',
          cancelButtonText: '不做了'
        }).then(() => {
          // on confirm
          this.handleSubmitApi(data)
        }).catch(() => {
          // on cancel
          mpvue.navigateBack({ delata: 1 })
        })
      }
    },
    updateShowSheet (data) {
      this.showSheet = data
    },
    updateCurQuestionIdBySheet (index) {
      let tempIndex = parseInt(index) - 1
      this.curQuestionId = tempIndex
    },
    updateTimerSwitch (data) {
      this.timerSwitch = data
    },
    onCloseGuidelines () {
      this.isFirst = false
      mpvue.setStorageSync('firstPractice', 0)
    },
    checkIsFirst () {
      let firstPractice = mpvue.getStorageSync('firstPractice')
      if (firstPractice !== 0) {
        return true
      } else {
        mpvue.setStorageSync('firstPractice', 0)
        return false
      }
    },
    swiperChange: throttle(function (e) {
      this.checkAnalysis = false
      this.curQuestionId = e.mp.detail.current
    }, 200),
    activeModeChange: throttle(function (e) {
      this.activeMode = e.target.index
    }, 300),
    questionChange: throttle(function (e) {
      // this.activeMode = 0
    }, 300)
  }
}
</script>
<style lang="less" scoped>
@import "../../../static/style/common";

.mainContentContainer {
  background: rgba(249, 249, 249, 1);

  .header {
    .flex;
    .flex-pack-justify;
    padding: 0 15px;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
    border-top: 1px solid rgba(229, 229, 229, 0.7);

    .q-number {
      .q-num {
        color: #5ccce5;
      }
    }
  }

  .swiper-container {
    position: relative;
    padding-bottom: 50px;
    width: 100%;

    .q-content {
      padding: 25px 15px;
      .flex-v;
      box-sizing: border-box;
      .q-question {
        font-size: 15px;
        word-wrap: break-word;
        overflow: hidden;
        .quesiton-type {
          float: left;
          color: #f76f6f;
        }
      }

      .radio-box {
        padding-top: 15px;
      }

      .end-box {
        position: absolute;
        bottom: 60px;
        left: 0;
        width: 100%;

        .tips {
          text-align: center;
          font-size: 12px;
          color: #999999;
        }

        .submit-btn {
          margin: 10px auto 0;
          width: 100px;
          height: 32px;
          line-height: 32px;
          text-align: center;
          color: #fff;
          font-size: 15px;
          background: rgba(92, 204, 229, 1);
          -webkit-border-radius: 16px;
          -moz-border-radius: 16px;
          border-radius: 16px;
        }
      }

      .no-answer {
        .flex-1;
        .flex-v;
        .flex-pack-center;
        .flex-align-center;
        color: #666666;
        font-size: 12px;
      }
    }

    .section-title {
      .flex;
      .flex-pack-center;
      .flex-align-center;
      padding: 10px 0 10px 10px;
      background: #fff;

      & > img {
        display: block;
        width: 16px;
        height: 16px;
        margin-right: 5px;
      }

      & > div.section-name {
        .flex-4;
        font-size: 15px;
        color: #333333;
      }

      & > div.icon {
        .flex-1;
        color: #666666;
        text-align: right;
        padding-right: 10px;
      }
    }

    .analysis-container {
      background-color: #fff;
      padding: 0 10px;
      .title {
        color: #666666;
        font-size: 15px;
        padding: 5px 0;
      }
      .a-title,
      .b-box {
        height: 40px;
        line-height: 40px;
        color: #666666;
        font-size: 15px;
      }

      .analysis-answer {
        .flex-wrap;
        line-height: 30px;

        .answer-item {
          font-size: 14px;
          color: #333333;
          -webkit-flex: 0 1 50%;
          -ms-flex: 0 1 50%;
          flex: 0 1 50%;

          .warn {
            color: #f76f6f;
          }
        }
      }

      .b-box {
        .flex;
        .flex-pack-justify;

        .error-correction {
          font-size: 10px;
          color: #5ccce5;
        }
      }

      .analysis-txt {
        font-size: 14px;
        color: #333333;
        padding: 0 15px 5px 0;
        // text-indent: 2em;
      }

      .advice-txt {
        padding: 10px 0;
        font-size: 10px;
        color: #999999;
        text-align: center;
      }
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50px;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    z-index: 100;

    .footer-box {
      .flex;
      .flex-pack-center;
      padding-top: 3px;
      height: 100%;

      .sheet-box {
        .flex-1;
        height: 100%;

        img {
          display: block;
          width: 20px;
          height: 20px;
          margin: 0 auto;
          position: relative;
          bottom: -4px;
        }
        .title {
          text-align: center;
          font-size: 12px;
          height: 25px;
          line-height: 29px;
          .sub {
            color: #f76f6f;
          }
        }
      }

      .time-box {
        .flex-3;
        text-align: center;
        .ai-timer-container {
          height: 100%;
        }
        .show-time {
          color: #333333;
          font-size: 12px;
        }
        .icon-timer {
          position: relative;
          bottom: -3px;
          img {
            width: 20px;
            height: 20px;
          }
        }
      }

      .collect-box {
        .flex-1;

        text-align: center;
        img {
          display: block;
          width: 20px;
          height: 20px;
          margin: 0 auto;
          position: relative;
          bottom: -4px;
        }
        .title {
          text-align: center;
          font-size: 12px;
          height: 25px;
          line-height: 29px;
        }
      }
    }
  }

  /deep/ .van-tab__title {
    font-size: 14px;
  }
  /deep/ .van-tab--active {
    color: #f76f6f !important;
    font-weight: 500;
  }
}

.guidelines-popup {
  .guidelines-box {
    .flex-v;
    .flex-pack-center;
    .flex-align-center;
    height: 40vh;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
