<template>
  <div class="app-container mine-container">
    <button
      class="auth-btn"
      open-type="getUserInfo"
      @getuserinfo="bindGetUserInfo"
      v-show="!wxAuth"
    >&nbsp;</button>
    <ai-header title="我的"></ai-header>
    <div class="main-wrap">
      <div class="top-container">
        <div class="u-info">
          <div class="head-img">
            <img class="mine-head" :src="avatarUrl" :alt="nickName" />
          </div>
          <p class="u-name">{{nickName}}</p>
          <p class="u-intro">{{questionBankName}}</p>
        </div>

        <div class="operation-box">
          <div
            class="operation"
            v-for="(item,index) in operations"
            :key="index"
            @tap.stop="handleOperationTo(item)"
          >
            <img :src="item.imgPath" alt="item.name" style="width: 32px;height: 32px;" />
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>

      <div class="sections-container">
        <div class="record-container">
          <div class="section-title">
            <img src="../../../static/images/mine/mine_record.svg" alt />
            <div class="section-name">做题记录</div>
          </div>
          <div class="card-container">
            <swiper
              v-if="subjects.length"
              class="swiper-subject"
              interval="5000"
              duration="1000"
              next-margin="-10pxs"
              :display-multiple-items="subjects.length>1 ? 2:1"
            >
              <swiper-item v-for="(item, index) in subjects" :key="index" style="width: 160px;">
                <div
                  class="subject-box"
                  :style="{background: 'url('+appImgPath+item.questionChapterInfo.coverUrl+')'}"
                  @tap.stop="handleTo(item)"
                >
                  <p class="box-name oneline-ellipsis">{{item.questionChapterInfo.name}}</p>
                  <div style="height: 40px;background-color:transparent;">&nbsp;</div>
                  <div class="progress">
                    <div class="progress-box">
                      已完成
                      <span class="completeProcess">{{item.questionChapterInfo.p}}%</span>
                    </div>
                    <span class="last-date">{{item.completeTime}}</span>
                  </div>
                </div>
                <div
                  class="subject-name oneline-ellipsis"
                  style="font-size: 14px;padding-right: 30px;"
                >{{item.questionChapterInfo.name}}</div>
              </swiper-item>
            </swiper>
            <img
              v-else
              class="no-mistake"
              src="../../../static/images/wrong/image_no_mistake.svg"
              alt
            />
          </div>
        </div>
        <div class="section-title" @tap.stop="handleClick">
          <img src="../../../static/images/mine/mine_feedback.svg" alt />
          <div class="section-name">意见反馈</div>
          <div class="icon">
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
    </div>
    <van-dialog id="van-auth" />
    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
// 引入防抖函数
import { getDateDiff } from '@/utils'
import Api from '@/api/'
import Dialog from '../../../static/vant/dialog/dialog'
import Toast from '../../../static/vant/toast/toast'
import AiHeader from '@/components/AiHeader'
import base from '../../utils/common'

