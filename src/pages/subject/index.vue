<template>
  <div class="app-container components_subject">
    <ai-header :back="goBack" title="选择科目"></ai-header>
    <scroll-view
      class="main-wrap"
      scroll-y="true"
      @scrolltoupper="refresh"
      @scrolltolower="loadMore"
      lower-threshold="50"
      upper-threshold="0"
      @scroll="viewScroll"
    >
      <div class="subject-container" v-if="courses.length">
        <div
          class="subject-box"
          v-for="(cu,index) in courses"
          :key="index"
          @tap.stop="handleClick(cu)"
        >
          <img
            class="img-complete"
            v-if="cu.questionNumber>=cu.questionTotal"
            src="../../../static/images/select_subject_complete.svg"
            :alt="cu.name"
            lazy-load="true"
          />
          <!--<img class="img-box" :src="cu.coverUrl" :alt="cu.questionNumber"/>-->
          <div class="image-info">
            <img
              class="img-box img"
              :src="cu.show?appImgPath + cu.coverUrl:''"
              lazy-load="true"
              :alt="cu.questionNumber"
            />
            <div class="name">{{cu.name}}</div>
          </div>

          <div class="content-box">
            <div class="top-box">
              <h3>{{cu.name}}</h3>
              <p>
                刷题进度&nbsp;
                <span
                  class="progress"
                >{{cu.questionNumber>cu.questionTotal?cu.questionTotal:cu.questionNumber||0}}</span>
                /{{cu.questionTotal||0}}
              </p>
            </div>
            <div class="bottom-box">
              <div class="users-box">
                <img
                  class="user img"
                  :src="cu.show?appImgPath+img:''"
                  lazy-load="true"
                  alt
                  v-for="(img,id) in cu.imgList"
                  :key="id"
                />
              </div>
              <p class="finish">{{cu.doingNumber}}人正在做</p>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="noCourseFlag"
        style="text-align: center;padding: 10px 0;font-size: 14px;color: #ccc;"
      >暂时无科目</div>
    </scroll-view>
  </div>
</template>

<script>
import { ApiQuestionChapterInfo } from '@/service'
import AiHeader from '@/components/AiHeader'
import customNav from '@/mixins/customNav'
import base from '@/utils/common'
// import {throttle} from '@/utils'

export default {
  components: {
    AiHeader
  },
  mixins: [customNav],
  data () {
    return {
      queryForm: {
        // pageNum: 1,
        // pageSize: 10,
        type: 0,
        questionBankId: '',
        customerId: ''
      },
      courses: [],
      mainH: '',
      noCourseFlag: false,
      winH: '',
      appImgPath: ''
    }
  },
  onLoad () {
    this.winH = mpvue.getSystemInfoSync().windowHeight
    this.mainH = this.$store.getters.mainWrapHeight
    this.queryForm.customerId = this.$store.getters.customerId
    this.queryForm.type = this.$store.getters.questionType
    this.queryForm.questionBankId = this.$store.getters.questionBankId
    this.appImgPath = base.config[base.config.active].appImgPath
  },
  onShow () {
    this.getData()
  },
  methods: {
    getData () {
      ApiQuestionChapterInfo(this.queryForm).then(res => {
        res = res.data || []
        if (res) {
          this.courses = this.handleCourseData(res.questionChapterInfoList)
          this.timer = setTimeout(() => {
            this.showImg()
          }, 100)
        } else {
          this.noCourseFlag = true
        }
      })
    },
    viewScroll () {
      this.showImg()
    },
    refresh () {
      // mpvue.showLoading({
      //   title: '加载中',
      //   mask: true
      // })
      // this.getData()
    },
    loadMore () {
      // mpvue.showLoading({
      //   title: '加载中',
      //   mask: true
      // })
      // this.getData()
    },
    goBack () {
      mpvue.reLaunch({
        url: '../index/main'
      })
    },
    handleCourseData (data) {
      return data.map((item) => {
        item.doingNumber = Math.floor(Math.random() * 1000)
        this.$set(item, 'show', false)
        return item
      })
    },
    handleClick (item) {
      this.$store.dispatch('updateCourseId', item.id)
      // this.$store.dispatch('updateQuestionType', '0')
      this.$store.dispatch('updateQuestionTotal', item.questionTotal)
      this.$store.dispatch('updateQuestionNumber', item.questionNumber)
      this.$store.dispatch('updateQuestionProcess', {
        questionTotal: item.questionTotal,
        questionNumber: item.questionNumber
      })
      mpvue.navigateTo({
        url: `../chapter/main`
      })
    },
    showImg () {
      mpvue.createSelectorQuery().selectAll('.img').boundingClientRect(rect => {
        let tempData = this.courses
        rect.forEach((item, index) => {
          if (item.top < this.winH) {
            let bigIndex = Math.floor(index / 5)
            if (!tempData[bigIndex].show) {
              tempData[bigIndex].show = true
            }
          }
        })
        this.courses = tempData
      }).exec()
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../static/style/common";

.components_subject {
  position: absolute;
  margin-top: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}

.subject-container {
  padding: 15px;

  .subject-box {
    .flex;
    //.flex-align-center;
    position: relative;
    padding: 10px;
    background-color: #fff;
    margin-bottom: 15px;
    -webkit-box-shadow: 0 2px 4px 0 rgba(237, 237, 237, 0.67);
    -moz-box-shadow: 0 2px 4px 0 rgba(237, 237, 237, 0.67);
    box-shadow: 0 2px 4px 0 rgba(237, 237, 237, 0.67);
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;

    img.img-complete {
      position: absolute;
      top: 0;
      right: 15px;
      width: 34px;
      height: 23px;
    }

    .image-info {
      position: relative;
      height: 90px;
      width: 120px;

      .img-box {
        display: block;
        height: 90px;
        width: 120px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
      }

      .name {
        position: absolute;
        width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        top: 10px;
        left: 8px;
        z-index: 10;
        font-size: 12px;
        font-weight: bold;
        color: #ffffff;
      }
    }

    .content-box {
      .flex-1;
      .flex-v;
      .flex-pack-justify;
      padding: 3px 5px 0 8px;

      .top-box {
        h3 {
          .ellipsis-more(2);
          font-size: 15px;
          font-weight: bold;
          color: #333333;
        }

        p {
          padding: 4px 0;
          font-size: 12px;
          color: #666666;

          .progress {
            color: #f76f6f;
          }
        }
      }

      .bottom-box {
        .flex;
        //.flex-pack-justify;
        -webkit-box-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
        -ms-flex-align: baseline;

        .users-box {
          img.user {
            display: inline-block;
            width: 16px;
            height: 16px;
            position: relative;
            bottom: -3px;
            border: 1px solid #fff;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
          }

          img:nth-of-type(2) {
            left: -5px;
          }

          img:nth-of-type(3) {
            left: -10px;
          }

          img:nth-of-type(4) {
            left: -15px;
          }
        }

        .finish {
          position: relative;
          left: -8px;
          font-size: 12px;
          color: #666666;
        }
      }
    }
  }
}
</style>
