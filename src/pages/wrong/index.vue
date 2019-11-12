<template>
  <div class="app-container">
    <ai-header :back="customGoBack" title="我的错题"></ai-header>
    <div class="main-wrap">
      <div class="no-mistake" v-if="dataSource.length === 0">
        <img class="image" src="/static/images/wrong/image_no_mistake.svg" />
        <div class="tip-txt">太优秀了还没有错题~</div>
      </div>
      <div class="background" v-else>
        <div
          class="course"
          v-for="(data,index) in dataSource"
          :key="index"
          @tap.stop="handleClick(data)"
        >
          <p class="course-name">{{data.name}}</p>
          <span class="course-number">{{data.questionTotal}}题</span>
          <img class="img-box" :src="appImgPath+data.coverUrl" :alt="dataSource.questionNumber" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ApiQuestionChapterInfo } from '@/service/'
import AiHeader from '@/components/AiHeader'
import customNav from '@/mixins/customNav'
import base from '../../utils/common'

export default {
  components: { AiHeader },
  mixins: [customNav],
  data () {
    return {
      dataSource: [],
      queryForm: {
        // pageNum: 1,
        // pageSize: 8,
        type: 2,
        questionBankId: '',
        customerId: ''
      },
      clickFlag: false,
      appImgPath: '',
      mainH: ''
    }
  },
  onShow () {
    this.mainH = this.$store.getters.mainWrapHeight
    this.appImgPath = base.config[base.config.active].appImgPath
    this.queryForm.customerId = this.$store.getters.customerId
    this.queryForm.questionBankId = this.$store.getters.questionBankId
    this.$store.dispatch('updateQuestionBankId', this.queryForm.questionBankId)
    this.$store.dispatch('updateQuestionType', this.queryForm.type)
    ApiQuestionChapterInfo(this.queryForm).then(res => {
      this.dataSource = res.data.questionChapterInfoList
    })
  },
  methods: {
    handleClick (item) {
      mpvue.navigateTo({
        url: '../wrongChapter/main?courseId=' + item.id + '&coursename=' + item.name
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../static/style/common";

.main-wrap {
  position: relative;
}

.course {
  position: relative;
  width: 153px;
  height: 116px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  margin-top: 30px;
  margin-left: 19px;
  margin-right: 14px;
  background-color: #ffffff;

  &:nth-of-type(1),
  &:nth-of-type(2) {
    margin-top: 10px;
  }

  .course-name {
    .oneline-ellipsis;
    position: absolute;
    margin-left: 10px;
    margin-top: 22px;
    font-weight: bold;
    font-size: 13px;
    color: #ffffff;
    line-height: 12px;
    z-index: 100;
  }

  .course-number {
    position: absolute;
    right: 14px;
    margin-top: 79px;
    font-weight: bold;
    font-size: 16px;
    color: #ffffff;
    line-height: 20px;
    z-index: 100;
  }

  .img-box {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    border-radius: 10px;
  }
}

.background {
  position: absolute;
  margin-top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
}

.no-mistake {
  .flex-v;
  .flex-align-center;
  .flex-pack-center;
  height: 100%;
  width: 100%;
  background: #fff;

  .tip-txt {
    z-index: 10;
    font-size: 14px;
    color: #999999;
    text-align: center;
  }

  .image {
    display: block;
    margin: 0 auto 30px;
    width: 160px;
    height: 120px;
  }
}
</style>
