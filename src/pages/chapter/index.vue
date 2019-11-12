<template>
  <div class="chapter-body">
    <ai-header
      :back="goBack"
      :title="subjectName"
      customStyle="background-color:#5CCCE5;color:#fff;"
    ></ai-header>
    <div class="main-wrap" :style="{height:mainH + 'px'}">
      <div class="chapter-top">
        <div class="chapter-schedule">
          <img :src="processImg" alt />
        </div>
        <div class="complete-status">
          <p>已完成</p>
          <p class="complete-num">{{questionNumber>questionTotal?questionTotal:questionNumber}}</p>
          <p>总题数：{{questionTotal}}</p>
        </div>
        <div class="chapter-name" v-if="!isTest">
          <span
            class="chapter-practice"
            :class="{'active': active == 1}"
            @click="switchActive(1)"
          >章节练习</span>
          <div class="vertical-line"></div>
          <span
            class="question-type-practice"
            :class="{'active': active == 2}"
            @click="switchActive(2)"
          >题型练习</span>
        </div>
      </div>
      <template v-if="active == 1">
        <chapter :chapters="chapters" :windowHeight="windowHeight" @loadMore="loadMore"></chapter>
      </template>
      <template v-if="active == 2">
        <questionType
          :chapterType="chapterType"
          :chapterTypeImgList="chapterTypeImgList"
          :windowHeight="windowHeight"
        ></questionType>
      </template>
    </div>
  </div>
</template>

<script>
import chapter from '@/components/chapter/chapter'
import util from '@/utils/common'
import { ApiGetChapter, ApiGetQuestionType, ApiSubjectProcess } from '@/service/'
import questionType from '@/components/chapter/question-type'
import AiHeader from '@/components/AiHeader'
import customNav from '@/mixins/customNav'

