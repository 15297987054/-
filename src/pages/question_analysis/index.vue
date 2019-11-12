<template>
  <div class="app-container mainContentContainer flex-v" v-if="questionList.length">
    <ai-header :back="customGoBack" title="题目分析"></ai-header>
    <div class="header">
      <div class="q-type">{{questionTypes[questionList[curQuestionId].type]}}</div>
      <div class="q-number">
        <span class="q-num">{{curQuestionId+1}}</span>
        /{{questionList.length}}
      </div>
    </div>
    <swiper
      class="swiper-container"
      interval="5000"
      duration="100"
      :current="curQuestionId"
      @animationfinish="swiperChange"
      :style="{height:mainH-50+'px'}"
    >
      <swiper-item v-for="(item,index) in questionList" :key="index" style="overflow-y: scroll;">
        <template v-if="index - curQuestionId < 2 && index - curQuestionId > -2">
          <div class="q-content">
            <div class="q-question" v-html="item.questionName"></div>
            <div class="radio-box">
              <ai-radio
                v-if="item.type!=='2'"
                :selected.sync="item.myAnswer"
                :options="item.answers"
                :question-type="item.type"
              ></ai-radio>
              <ai-checkbox
                v-if="item.type==='2'"
                :selected.sync="item.myAnswer"
                :options="item.answers"
              ></ai-checkbox>
            </div>
          </div>
          <div class="analysis-container">
            <div class="a-title">题目解析：</div>
            <div class="analysis-answer">
              <div class="answer-item" v-if="item.type!=='3'">正确答案：{{item.correctAnswer}}</div>
              <div class="answer-item" v-else>正确答案：{{item.isCorrect=='1'?'正确':'错误'}}</div>
              <div class="answer-item" v-if="item.type!=='3'">您的答案：{{item.myAnswerTxt}}</div>
              <div class="answer-item" v-else>您的答案：{{item.myAnswer=='1'?'正确':'错误'}}</div>
              <div class="answer-item">难度：{{questionDifficulty[item.questionDifficulty]}}</div>
              <div class="answer-item">
                考点类型：
                <span class="warn">{{testTypes[item.testType]}}</span>
              </div>
            </div>
            <div class="b-box">
              <div class="b-title">解析：</div>
              <div class="error-correction" @tap.stop="handleClickTo(item)">点击纠错</div>
            </div>
            <div class="analysis-txt" v-html="item.remark"></div>
            <!--        <div class="advice-txt">-->
            <!--          <p> 您第5次做错这道题~</p>-->
            <!--          <p>收藏复习一下鸭</p>-->
            <!--        </div>-->
          </div>
        </template>
      </swiper-item>
    </swiper>
    <div class="footer">
      <div
        class="footer-box"
        @tap.stop="handleCollect(questionList[curQuestionId].id,curQuestionId)"
      >
        <img
          v-if="!questionList[curQuestionId].isMark"
          src="../../../static/images/question/collect_question.svg"
          alt="点击收藏"
        />
        <img v-else src="../../../static/images/question/collect_question_selected.svg" alt="取消收藏" />
      </div>
    </div>
  </div>
  <div v-else class="app-container" :style="{height:mainH+'px'}">
    <div style="text-align: center;padding: 10px 0;font-size: 14px;color: #ccc;">您没有做题</div>
    <div class="footer">&nbsp;</div>
  </div>
</template>
<script>
import AiRadio from '@/components/AiRadioAnalysis'
import AiCheckbox from '@/components/AiCheckboxAnalysis'
import AiTimer from '@/components/AiTimer'
import { ApiQuestionAnalysis, ApiCollection } from '@/service/'
import AiHeader from '@/components/AiHeader'
import customNav from '@/mixins/customNav'
import { throttle } from '../../utils'
export default {
  components: { AiRadio, AiCheckbox, AiTimer, AiHeader },
  mixins: [customNav],
  data () {
    return {
      mainH: '',
      isLoading: false,
      questionTypes: this.$store.getters.questionTypes,
      questionList: [],
      curQuestionId: -1,
      curId: '',
      questionDifficulty: this.$store.getters.questionDifficulty,
      testTypes: this.$store.getters.testTypes,
      isJudge: this.$store.getters.answerOptions
    }
  },
  watch: {
    'curQuestionId' (newValue) {
      this.$nextTick(() => {
        if (newValue < this.questionListLen) {
          if (!this.isLoading) this.curQuestionId = newValue
        } else {
          this.curQuestionId = newValue - 1
        }
      })
    }
  },
  computed: {
    questionListLen () {
      return this.questionList.length
    }
  },
  onLoad (options) {
    this.curId = options.id || 93
  },
  onShow () {
    this._init()
    this.getQuestions()
  },
  methods: {
    _init () {
      mpvue.showLoading({
        title: '加载中',
        mask: true
      })
      this.mainH = this.$store.getters.mainWrapHeight - 37
      this.questionList = []
      this.curQuestionId = -1
    },
    getQuestions () {
      ApiQuestionAnalysis({ id: this.curId, customerId: this.$store.getters.customerId }, this.curId).then(res => {
        let temp = res.rows
        if (temp.length) {
          this.questionList = this.handleData(temp)
          if (this.curQuestionId < 0) this.curQuestionId++
          this.isLoading = false
          // 关闭加载
          mpvue.hideLoading()
        }
      })
    },
    handleData (data) {
      if (!Array.isArray(data) || !data.length) return []
      return data.map((item) => {
        let correctAnswer = []
        item.answers.forEach((item) => {
          if (parseInt(item.isCorrect) === 1) {
            correctAnswer.push(item.itemCode)
          }
        })
        this.$set(item, 'correctAnswer', correctAnswer.join(''))
        this.$set(item, 'myAnswerTxt', item.myAnswer)
        if (parseInt(item.type) === 3) {
          item.answers = JSON.parse(JSON.stringify(this.isJudge))
          item.answers[parseInt(item.isCorrect)].isCorrect = '1'
        } else {
          // 将ABCD转为0123
          item.myAnswer = this.exchangeToIndex(item.myAnswer.split(''))
        }
        return item
      })
    },
    // 将ADCD转为1234
    exchangeToIndex (data) {
      return data.map((item) => {
        item = this.$store.getters.selectOptions.indexOf(item)
        return item
      })
    },
    handleClickTo (item) {
      mpvue.navigateTo({ url: '../feedback_corrective/main?qid=' + item.id })
    },
    handleCollect (id, curId) {
      ApiCollection({ id: id, customerId: this.$store.getters.customerId }).then(res => {
        this.questionList[curId].isMark = this.questionList[curId].isMark ? 0 : 1
      })
    },
    swiperChange: throttle(function (e) {
      this.curQuestionId = e.mp.detail.current
    }, 500)
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
    width: 100%;
    .q-content {
      margin: 25px 0;
      padding: 0 15px;

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
        bottom: 35px;
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
          border-radius: 16px;
        }
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
        padding: 10px 15px 10px 0;
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
    line-height: 50px;
    width: 100%;
    background-color: #fff;
    z-index: 1000;

    .footer-box {
      .flex;
      .flex-pack-center;
      .flex-align-center;
      height: 100%;

      img {
        display: block;
        width: 18px;
        height: 18px;
      }
    }
  }
}
</style>
