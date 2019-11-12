<template>
  <div class="login-body">
    <ai-header :back="customGoBack" title="爱刷题"></ai-header>
    <div class="main-wrap">
      <span class="login-font">登录</span>
      <br />
      <div class="input-phone">
        <input
          type="text"
          class="phone"
          v-model="phoneNumber"
          :placeholder-style="placeStyle"
          :placeholder="phonePlaceholder"
        />
      </div>
      <hr />
      <button @click="loginProcess">获取验证码</button>
      <!--    <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo"> Click me </button>-->
      <div class="protocol">
        <span>
          点击按钮即表示您同意并愿意遵守
          <span @click="useProtocol" class="use-protocol">《使用协议》</span>
        </span>
      </div>
    </div>
    <van-popup :show="popupShow" @close="onClose" duration="500" close-on-click-overlay="false">
      <div class="popup-verify-code">
        <div class="popup-verify-title">
          输入手机验证码
          <span @click="onClose">
            <van-icon class="verify-cross" name="cross" />
          </span>
        </div>
        <div class="popup-verify-phone" @click="test">已发送至手机号码 {{phoneNumber}}</div>
        <div class="code-wrap">
          <input
            type="number"
            v-model="validateCode"
            cursor-spacing="90"
            maxlength="6"
            focus="true"
            @focus="handleFocus"
            @blur="handleBlur"
          />

          <div class="text-wrap">
            <div class="block">
              <span :class="{'active': validateCode.length === 0 && hasFocus}"></span>
              {{validateArray[0]}}
            </div>
            <div class="block">
              <span :class="{'active': validateCode.length === 1 && hasFocus}"></span>
              {{validateArray[1]}}
            </div>
            <div class="block">
              <span :class="{'active': validateCode.length === 2 && hasFocus}"></span>
              {{validateArray[2]}}
            </div>
            <div class="block">
              <span :class="{'active': validateCode.length === 3 && hasFocus}"></span>
              {{validateArray[3]}}
            </div>
            <div class="block">
              <span :class="{'active': validateCode.length === 4 && hasFocus}"></span>
              {{validateArray[4]}}
            </div>
            <div class="block">
              <span :class="{'active': validateCode.length === 5 && hasFocus}"></span>
              {{validateArray[5]}}
            </div>
          </div>
        </div>
        <div class="popup-again-code">
          <div v-show="msgStatus === 0" v-html="content" :class="textType" @click="loginProcess"></div>
          <div v-show="msgStatus === 1" class="loading">
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
          </div>
        </div>
      </div>
    </van-popup>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import base from '@/utils/common'