export default {
  components: {
    AiHeader
  },
  data () {
    return {
      operations: [
        {
          name: '我的错题',
          type: 2,
          to: '../wrong/main?questionBankId=',
          imgPath: '/static/images/home/home_question_wrong.svg'
        },
        {
          name: '我的收藏',
          type: 1,
          to: '../collectedCourse/main?questionBankId=',
          imgPath: '/static/images/home/home_collect.svg'
        }
      ],
      subjects: [],
      mainH: ''
    }
  },
  computed: {
    wxAuth () {
      return this.$store.getters.wxAuth
    },
    nickName () {
      return this.$store.getters.nickName
    },
    avatarUrl () {
      return this.$store.getters.avatarUrl
    },
    questionBankName () {
      return this.$store.getters.questionBankName
    },
    appImgPath () {
      return base.config[base.config.active].appImgPath
    }
  },
  onload () {
    mpvue.showLoading({
      title: '加载中',
      mask: true
    })
    this.mainH = this.$store.getters.mainWrapHeight
  },
  onShow () {
    if (this.$store.getters.token === '') {
      return false
    } else {
      this._initData()
    }
  },
  methods: {
    _initData () {
      Api.ApiQuestionRecord({
        customerId: this.$store.getters.customerId,
        questionBankId: this.$store.getters.questionBankId
      }).then(res => {
        let data = res.rows ? res.rows.splice(0, 5) : []
        let len = data.length
        while (len--) {
          if (data[len].questionChapterInfo === null || (typeof data[len].questionChapterInfo) !== 'object') {
            data.splice(len, 1)
          } else {
            let item = data[len]
            let p = ((item.questionChapterInfo.questionNumber / item.questionChapterInfo.questionTotal) * 100).toFixed(1) || 0
            if (p < 1) p = 0.5
            if (p > 100) p = 100
            this.$set(data[len].questionChapterInfo, 'p', p)
            this.$set(data[len], 'completeTime', getDateDiff(data[len].createTime))
          }
        }
        this.subjects = data
      })
    },
    handleTo (item) {
      if (this.$store.getters.token === '') {
        this.handleLogin()
        return
      }
      this.$store.dispatch('updateQuestionType', item.type)
      this.$store.dispatch('updateCourseId', item.courseId)
      this.$store.dispatch('updateChapterId', item.chapterId)
      this.$store.dispatch('updateSectionId', item.sectionId || '')
      this.$store.dispatch('updateCurSubjectName', item.questionChapterInfo.name || '做题记录')
      mpvue.navigateTo({
        url: '../practice/main?title=' + '做题记录'
      })
    },
    handleOperationTo (item) {
      if (this.$store.getters.token === '') {
        this.handleLogin()
        return
      }
      this.$store.dispatch('updateQuestionType', item.type)
      mpvue.navigateTo({
        url: item.to + this.$store.getters.questionBankId
      })
    },
    handleClick () {
      if (this.$store.getters.token === '') {
        this.handleLogin()
        return
      }
      mpvue.navigateTo({
        url: '../feedback/main'
      })
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
    // 获取微信信息
    handleGetUserInfo () {
      let code = ''
      this.$MinApp.login().then(result => {
        code = result.code
        return this.$Min.App.getUserInfo()
      }).then(data => {
        this.$store.dispatch('updateWxAuth', true)
        this.$store.dispatch('updateNickName', data.userInfo.nickName)
        this.$store.dispatch('updateAvatarUrl', data.userInfo.avatarUrl || '../../../static/images/user.png')
        mpvue.setStorageSync('encryptedData', data.encryptedData)
        mpvue.setStorageSync('wxIv', data.iv)
        mpvue.setStorageSync('wxCode', code)
        this.token = mpvue.getStorageSync('token')
        this.expired = mpvue.getStorageSync('expired')
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
          this._initData() // 重新加载数据
        } else if (result.code !== 1) { // 如果状态值为1，说明此用户从未登录过小程序,需要使用验证码登录
          Toast({
            message: result.msg,
            duration: 2000
          })
        }
      }).catch(() => {
        console.log('获取信息失败~')
      })
    },
    bindGetUserInfo (data) {
      if (data.mp.detail.rawData) {
        this.handleGetUserInfo()
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../static/style/common.less";

@C999: #999999;
.mine-container {
  position: relative;

  .top-container {
    margin-bottom: 10px;
    background: #fff;

    .u-info {
      margin: 0 auto;
      line-height: 24px;
      padding: 30px 0 15px;
      text-align: center;

      .head-img {
        .mine-head {
          width: 65px;
          height: 65px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          border: 1px solid rgba(151, 151, 151, 1);
        }
      }

      .u-name {
        font-size: 18px;
        color: #333333;
        font-weight: bold;
      }

      .u-intro {
        font-size: 12px;
        color: #666666;
      }
    }

    .operation-box {
      .flex;
      .flex-pack-center;
      .flex-align-center;
      padding: 8px 0 15px;

      .operation {
        .flex-1;
        .flex;
        .flex-align-center;
        .flex-pack-center;
        text-align: center;

        &:nth-of-type(1) {
          border-right: 0.5px solid #eeeeee;
        }

        &:nth-of-type(2) {
          border-left: 0.5px solid #eeeeee;
        }

        & > img {
          display: block;
          width: 23px;
          height: 26px;
        }

        & > span {
          display: block;
          margin-left: 5px;
          font-size: 15px;
          color: #333333;
          font-weight: 600;
        }
      }
    }
  }

  .sections-container {
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

    .record-container {
      margin-bottom: 10px;
      background: #fff;

      .section-title {
        padding: 10px 0 10px 5px;
        margin: 0 5px;
        border-bottom: 1px solid #eeeeee;
      }

      .card-container {
        padding: 15px 20px 5px 15px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        .swiper-subject {
          height: 150px;
        }

        img.no-mistake {
          display: block;
          margin: 0 auto;
          width: 159px;
          height: 119px;
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

        .subject-box {
          width: 120px;
          height: 85px;
          padding: 15px 20px 15px 5px;
          color: #ffffff;
          background-repeat: no-repeat !important;
          -webkit-background-size: cover !important;
          background-size: cover !important;
          margin-bottom: 5px;
          -webkit-border-radius: 8px;
          -moz-border-radius: 8px;
          border-radius: 8px;

          .box-name {
            font-size: 14px;
            font-weight: 600;
          }

          .progress {
            .flex;
            .flex-align-center;
            position: relative;
            height: 26px;
            padding: 5px 0;
            opacity: 0.8;
            font-size: 12px;

            .progress-box {
              font-weight: 500;
              text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);

              .completeProcess {
                font-size: 11px;
              }
            }

            .last-date {
              position: absolute;
              top: 9px;
              right: -20px;
              padding: 0 8px 0 10px;
              min-width: 40px;
              height: 20px;
              line-height: 20px;

              z-index: 100;
              background: rgba(247, 111, 111, 0.8);
              -webkit-border-top-left-radius: 10px;
              -moz-border-radius-topleft: 10px;
              border-top-left-radius: 10px;
              -webkit-border-bottom-left-radius: 10px;
              -moz-border-radius-bottomleft: 10px;
              border-bottom-left-radius: 10px;
            }
          }

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
        }
      }
    }
  }
}
</style>
