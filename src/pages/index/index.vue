<template>
  <div class="app-container index-container">
    <button
      class="auth-btn"
      open-type="getUserInfo"
      @getuserinfo="bindGetUserInfo"
      v-show="!wxAuth"
    >&nbsp;</button>
    <ai-header title="首页"></ai-header>
    <scroll-view
      class="main-wrap"
      scroll-y="true"
      @scrolltoupper="refresh"
      lower-threshold="10"
      upper-threshold="30"
      @scroll="viewScroll"
    >
      <!--    banner-->
      <div class="section banner" v-if="imgUrls.length > 0" style="padding: 0;">
        <swiper
          class="swiper-box"
          :indicator-dots="imgUrls.length > 1"
          autoplay="true"
          circular="true"
          interval="4000"
          duration="50"
          skip-hidden-item-layout="true"
          indicator-active-color="#ffffff"
          style="height: 130px"
        >
          <swiper-item v-for="(item, index) in imgUrls" :key="index">
            <img :src="appImgPath+item.adrImgOne" mode="scaleToFill" lazy-load="true" />
          </swiper-item>
        </swiper>
      </div>
      <!--    学习卡片-->
      <div class="section learnCard-container">
        <div class="title-box">
          <div class="section-title">我的学习卡片</div>
          <div class="subjects-name">{{currentMajor.majorsName}}</div>
          <span v-if="questionBankList.length>1" class="switchIcon-box" @tap.stop="switchMajor">
            <img src="/static/images/home/home_switch.svg" alt="切换科目" class="switchIcon" />
          </span>
        </div>
        <div class="flex learn-status">
          <div class="flex-1">
            <span class="label-title">坚持学习</span>
            <span class="data-num">{{questionStatistical.questionCount || 0}}天</span>
          </div>
          <div class="flex-1 do-question-num">
            <span class="label-title">刷题数</span>
            <span class="data-num">{{questionStatistical.exerciseCount || 0}}道</span>
          </div>
          <div class="flex-1" style="text-align: right;">
            <span class="label-title">正确率</span>
            <span class="data-num data-percent">{{accuracy}}%</span>
          </div>
        </div>
        <div class="operation-container flex">
          <operation
            v-for="(item,index) in operations"
            :key="index"
            :img-path="item.imgPath"
            :operation-name="item.name"
            :to="item.to"
            :question-type="item.type"
          ></operation>
        </div>
      </div>
      <!--   核心考点-->
      <div class="section examination-container">
        <div class="title-box">
          <div class="section-title">核心考点</div>
          <div class="subjects-name" @tap.stop="handleViewAll">
            查看全部&nbsp;
            <van-icon name="arrow" style="position: relative;bottom: -1px;" />
          </div>
        </div>
        <swiper
          v-if="subjects.length > 0"
          class="swiper-subject"
          interval="5000"
          duration="1000"
          next-margin="10px"
          :display-multiple-items="subjects.length<2?1:2"
          @tap.stop="handleToSubject(item)"
        >
          <swiper-item v-for="(item, index) in subjects" :key="index">
            <div
              class="subject-box"
              :style="{background: 'url('+appImgPath+item.coverUrl+')'}"
              :data-index="index"
              @tap.stop="handleToSubject(item)"
            >
              <p class="box-name oneline-ellipsis" style="font-size: 14px;">{{item.name}}</p>
              <div style="height: 40px;background-color:transparent;">&nbsp;</div>
            </div>
            <div class="oneline-ellipsis online-box">
              <div class="online-headImg">
                <img
                  :src="appImgPath+item2"
                  :alt="index1"
                  lazy-load="true"
                  v-for="(item2,index1) in item.imgList"
                  :key="index1"
                />
              </div>
              <div class="online-person">{{item.doingNumber || Math.random()*1000}}人正在做</div>
            </div>
            <div
              class="subject-name oneline-ellipsis"
              style="font-size: 14px;padding-right:18px"
            >{{item.name}}</div>
          </swiper-item>
        </swiper>
        <swiper v-else class="swiper-subject">
          <swiper-item>
            <div class="flex flex-align-center flex-pack-center view-all" @tap.stop="handleViewAll">
              <div style="color: #cccccc;">暂无核心考点</div>
            </div>
          </swiper-item>
        </swiper>
      </div>
    </scroll-view>
    <!--    弹窗-->
    <van-popup duration="50" class="selectMajorPopup" :show="popupShow" @close="onClose">
      <div class="popup-container" :style="popupStyle">
        <div class="popup-title">切换当前专业</div>
        <div class="popup-section current-major">
          <div class="section-title">当前专业</div>
          <div class="major-box">
            <span class="major-item" style="width:45%;">{{currentMajor.majorsName}}</span>
          </div>
        </div>
        <div class="popup-section has-major" v-if="questionBankList.length>1">
          <div class="section-title">已报专业</div>
          <div class="major-box flex">
            <template v-for="(item,index) in questionBankList">
              <span
                v-if="item.questionBankId !== currentMajor.questionBankId"
                class="major-item flex-1"
                :key="index"
                @tap.stop="chooseMajor(item)"
              >{{item.majorsName}}</span>
            </template>
          </div>
        </div>
      </div>
    </van-popup>
    <!--    激励弹窗-->
    <encourage-dialog
      :show="isEncourage"
      :count-num="countNum"
      :encourage-type="encourageType"
      @updateIsEncourage="updateIsEncourage"
    ></encourage-dialog>
    <van-dialog id="van-dialog" />
    <van-dialog id="van-auth" />
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import AiHeader from '@/components/AiHeader'
import Operation from '@/components/index/Operation'
import EncourageDialog from '@/components/EncourageDialog/'
import Dialog from '../../../static/vant/dialog/dialog'
// import Toast from '../../../static/vant/toast/toast'
import base from '@/utils/common'
// 引入防抖函数
import { debounce, throttle } from '../../utils'
import Api from '@/api/'
export default {
  components: {
    Operation, EncourageDialog, AiHeader
  },
  data () {
    return {
      popupShow: false,
      countNum: 0,
      isEncourage: false,
      encourageType: '',
      appImgPath: '',
      imgUrls: [],
      subjects: [],
      currentMajor: {}, // 当前选择的科目
      questionStatistical: {},
      questionBankList: [], // 所报的专业
      token: '',
      customerId: '',
      expired: '',
      code: '',
      encryptedData: '',
      iv: '',
      mainH: ''
    }
  },
  computed: {
    popupStyle: function () {
      return `max-height: 70%;
            -webkit-border-radius: 10px;
            -moz-border-radius: 10px;
            border-radius: 10px;`
    },
    accuracy () {
      return ((this.questionStatistical.accuracy || 0) * 100).toFixed(1) || 0
    },
    operations: function () {
      return [
        {
          name: '我要刷题',
          type: '0',
          to: '../subject/main',
          imgPath: '/static/images/home/home_question.svg'
        },
        { name: '刷题榜',
          to: '../leader_board/main',
          imgPath: '/static/images/home/home_list.svg' 
        },
        {
          name: '我的错题',
          to: '../wrong/main',
          type: '2',
          imgPath: '/static/images/home/home_question_wrong.svg'
        },
        {
          name: '我的收藏',
          type: '1',
          to: '../collectedCourse/main',
          imgPath: '/static/images/home/home_collect.svg'
        }
      ]
    },
    wxAuth () {
      return this.$store.getters.wxAuth
    }
  },
  watch: {
    currentMajor (n) {
      // 更新questionBankId
      this.$store.dispatch('updateQuestionBankId', n.questionBankId || '')
      this.$store.dispatch('updateQuestionBankName', n.majorsName || '')
    }
  },
  onLoad () {
    mpvue.stopPullDownRefresh()
    this.appImgPath = base.config[base.config.active].appImgPath
  },
  onShow () {
    // 加载
    // TODO 判断用户授权信息
    base.isAuthorization().then(v => {
      this.$store.dispatch('updateWxAuth', v)
      this.$store.dispatch('updateToken', mpvue.getStorageSync('token') || '')
      this.code = mpvue.getStorageSync('wxCode') || ''
      this.encryptedData = mpvue.getStorageSync('encryptedData') || ''
      this.iv = mpvue.getStorageSync('wxIv') || ''
      if (!this.$store.getters.wxAuth) {
        this.handleGetUserInfo()
      } else {
        this.initPageData()
      }
    })
  },
  onPullDownRefresh () {
    this.initPageData()
  },
  mounted () {
    this.mainH = this.$store.getters.mainWrapHeight
  },
  methods: {
    // 获取微信信息
    handleGetUserInfo () {
      let code = null
      this.$MinApp.login().then(res => {
        code = res.code
        mpvue.setStorageSync('wxCode', res.code)
        this.token = mpvue.getStorageSync('token')
        this.expired = mpvue.getStorageSync('expired')
        return this.$MinApp.getUserInfo()
      }).then(data => {
        this.$store.dispatch('updateWxAuth', true)
        this.$store.dispatch('updateNickName', data.userInfo.nickName)
        this.$store.dispatch('updateAvatarUrl', data.userInfo.avatarUrl || '../../../static/images/user.png')
        mpvue.setStorageSync('encryptedData', data.encryptedData)
        mpvue.setStorageSync('wxIv', data.iv)
        return Api.ApiLogin({
          mobile: '',
          loginType: '',
          verifyCode: '',
          code: encodeURIComponent(code),
          encryptedData: encodeURIComponent(data.encryptedData),
          iv: encodeURIComponent(data.iv)
        })
      }).then(result => {
        if (result.code === 0) {
          this.$store.dispatch('updateToken', result.data.token)
          // that.$store.dispatch('updateCustomerId', result.data.customerId)
          let timestamp = Date.parse(new Date())
          // 设置token过期时间
          let expired = timestamp + 7 * 24 * 60 * 60 * 1000
          wx.setStorage({
            key: 'token',
            data: result.data.token
          })
          wx.setStorage({
            key: 'clientkey',
            data: result.data.mobile
          })
          wx.setStorage({
            key: 'expired',
            data: expired
          })
          this.initPageData() // 重新加载数据
        }
      }).catch(() => {
        console.log('获取信息失败~')
        Api.ApiGetHomeData({
          customerId: this.$store.getters.customerId,
          questionBankId: this.$store.getters.questionBankId
          // code: encodeURIComponent(this.code),
          // encryptedData: encodeURIComponent(this.encryptedData),
          // iv: encodeURIComponent(this.iv)
        }).then(res => {
          mpvue.hideLoading()
          res = res.data
          this.imgUrls = res.advertisingTopList || []
          this.subjects = res['questionChapterInfoList'] !== undefined ? res.questionChapterInfoList.splice(0, 5) : []
          this.questionStatistical = res.questionStatistical || {}
          this.questionBankList = res.questionBankList || []
          this.currentMajor = res.questionBankList[0] || {} // 设置默认当前专业
        })
      })
    },
    bindGetUserInfo (data) {
      if (data.mp.detail.rawData) {
        this.handleGetUserInfo()
      }
    },
    initPageData () {
      let code = null
      this.$MinApp.login().then(result => {
        code = result.code
        return this.$MinApp.getUserInfo()
      }).then(data => {
        this.$store.dispatch('updateNickName', data.userInfo.nickName)
        this.$store.dispatch('updateAvatarUrl', data.userInfo.avatarUrl || '../../../static/images/user.png')
        return Api.ApiGetHomeData({
          customerId: this.$store.getters.customerId,
          questionBankId: this.$store.getters.questionBankId,
          code: encodeURIComponent(code),
          encryptedData: encodeURIComponent(data.encryptedData),
          iv: encodeURIComponent(data.iv)
        })
      }).then(res => {
        res = res.data
        this.imgUrls = res.advertisingTopList || []
        this.subjects = res['questionChapterInfoList'] !== undefined ? res.questionChapterInfoList.splice(0, 5) : []
        this.questionStatistical = res.questionStatistical || {}
        this.questionBankList = res.questionBankList || []
        // 切换专业不会回复原样
        // let currentMajorCache = mpvue.getStorageSync('currentMajor')
        let len = this.questionBankList.length
        if (len && base.isNotEmpty(this.$store.getters.questionBankId)) {
          for (let i = 0; i < len; i++) {
            if (this.questionBankList[i].questionBankId.toString() === this.$store.getters.questionBankId) {
              this.currentMajor = this.questionBankList[i]
            }
          }
        } else {
          this.currentMajor = res.questionBankList[0] || {} // 设置默认当前专业
        }
        this.apiGetSubjectsByCourse()
        // 激励接口
        if (this.$store.getters.token !== '') {
          let exerciseCount = mpvue.getStorageSync('exerciseCount')
          let exerciseNum = mpvue.getStorageSync('exerciseNum')
          Api.ApiEncourage({
            exerciseCount: exerciseCount,
            exerciseNum: exerciseNum
          }).then(res => {
            const data = res.data
            mpvue.setStorageSync('exerciseNum', data.exerciseNum)
            mpvue.setStorageSync('exerciseCount', data.exerciseCount)
            if (data.isExerciseNum === 1 || data.isExerciseCount === 1) {
              this.isEncourage = true
            }
            if (data.isExerciseNum) {
              this.encourageType = '1'
              this.countNum = data.exerciseNum
            }
            if (data.isExerciseCount) {
              this.encourageType = '0'
              this.countNum = data.exerciseCount
            }
            // 反馈
            this.$nextTick(() => {
              Api.ApiEncourage({
                exerciseCount: mpvue.getStorageSync('exerciseCount'),
                exerciseNum: mpvue.getStorageSync('exerciseNum')
              }).then(() => {
                mpvue.stopPullDownRefresh()
              })
            })
          })
        }
      })
    },
    handleToSubject: debounce(function (item) {
      if (this.$store.getters.token === '') {
        this.handleLogin()
        return
      }
      this.$store.dispatch('updateCourseId', item.id)
      this.$store.dispatch('updateQuestionType', '3')
      this.$store.dispatch('updateQuestionProcess', {
        questionTotal: item.questionTotal,
        questionNumber: item.questionNumber
      })
      mpvue.navigateTo({
        url: `../chapter/main?sid=${item.id}&t=${item.questionTotal}&c=${item.questionNumber}`
      })
    }, 0, true),
    // 查看全部课程
    handleViewAll: debounce(function () {
      if (this.$store.getters.token !== '') {
        this.handleLogin()
        return
      }
      this.$store.dispatch('updateQuestionType', '3')
      mpvue.navigateTo({
        url: '../subject/main'
      })
    }, 0, true),
    // 切换专业
    switchMajor () {
      if (this.$store.getters.token === '') {
        this.handleLogin()
        return
      }
      this.popupShow = true
    },
    // 选择专业
    chooseMajor (data) {
      if (this.$store.getters.token === '') {
        this.handleLogin()
        return
      }
      this.currentMajor = data
      this.$store.dispatch('updateQuestionBankId', this.currentMajor.questionBankId + '')
      this.initPageData()
      this.onClose()
    },
    // 关闭弹窗
    onClose () {
      this.popupShow = false
    },
    updateIsEncourage (data) {
      this.isEncourage = data
    },
    apiGetSubjectsByCourse () {
      if (this.currentMajor.questionBankId !== '' && !this.subjects.length) {
        Api.ApiQuestionChapterInfo({ type: 0, questionBankId: this.currentMajor.questionBankId }).then(res => {
          res = res.data || []
          this.subjects = res.questionChapterInfoList.map(item => {
            item.doingNumber = Math.floor(Math.random() * 1000)
            return item
          })
          mpvue.hideLoading()
        })
      } else {
        mpvue.hideLoading()
      }
    },
    handleLogin () {
      Dialog.confirm({
        // title: '标题',
        message: '您还没有登录哦~',
        confirmButtonText: '立即登录',
        selector: '#van-auth'
      }).then(() => {
        // on confirm
        mpvue.navigateTo({
          url: '../login/main'
        })
      }).catch(() => {
        // on cancel
      })
    },
    // 上下滚动
    viewScroll: throttle(() => {
      // this.showImg()
    }, 500),
    refresh () {
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

@C999: #999999;
@CF9F: #f9f9f9;
@CE5E: #e5e5e5;
@CFB4: #fab3b4;
@CF73: #f57073;
@CF5F: #f5f5f5;
@C333: #333333;
@C5E5: #5ccce5;

.app-container {
  .main-wrap {
    width: 100%;
    padding: 0 15px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .section {
    margin: 15px 0;
    padding: 10px 15px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    background: #ffffff;
    -moz-box-shadow: 1px 1px 2px #e3e3e3;
    -webkit-box-shadow: 1px 1px 2px #e3e3e3;
    box-shadow: 1px 1px 2px #e3e3e3;
  }

  .banner {
    padding: 0;

    swiper-item {
      padding: 0;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }

    swiper-item img {
      width: 100% !important;
      max-width: 100%;
      height: 100%;
      min-height: 130px;
    }
  }

  .section-title {
    font-size: 15px;
    font-weight: bold;
  }

  .learnCard-container {
    padding: 15px 16px;

    .title-box {
      height: 16px;
      line-height: 16px;

      & > div {
        display: inline-block;
      }

      .subjects-name {
        margin-left: 5px;
        font-size: 12px;
        color: @C999;
      }

      .switchIcon-box {
        float: right;
        width: 30px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        position: relative;
        right: -8px;
      }

      .switchIcon {
        position: relative;
        top: 0;
        width: 13px;
        height: 12px;
      }
    }

    .learn-status {
      font-size: 12px;
      padding: 20px 0;
      width: 100%;

      & > div:nth-of-type(1) {
        border-right: 1px solid #e5e5e5;
      }

      & > div:nth-of-type(3) {
        border-left: 1px solid #e5e5e5;
      }

      .do-question-num {
        .oneline-ellipsis;
        padding: 0 1.5%;
        text-align: center;
      }

      .label-title {
        color: @C999;
      }

      .data-num {
        margin-left: 8px;
        font-weight: bold;
      }

      .data-percent {
        color: @CF73;
      }
    }

    .operation-container {
      padding: 15px 5px 0;
      border-top: 1px solid @CE5E;
    }
  }

  .examination-container {
    .title-box {
      padding: 10px 0 15px;
      height: 16px;
      line-height: 16px;
      border-bottom: 1px solid @CE5E;

      & > div {
        display: inline-block;
      }
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
        left: 10px;
        z-index: 10;
        font-size: 12px;
        font-weight: bold;
        color: #ffffff;
      }
    }

    .subjects-name {
      float: right;
      font-size: 12px;
      color: @C999;
    }

    .swiper-subject {
      height: 150px;
      padding: 15px 0 5px;
    }

    .subject-box {
      width: 120px;
      height: 70px;
      padding: 15px 10px;
      color: #ffffff;
      background-repeat: no-repeat !important;
      -webkit-background-size: cover !important;
      background-size: cover !important;
      margin-bottom: 5px;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;

      .pd,
      .pt {
        font-size: 10px;
      }

      .pd {
        height: 15px;
        line-height: 15px;
      }

      .pt {
        height: 20px;
        line-height: 25px;
        position: relative;
        margin-top: 5px;
        opacity: 0.7;

        .topline {
          position: absolute;
          height: 100%;
          width: 12px;
          border-top: 2px solid #ffffff;
        }
      }
    }

    .view-all {
      height: 100%;
      background: #eeeeee;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;

      & > div {
        font-size: 12px;
      }
    }

    .online-box {
      & > div {
        display: inline-block;
      }

      .online-headImg {
        img {
          height: 16px;
          width: 16px;
          position: relative;
          max-width: 100%;
          border: 1px solid #fff;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
        }

        /*img:nth-of-type(1) {*/
        /*  left: 0;*/
        /*}*/

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

      .online-person {
        position: relative;
        top: -3px;
        left: -5px;
        font-size: 11px;
        color: @C999;
      }
    }
  }

  .van-popup {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    background-color: #ffffff !important;

    .popup-container {
      padding: 20px;
      background-color: #fff;

      .popup-title {
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 16px;
      }

      .popup-section {
        margin-bottom: 25px;

        .section-title {
          font-size: 12px;
          color: @C999;
          margin-bottom: 8px;
        }

        .major-box {
          flex-wrap: wrap;

          .major-item {
            display: block;
            padding: 2px 4px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            font-size: 12px;
            margin-right: 5px;
            .oneline-ellipsis;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;

            &:last-of-type {
              margin-right: 0;
            }
          }
        }
      }

      .current-major {
        .major-item {
          color: @C5E5;
          background: #e8f8f8;
          border: 1px solid #5ccce5;
        }
      }

      .has-major {
        .major-item {
          color: @C333;
          background: @CF5F;
        }
      }
    }
  }
}

.index-container {
  position: relative;
}
</style>

<style lang="less">
.van-popup {
  width: 85%;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;

  .van-dialog__message {
    color: #333333;
    font-size: 15px;
    font-weight: bold;
  }
}

.swiper-box .wx-swiper-dots.wx-swiper-dots-horizontal {
  margin-bottom: 1px;
}

.swiper-box .wx-swiper-dot {
  display: inline-flex;
  width: 10px;
  height: 2px;
  margin-left: 3px;
  justify-content: space-between;
}

.swiper-box .wx-swiper-dot::before {
  content: " ";
  flex-grow: 1;
  background: rgba(255, 255, 255, 0.5);
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
}

.swiper-box .wx-swiper-dot-active::before {
  content: "";
  background: rgba(255, 255, 255, 1);
}
</style>