import AiHeader from '@/components/AiHeader'
import customNav from '@/mixins/customNav'
import { ApiGetVerifycode, ApiLogin } from '@/service/'
import Toast from '../../../static/vant/toast/toast'
// import request from '@/utils/request'
// const baseUrl = '/api/login/login'
export default {
  components: { AiHeader },
  mixins: [customNav],
  data () {
    return {
      clock: '',
      focusIndex: 0,
      focus: false,
      content: '发送验证码',
      reacquireText: '发送验证码',
      textType: '',
      isShow: true,
      totalTime: 60,
      reGetCode: 'color:blue',
      popupShow: false,
      phoneNumber: '',
      phonePlaceholder: '请输入手机号码',
      placeStyle: 'font-size:16px',
      validateCode: '',
      hasFocus: false,
      msgStatus: 0, // 展示登录加载效果
      encryptedData: '',
      iv: '',
      code: '',
      mainH: ''
    }
  },
  computed: {
    validateArray () {
      return Array.from(this.validateCode)
    }
  },
  onLoad () {
    this.mainH = this.$store.getters.mainWrapHeight
  },
  mounted () {
    let that = this
    wx.getStorage({
      key: 'encryptedData',
      success (res) {
        that.encryptedData = res.data || ''
      }
    })
    wx.getStorage({
      key: 'wxIv',
      success (res) {
        that.iv = res.data || ''
      }
    })
    wx.getStorage({
      key: 'wxCode',
      success (res) {
        that.code = res.data || ''
      }
    })
  },
  methods: {
    loginProcess () { // 获取验证码
      if (this.phoneNumber) {
        let b = base.validataPhone(this.phoneNumber)
        if (b) {
          this.focus = true
          if (this.totalTime !== 60) {
            this.popupShow = true
          }
          if (this.totalTime === 60) {
            clearInterval(this.clock)
            // this.popupShow = true
            this.sendMsg()
          }
        } else {
          this.phoneNumber = ''
          this.phonePlaceholder = '请输入正确的手机号码'
          this.placeStyle = 'color:red;font-size:16px'
        }
      } else {
        Toast({
          message: '请输入手机号码',
          duration: 1000
        })
      }
    },
    // 关闭弹窗
    onClose () {
      this.popupShow = false
    },
    sendMsg () { // 获取短信验证码
      let that = this
      ApiGetVerifycode({ phoneNumber: this.phoneNumber }).then(result => {
        if (typeof result.code === 'undefined') result = result.data
        if (result) {
          if (Number(result.code) === 200) {
            Toast({
              message: '您还不是爱华学员，暂时无法登录',
              duration: 2000
            })
            clearInterval(this.clock)
          } else if (Number(result.code) !== 0 && Number(result.code) !== 200) {
            Toast({
              message: result.msg,
              duration: 2000
            })
            clearInterval(this.clock)
          } else {
            this.popupShow = true
            that.countDown()
          }
        }
      })
    },
    countDown () { // 倒计时
      this.textType = ''
      this.content = this.totalTime + 's后重新获取'
      this.clock = setInterval(() => {
        this.totalTime--
        this.content = this.totalTime + 's后重新获取'
        if (this.totalTime <= 0) {
          clearInterval(this.clock)
          this.textType = 'reg'
          this.content = '重新获取'
          this.totalTime = 60
        }
      }, 1000)
    },
    nextInput () {
      this.focusIndex = this.focusIndex + 1
    },
    handleFocus () {
      this.hasFocus = true
    },
    handleBlur () {
      this.hasFocus = false
    },
    login () {

    },
    bindGetUserInfo (e) { // 获取用户信息
      if (e.mp.detail.rawData) {
        this.loginProcess()
        // 用户按了允许授权按钮
        // 获取到用户的信息了，打印到控制台上看下
        // console.log('用户的信息如下：')
        // console.log(e.mp.detail.rawData)
        // 授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
      } else {
        // 用户按了拒绝按钮
        wx.showModal({
          title: '提示',
          content: '您点击了拒绝授权，将无法使用刷题功能，请授权之后再使用相关功能!',
          showCancel: false,
          confirmText: '返回授权',
          success: function (res) {
            // 用户没有授权成功，不需要改变 isHide 的值
            /* if (res.confirm) {
              console.log('用户点击了“返回授权”')
            } */
          }
        })
      }
    },
    checkSetting () {
      let that = this
      // 查看是否授权
      wx.getSetting({
        success: function (res) {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: function (res) {
                let rawData = JSON.parse(res.rawData)
                that.$store.dispatch('updatenickName', rawData.nickName)
                that.$store.dispatch('updateavatarUrl', rawData.avatarUrl)
              }
            })
          }
        }
      })
    },
    useProtocol () {
      mpvue.navigateTo({
        url: '../protocol/main'
      })
    }
  },
  watch: {
    validateCode (n, o) { // 验证码登录
      if (n.length === 6) {
        this.msgStatus = 1
        let that = this
        wx.login({
          success: (result) => {
            wx.getUserInfo({
              success: (data) => {
                ApiLogin({
                  mobile: this.phoneNumber, // 18145846263 this.phoneNumber
                  loginType: 0,
                  verifyCode: n,
                  code: encodeURIComponent(result.code),
                  encryptedData: encodeURIComponent(data.encryptedData),
                  iv: encodeURIComponent(data.iv)
                }).then(result => {
                  that.$store.dispatch('updateCustomerId', result.data.customerId)
                  if (result.code === 0) {
                    that.$store.dispatch('updateToken', result.data.token)
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
                    mpvue.reLaunch({
                      //关闭所有页面，打开到应用内的某个页面
                      url: '../index/main'
                    })
                  } else {
                    Toast({
                      message: result.msg,
                      duration: 2000
                    })
                  }
                })
              },
              fail: () => {
                console.log('登录失败~')
              }
            })
          }
        })
      } else {
        this.msgStatus = 0
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-body {
  .input-phone {
    position: relative;
    margin-top: 62px;

    .phone {
      padding-left: 1px;
    }
  }

  .protocol {
    .use-protocol {
      color: #5ccce5;
    }
  }

  // 验证码
  .popup-verify-code {
    padding: 15px;

    .popup-verify-title {
      font-size: 15px;
      color: #333333;
      text-align: center;
      font-weight: bold;

      .verify-cross {
        float: right;
        width: 16px;
        height: 16px;
      }
    }

    .popup-verify-phone {
      color: #8a8a8a;
      font-size: 12px;
      margin-top: 24px;
      text-align: center;
    }

    .code-wrap {
      position: relative;
      width: 100%;
      height: 30px;
      margin-top: 32px;
      margin-bottom: 51px;

      input {
        position: absolute;
        left: 0;
        top: 0;
        width: 200%;
        z-index: 50;
        display: inline-block;
        color: transparent;
        margin-left: -100%;
      }

      .text-wrap {
        position: absolute;
        left: 0;
        top: 0;
        padding: 0 10px;
        width: 100%;
        z-index: 30;
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-sizing: border-box;

        .block {
          width: 30px;
          height: 30px;
          text-align: center;
          border-bottom: 2px solid #eee;
          position: relative;

          span {
            padding-top: 12px;
            position: absolute;
            display: inline-block;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            width: 1px;
            height: 18px;
            opacity: 0;
            animation: blink 1s infinite steps(1, start);
          }

          .active {
            opacity: 1;
          }
        }
      }
    }

    .popup-again-code {
      text-align: center;
      font-size: 12px;
      color: #d5d5d5;
      margin-top: 37px;
      margin-bottom: 7px;
      pointer-events: none;

      .loading {
        span {
          width: 6px;
          height: 6px;
          display: inline-block;
          background-color: #5ccce5;
          opacity: 0.6;
          margin-right: 10px;
          border-radius: 50%;
          animation: load 1s ease infinite;
        }
      }

      .loading span:nth-child(1) {
        animation-delay: 0.13s;
      }

      .loading span:nth-child(2) {
        animation-delay: 0.26s;
      }

      .loading span:nth-child(3) {
        animation-delay: 0.39s;
      }
    }
  }
}

.login-font {
  display: inline-block;
  margin-left: 20px;
  margin-top: 50px;
  width: 61px;
  height: 40px;
  color: #333333;
  font-size: 30px;
}

.phone {
  margin-bottom: auto;
  margin-left: 20px;
  margin-right: 20px;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 8px;
}

button {
  margin-top: 80px;
  border-radius: 22px;
  background-color: #5ccce5;
  color: #ffffff;
  margin-left: 20px;
  margin-right: 20px;
  border: none;
}

.protocol {
  color: #999999;
  margin-top: 50px;
  margin-left: 72px;
  height: 14px;
  font-size: 10px;
  display: inline-block;
}
</style>

<style lang="less">
.van-popup {
  width: 85%;
  max-height: 70%;
  border-radius: 10px;
}

.reg {
  color: #5ccce5;
  pointer-events: auto;
}

button::after {
  border: none;
}

@keyframes blink {
  0% {
    background-color: white;
  }
  50% {
    background-color: black;
  }
  100% {
    background-color: white;
  }
}

@keyframes load {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
