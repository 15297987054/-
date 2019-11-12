<template>
  <div class="app-container background">
    <ai-header :back="customGoBack" :title="title"></ai-header>
    <div class="main-wrap">
      <div
        class="course"
        v-for="(data,index) in dataSource"
        :key="index"
        @tap.stop="handleClick(data.id)"
      >
        <span class="chapters">{{data.name}}</span>
        <span class="title"></span>
        <van-icon class="arrow" name="arrow"></van-icon>
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
      dataSource: [],
      queryForm: {
        // pageNum: 1,
        // pageSize: 8,
        type: 2,
        questionChapterInfoId: '',
        customerId: ''
      },
      mainH: '',
      title: ''
    }
  },
  // 页面跳转接受参数
  onLoad: function (options) {
    this.mainH = this.$store.getters.mainWrapHeight
    this.queryForm.questionChapterInfoId = options.courseId
    this.title = options.coursename
    this.$store.dispatch('updateCurSubjectName', this.title)
    this.$store.dispatch('updateCourseId', this.queryForm.questionChapterInfoId)
  },
  onShow () {
    this.queryForm.customerId = this.$store.getters.customerId
    ApiGetChapter(this.queryForm).then(res => {
      this.dataSource = res.rows
    })
  },
  methods: {
    handleClick (id) {
      this.$store.dispatch('updateChapterId', id)
      mpvue.navigateTo({
        url: '../practice/main?title=我的错题'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.course {
  position: relative;
  border: 1px solid #ffffff;
  width: 315px;
  height: 50px;
  left: 15px;
  right: 15px;
  top: 5px;
  padding: 0 15px;
  border-radius: 10px;
  /*box-shadow: 0 4px 4px #EDEDED;*/
  margin-top: 15px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(237, 237, 237, 0.67);

  .title {
    position: absolute;
    margin-top: 15px;
    margin-left: 65px;
    margin-bottom: 15px;
    font-size: 15px;
  }

  .arrow {
    position: absolute;
    margin-top: 17px;
    right: 15px;
    font-size: 15px;
    color: #666666;
  }

  .chapters {
    position: absolute;
    margin-top: 15px;
    margin-left: 5px;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 15px;
  }
}

.background {
  position: absolute;
  margin-top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(249, 249, 249, 1);
}
</style>
