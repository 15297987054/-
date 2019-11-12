<template>
  <van-popup
    custom-style="background-color:#fff;width:100%;"
    custom-class="sheet-popup"
    :show="show"
    position="right"
    @close="onClose"
  >
    <div class="app-container sheet-container">
      <ai-header :back="goBack" title="答题卡"></ai-header>
      <div class="main-wrap">
        <div class="main">
          <div
            class="answer-box"
            v-for="(question,index) in questionList"
            :key="index"
            @tap.stop="handleClick(question.qid)"
          >
            <span :class="{item:true,active:question.selected.length}">{{index+1}}</span>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="submit-btn" @tap.stop="handleSubmit">交卷并查看结果</div>
      </div>
    </div>
    <van-dialog id="van-dialog" />
  </van-popup>
</template>

<script>
import Dialog from '../../../static/vant/dialog/dialog'
import { ApiGetQuestionSubmit } from '@/service/'
import { debounce } from '../../utils'
import AiHeader from '@/components/AiHeader'
import customNav from '@/mixins/customNav'
import submitAnswer from '@/mixins/submitAnswer'

export default {
  components: {
    AiHeader
  },
  mixins: [customNav, submitAnswer],
  props: {
    show: {
      type: [Boolean],
      default: false,
      required: true
    }
  },
  data () {
    return {
      isAnswerAll: true,
      doNum: 0,
      mainH: '',
      timer: null
    }
  },
  computed: {
    questionList () {
      return this.$store.getters.questionList
    }
  },
  onLoad () {
    this.mainH = this.$store.getters.mainWrapHeight
  },
  destroyed () {
    this.timer && clearTimeout(this.timer)
  },
  methods: {
    handleSubmit: debounce(function () {
      this.isAnswerAll = true
      let qList = JSON.parse(JSON.stringify(this.questionList))
      qList = this.eachQList(qList)
      let data = this.handleQListData(qList)
      data = this.handleSubmitData(data)
      if (!this.isAnswerAll) {
        Dialog.confirm({
          message: '您还有未答的题目哟~确定要交卷？'
        }).then(() => {
          // on confirm
          ApiGetQuestionSubmit(data).then(res => {
            if (res.msg === '请做题') {
              Dialog.alert({
                selector: '#van-dialog',
                message: '您还没有做题'
              }).then(() => {
                // on close
              })
              return
            }
            res = res.data
            this.timer = setTimeout(() => {
              mpvue.redirectTo({
                url: '../answer_results/main?recordId=' + res.questionRecord.id
              })
            }, 100)
          })
        }).catch(() => {
          // on cancel
        })
      } else {
        ApiGetQuestionSubmit(data).then(res => {
          if (res.msg === '请做题') {
            Dialog.alert({
              message: '请做题',
              selector: '#van-tip'
            }).then(() => {
              // on close
              // this.$emit('updateTimerSwitch', true)
            })
          } else {
            this.$emit('updateTimerSwitch', false)
            mpvue.redirectTo({
              url: '../answer_results/main?recordId=' + res.data.questionRecord.id
            })
          }
        })
      }
    }, 400, false),
    handleClick (index) {
      this.$emit('updateCurQuestionIdBySheet', index)
      this.goBack()
    },
    goBack () {
      this.show = false
      this.$emit('updateShowSheet', false)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../static/style/common.less";

.sheet-container {
  width: 100%;
  background-color: rgba(255, 255, 255, 1);

  .main-wrap {
    position: relative;
    padding-bottom: 65px;
    border-top: 0.5px solid #e5e5e5;
  }

  .main {
    .flex-wrap;
    padding: 19px 15px 0;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    .answer-box {
      .flex-v;
      .flex-pack-center;
      .flex-align-center;
      height: 42px;
      -webkit-flex: 0 0 20%;
      -ms-flex: 0 0 20%;
      flex: 0 0 20%;

      &:nth-of-type(n + 6) {
        margin-top: 15px;
      }

      .item {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        width: 40px;
        margin: 8px;
        font-size: 14px;
        color: #999999;
        text-align: center;
        border: 1px solid #999999;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
      }

      .active {
        color: #fff;
        border: 1px solid rgba(92, 204, 229, 1);
        background-color: rgba(92, 204, 229, 1);
      }
    }
  }

  .footer {
    .flex;
    .flex-pack-center;
    .flex-align-center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 999;
    background-color: #fff;
    border-top: 0.5px solid #e5e5e5;

    .submit-btn {
      width: 60%;
      height: 33px;
      line-height: 33px;
      font-size: 15px;
      color: #fff;
      text-align: center;
      background: rgba(92, 204, 229, 1);
      -webkit-border-radius: 20px;
      -moz-border-radius: 20px;
      border-radius: 20px;
    }
  }
}
</style>
