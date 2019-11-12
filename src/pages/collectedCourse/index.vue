<template>
  <div class="app-container">
    <ai-header :back="customGoBack" title="我的收藏"></ai-header>
    <div class="main-wrap" :style="{height:mainH+'px'}">
      <div class="no-collection" v-if="collections.length === 0">
        <img class="image" src="../../../static/images/nocollection/image_no_collection.svg" />
        <div class="tip-txt">还没有收藏过题目哟~</div>
      </div>
      <div v-else class="background">
        <div
          class="user"
          style="position:relative"
          v-for="(collection,index) in collections"
          :key="index"
          v-on:click="handleClick(collection)"
        >
          <img
            class="img-box"
            :src="appImgPath+collection.coverUrl"
            :alt="collections.questionNumber"
          />
          <p class="coursename">{{collection.name}}</p>
          <span class="coursenumber">{{collection.questionTotal}}题</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ApiQuestionChapterInfo } from '@/service/'
import AiHeader from '@/components/AiHeader'
import customNav from '@/mixins/customNav'
import base from '@/utils/common'

export default {
  components: { AiHeader },
  mixins: [customNav],
  data () {
    return {
      collections: [],
      collection: {
        src: ''
      },
      queryForm: {
        // pageNum: 1,
        // pageSize: 10,
        //   对象questionType
        type: 1,
        questionBankId: '',
        customerId: ''
      },
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
    ApiQuestionChapterInfo(this.queryForm).then(res => {
      this.collections = res.data.questionChapterInfoList
    })
  },
  methods: {
    handleClick (item) {
      mpvue.navigateTo({
        url: '../collectedChapter/main?id=' + item.id + '&coursename=' + item.name
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

.user {
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
  background-size: 100%;

  &:nth-of-type(1),
  &:nth-of-type(2) {
    margin-top: 10px;
  }
}

.img-box {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  border-radius: 10px;
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

.no-collection {
  .flex-v;
  .flex-align-center;
  .flex-pack-center;
  height: 100%;
  width: 100%;
  background: #fff;

  .tip-txt {
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

.coursename {
  position: absolute;
  margin-left: 10px;
  margin-top: 22px;
  font-weight: bold;
  font-size: 12px;
  color: #ffffff;
  line-height: 12px;
  z-index: 100;
}

.coursenumber {
  position: absolute;
  right: 14px;
  margin-top: 79px;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
  line-height: 20px;
  z-index: 100;
}
</style>