export default {
  components: {
    chapter,
    questionType,
    AiHeader
  },
  mixins: [customNav],
  data () {
    return {
      queryForm: {
        type: 0,
        questionChapterInfoId: ''
        // customerId: '',
        // pageNum: 1,
        // pageSize: 10
      },
      processImg: '/static/images/chapter/progress_bar1.svg',
      questionTotal: '', // 题目总数
      questionNumber: '', // 做题总数
      chapterTotal: '', // 章节已做总数
      questionTypeTotal: '', // 题型已做总数
      active: 1,
      chapters: [], // 章节
      chapterType: [], // 题型,
      chapterTypeImgList: [],
      windowHeight: '', // 章节区域高度
      windowWidth: '', // 屏幕宽度
      isTest: '',
      mainH: '',
      subjectName: ''
    }
  },
  onShow () {
    this._init()
    this.mainH = this.$store.getters.mainWrapHeight
    let that = this
    mpvue.getSystemInfo({
      success: function (res) {
        that.windowWidth = res.windowWidth / 2
      }
    })
    this.windowHeight = this.mainH - 170
    this.queryForm.questionChapterInfoId = this.$store.getters.courseId
    this.isTest = this.$store.getters.questionType === '3'
    // 如果不是核心考点进入
    if (this.$store.getters.questionType !== '3') {
      this.switchActive(1)
    }
    this.queryForm.type = this.$store.getters.questionType
    ApiSubjectProcess({
      courseId: that.$store.getters.courseId,
      // customerId: this.$store.getters.customerId,
      type: that.$store.getters.questionType
    }).then(result => {
      let pro = result.data.questionChapterInfoVO
      if (util.isNotEmpty(pro)) {
        that.subjectName = pro.name || '选择章节'
        this.$store.dispatch('updateCurSubjectName', that.subjectName)
        that.questionTotal = util.isNotEmpty(pro.questionTotal) ? pro.questionTotal : 0
        that.chapterTotal = util.isNotEmpty(pro.questionNumber) ? pro.questionNumber : 0
        that.questionNumber = util.isNotEmpty(pro.questionNumber) ? pro.questionNumber : 0
        this.computeProcess()
      }
    })
    // 章节选择
    ApiGetChapter(this.queryForm).then(res => {
      that.chapters = res.rows
    })
    // 题型选择
    ApiGetQuestionType({
      // customerId: this.queryForm.customerId,
      courseId: this.queryForm.questionChapterInfoId
    }).then(result => {
      that.chapterTypeImgList = result.data.imgList
      that.chapterType = result.data.questionTypeList
      if (that.chapterType) {
        let total = 0
        for (let i = 0; i < that.chapterType.length; i++) {
          total += (util.isNotEmpty(that.chapterType[i].num) ? that.chapterType[i].num : 0)
        }
        that.questionTypeTotal = total
      }
    })
  },
  methods: {
    _init () {
      this.questionTotal = '' // 题目总数
      this.questionNumber = '' // 做题总数
      this.chapterTotal = '' // 章节已做总数
      this.questionTypeTotal = '' // 题型已做总数
      this.active = 1
      this.chapters = [] // 章节
      this.chapterType = [] // 题型
      this.subjectName = ''
    },
    switchActive (e) {
      this.active = e
      if (e === 1) {
        this.questionNumber = this.chapterTotal
        this.$store.dispatch('updateQuestionType', 0)
        this.computeProcess()
      } else {
        this.questionNumber = this.questionTypeTotal
        this.computeProcess()
      }
    },
    computeProcess () {
      let total = util.isNotEmpty(this.questionTotal) ? this.questionTotal : 0
      let quNum = util.isNotEmpty(this.questionNumber) ? this.questionNumber : 0
      let process = (quNum / total).toFixed(2)
      process = parseFloat(process)
      if (process > 1) process = 1
      if (quNum === 0) {
        this.processImg = '/static/images/chapter/progress_bar1.svg'
      } else {
        switch (true) {
          case process < 0.1 && process > 0:
            this.processImg = '/static/images/chapter/progress_bar1.svg'
            break
          case process < 0.2 && process >= 0.1:
            this.processImg = '/static/images/chapter/progress_bar2.svg'
            break
          case process < 0.3 && process >= 0.2:
            this.processImg = '/static/images/chapter/progress_bar3.svg'
            break
          case (process < 0.4 && process >= 0.3):
            this.processImg = '/static/images/chapter/progress_bar4.svg'
            break
          case process < 0.5 && process >= 0.4:
            this.processImg = '/static/images/chapter/progress_bar5.svg'
            break
          case process < 0.6 && process >= 0.5:
            this.processImg = '/static/images/chapter/progress_bar6.svg'
            break
          case process < 0.7 && process >= 0.6:
            this.processImg = '/static/images/chapter/progress_bar7.svg'
            break
          case process < 0.8 && process >= 0.7:
            this.processImg = '/static/images/chapter/progress_bar8.svg'
            break
          case process < 0.9 && process >= 0.8:
            this.processImg = '/static/images/chapter/progress_bar9.svg'
            break
          case process <= 1 && process >= 0.9:
            this.processImg = '/static/images/chapter/progress_bar10.svg'
            break
          default:
            this.processImg = '/static/images/chapter/progress_bar1.svg'
        }
      }
    },
    goBack () {
      if (this.$store.getters.questionType === '3') {
        mpvue.reLaunch({
          url: '../index/main'
        })
      } else {
        mpvue.redirectTo({
          url: '../subject/main'
        })
      }
    },
    refresh () {
    },
    loadMore () {
      // this.queryForm.pageNum++
      // 章节选择
      // ApiGetChapter(this.queryForm).then(res => {
      // this.chapters = res.rows
      // this.chapters = this.chapters.concat(res.rows)
      // })
    },
    viewScroll () {
    }
  }
}
</script>

<style lang="less" scoped>
.chapter-body {
  .chapter-top {
    height: 170px;
    background-color: #5ccce5;
    position: relative;

    .chapter-schedule {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      padding: 5px 25px 25px 25px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;

      & > img {
        width: 100%;
        height: 100%;
      }
    }

    .complete-status {
      position: absolute;
      left: 50%;
      top: 53%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 10px;
      text-align: center;

      .complete-num {
        font-size: 23px;
        font-weight: bold;
      }
    }

    .chapter-name {
      position: absolute;
      left: 15px;
      bottom: -26px;
      border-radius: 8px;
      background-color: white;
      height: 52px;
      width: calc(100% - 30px);
      box-shadow: 0 2px 4px 0 rgba(237, 237, 237, 0.67);
      display: flex;
      justify-content: space-around;
      align-items: center;
      z-index: 999;

      .chapter-practice {
        color: #333333;
        font-size: 15px;
        margin-left: 56px;
        font-weight: 400;
      }

      .vertical-line {
        height: 24px;
        width: 1px;
        background: #e5e5e5;
      }

      .question-type-practice {
        color: #333333;
        font-size: 15px;
        margin-right: 56px;
        font-weight: 400;
      }

      .active {
        color: #5ccce5;
        font-weight: bold;
      }
    }
  }
}
</style>
