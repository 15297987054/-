<template>
  <div class="app-container background">
    <ai-header :back="customGoBack" :title="title"></ai-header>
    <div class="main-wrap">
      <div class="top">
        <div
          class="collection"
          v-for="(collectedQuestion,index) in collectedQuestions"
          :key="index"
          @tap.stop="handleClick(collectedQuestion.id)"
        >
          <span class="chapters">{{collectedQuestion.name}}</span>
          <span class="course">{{collectedQuestion.course}}</span>
          <van-icon class="arrow" name="arrow"></van-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ApiGetChapter } from '@/service/'
import AiHeader from '@/components/AiHeader'
import customNav from '@/mixins/customNav'

export default {
  components: {
    AiHeader
  },
  mixins: [customNav],
  data () {
    return {
      queryForm: {
        // pageNum: 1,
        // pageSize: 8,
        type: 1,
        questionChapterInfoId: '',
        customerId: ''
      },
      collectedQuestions: [],
      courses: {
        chapters: '',
        course: ''
      },
      mainH: '',
      title: ''
    }
  },
  // 页面跳转接受参数
  onLoad: function (options) {
    mpvue.showLoading({
      title: '加载中',
      mask: true
    })
    this.mainH = this.$store.getters.mainWrapHeight
    this.queryForm.questionChapterInfoId = options.id
    this.title = options.coursename
    this.$store.dispatch('updateCurSubjectName', this.title)
    this.$store.dispatch('updateCourseId', this.queryForm.questionChapterInfoId)
  },
  onShow () {
    this.queryForm.customerId = this.$store.getters.customerId
    ApiGetChapter(this.queryForm).then(res => {
      this.collectedQuestions = res.rows
      mpvue.hideLoading()
    })
  },
  methods: {
    handleClick (id) {
      this.$store.dispatch('updateChapterId', id)
      mpvue.navigateTo({
        url: '../practice/main?title=我的收藏'
      })
    }
  }
}
</script>

<style scoped>
.main-wrap {
  position: relative;
}

.collection {
  border: 1px solid #ffffff;
  width: 345px;
  height: 50px;
  border-radius: 8px;
  margin-top: 15px;
  margin-left: 15px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(237, 237, 237, 0.67);
}

.top {
  margin-top: 20pt;
}

.background {
  position: absolute;
  margin-top: 5px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
}

.chapters {
  position: absolute;
  margin-left: 15px;
  margin-top: 15px;
  font-weight: bold;
  font-size: 15px;
}

.course {
  position: absolute;
  margin-left: 70px;
  margin-top: 15px;
  font-size: 15px;
}

.arrow {
  position: absolute;
  margin-top: 17px;
  right: 20px;
  font-size: 15px;
  color: #666666;
}
</style>
