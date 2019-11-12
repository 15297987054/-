<template>
  <div class="app-container results-container">
    <ai-header :back="goBack" title="答题结果"></ai-header>
    <div class="main-wrap">
      <div class="main-container">
        <div class="top-container">
          <div class="circle-box" :style="circleBoxStyle">
            <CircleProgress
              :unit="unit"
              :percent="percent"
              canvasId="progress"
              strokeType="round"
              strokeColor="#5CCCE5"
              strokeBgColor="#EBEBEB"
              strokeWidth="10"
            ></CircleProgress>
          </div>
          <div class="encourage-txt">{{tipWords[curStage]}}</div>
        </div>
        <div class="answer-status">
          <div class="box-item">
            <div class="tip">用时</div>
            <div class="useTime bottom">{{timeString}}</div>
          </div>
          <div class="box-item">
            <div class="tip">答对</div>
            <div class="right-percent bottom">
              <span class="right">{{correctNum}}</span>
              道/{{qList.length}}题
            </div>
          </div>
        </div>
        <div class="answer-container">
          <div class="title">答题卡</div>
          <div class="answer-list" v-if="qList.length" :style="{maxHeight:mainH-450+'px'}">
            <div class="answer-box" v-for="(item,index) in qList" :key="index">
              <span
                :class="{item:true,correct:item.isCorrect === 1 || item.type>3,error:item.isCorrect === 0 && item.type<4,nodo:item.isCorrect === 99}"
              >{{index+1}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="f-left" @tap.stop="viewAnalysis">
          <div>查看分析</div>
        </div>
        <div class="f-right" @tap.stop="redo">
          <div>再做一遍</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CircleProgress from '@/components/CircleProgress'
import AiHeader from '@/components/AiHeader'
import customNav from '@/mixins/customNav'
// import {ApiGetQuestionSubmit} from '@/service'
export default {
  components: { CircleProgress, AiHeader },
  mixins: [customNav],
  data () {
    return {
      unit: 400,
      // percent: 0.6,
      correctNum: 0,
      doNum: 0,
      countNum: 0,
      recordId: '',
      qList: [],
      tipWords: [
        '不要灰心，继续加油！',
        '还有很大的提升空间！继续努力！',
        '还有两把刷子，往学霸迈进吧！',
        '太优秀了吧？'
      ],
      curStage: 3,
      mainH: '',
      timer: null,
      timeString: ''
    }
  },
  computed: {
    circleBoxStyle () {
      return `width:${this.unit}rpx;height:${this.unit}rpx`
    },
    percent () {
      let n = parseFloat((parseInt(this.correctNum) / parseInt(this.qList.length)).toFixed(2))
      if (n > 0.79) {
        this.curStage = 3
      } else if (n > 0.59 && n < 0.8) {
        this.curStage = 2
      } else if (n > 0.29 && n < 0.6) {
        this.curStage = 1
      } else {
        this.curStage = 0
      }
      return n
    }
  },
  onLoad (options) {
    this.recordId = options.recordId || ''
    this.mainH = this.$store.getters.mainWrapHeight
  },
  onShow () {
    mpvue.showLoading({
      title: '加载中',
      mask: true
    })
    this.timeString = this.countTimeString()
    this.qList = JSON.parse(JSON.stringify(this.$store.getters.questionList)) // 深度拷贝
    this.qList = this.eachQList(this.qList)
    this.timer = setTimeout(() => {
      mpvue.hideLoading()
    }, 1000)
  },
  destroyed () {
    this.timer && clearTimeout(this.timer)
  },
  methods: {
    // 查看分析
    viewAnalysis () {
      mpvue.navigateTo({
        url: '../question_analysis/main?id=' + this.recordId
      })
    },
    redo () {
      let type = ['4', '5', '6']
      if (type.indexOf(this.$store.getters.questionType.toString()) > -1) {
        let practiceSelect = mpvue.getStorageSync('practiceSelect')
        mpvue.redirectTo({
          url: '../practice_select/main?pageNum=' + practiceSelect.pageNum + '&total=' + practiceSelect.total
        })
      } else {
        mpvue.redirectTo({
          url: '../practice/main'
        })
      }
    },
    countTimeString () {
      let arr = this.$store.getters.timerString.split(':').reverse()
      let len = arr.length
      if (len === 1) {
        return `00′${arr[0]}″`
      } else if (len === 2) {
        return `${arr[1]}′${arr[0]}″`
      } else {
        return `${arr[2]}:${arr[1]}′${arr[0]}″`
      }
    },
    handleQListData (data) {
      let len = data.length
      if (!len) {
        return []
      }
      while (len--) {
        let arr = []
        if (!data[len].selected.length) {
          data.splice(len, 1)
        } else {
          for (let i = 0; i < data[len].selected.length; i++) {
            let curValueIndex = data[len].selected[i]
            arr.push(data[len].answers[curValueIndex])
          }
          data[len].answers = arr
          delete data[len].selected
          delete data[len].correctAnswer
        }
      }
      return data
    },
    handleSubmitData (data) {
      return {
        type: this.$store.getters.questionType,
        customerId: this.$store.getters.customerId,
        courseId: this.$store.getters.courseId,
        chapterId: this.$store.getters.chapterId,
        sectionId: this.$store.getters.sectionId || '',
        duration: this.stringToMinutes(this.$store.getters.timerString),
        startTime: this.$store.getters.startTime,
        endTime: this.$store.getters.endTime,
        questionList: data
      }
    },
    stringToMinutes (string) {
      let arr = string.split(':').reverse()
      return parseInt(arr[2] || 0) * 60 + parseInt(arr[1] || 0) + Math.floor(parseInt(arr[0]) / 60 + 1)
    },
    eachQList (data) {
      var c = 0
      var t = 0
      let temp = data.map((item) => {
        t = t + 1
        if (item.type > 3) {
          c++
          this.$set(item, 'isCorrect', 1)
          return item
        } else {
          if (item.selected.length < 1) {
            item.isCorrect = 99
            return item
          }
          if (item.type !== '3') {
            let correct = item.correctAnswer.split('').sort()
            let mySelected = this.optionsToString(item.selected).split('').sort()
            if (correct.join('') === mySelected.join('')) {
              c++
              item.isCorrect = 1
            } else {
              item.isCorrect = 0
            }
          } else {
            if (item.isCorrect === item.selected[0]) {
              c++
              item.isCorrect = 1
            } else {
              item.isCorrect = 0
            }
          }
          return item
        }
      })
      this.correctNum = c
      this.doNum = t
      return temp
    },
    optionsToString (data) {
      let str = ''
      for (let i = 0; i < data.length; i++) {
        str += this.$store.getters.selectOptions[data[i]]
      }
      return str
    },
    goBack () {
      mpvue.redirectTo({
        url: '../chapter/main'
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../static/style/common";

.results-container {
  color: #333333;

  .top-container {
    .flex-v;
    .flex-align-center;
    .flex-pack-center;
    /*background-color: #fff;*/
    /*position: relative;*/
    height: 210px;

    .circle-box {
      position: relative;
    }

    .encourage-txt {
      position: relative;
      top: -20px;
      color: #666666;
      font-size: 12px;
      text-align: center;
    }
  }

  .answer-status {
    .flex;
    padding: 15px 0;
    height: 75px;
    background-color: #fff;

    .box-item {
      .flex-1;
      padding: 0 10px;

      &:nth-of-type(1) {
        border-right: 1px solid #e5e5e5;
      }

      &:nth-of-type(2) {
        padding-left: 15px;
      }

      .tip {
        padding: 5px 0;
        font-size: 14px;
      }

      .bottom {
        padding-left: 30px;
      }

      .useTime {
        font-size: 24px;
        font-weight: bold;
        color: #5ccce5;
      }

      .right-percent {
        font-size: 12px;

        .right {
          color: #5ccce5;
          font-size: 24px;
          font-weight: bold;
        }
      }
    }
  }

  .answer-container {
    .title {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      padding: 0 10px;
    }

    .answer-list {
      overflow-y: scroll;
      padding: 10px;
      margin-bottom: 2px;
      background-color: #fff;
      .flex-wrap;

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

        span.item {
          display: block;
          width: 40px;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          text-align: center;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
        }
      }

      .correct {
        color: #fff;
        background: rgba(69, 210, 179, 1);
        border: 1px solid rgba(78, 216, 187, 1);
      }

      .error {
        color: #fff;
        background: rgba(247, 111, 111, 1);
        border: 1px solid rgba(247, 111, 111, 1);
      }

      .nodo {
        color: #666666;
        border: 1px solid #e3e3e3;
      }
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    .flex;
    .flex-align-center;
    .flex-pack-center;

    .f-left,
    .f-right {
      .flex-1;
      .flex;
      .flex-align-center;
      .flex-pack-center;

      & > div {
        font-size: 15px;
        width: 75%;
        height: 32px;
        line-height: 32px;
        text-align: center;
        -webkit-border-radius: 16px;
        -moz-border-radius: 16px;
        border-radius: 16px;
      }
    }

    .f-left {
      & > div {
        color: #fff;
        background: rgba(92, 204, 229, 1);
      }
    }

    .f-right {
      & > div {
        color: rgba(92, 204, 229, 1);
        background: #fff;
        border: 1px solid rgba(92, 204, 229, 1);
      }
    }
  }
}
</style>
