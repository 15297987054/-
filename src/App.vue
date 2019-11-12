<script>
  export default {
    getSysInfo () {
      const res = wx.getSystemInfoSync()
      return res
    },
    created () {
      //   let logs
      //   if (mpvuePlatform === 'my') { // 支付宝小程序, 获取本地存储的方式.
      //     logs = mpvue.getStorageSync({key: 'logs'}).data || []
      //     logs.unshift(Date.now())
      //     mpvue.setStorageSync({
      //       key: 'logs',
      //       data: logs
      //     })
      //   } else {
      //     logs = mpvue.getStorageSync('logs') || []
      //     logs.unshift(Date.now())
      //     mpvue.setStorageSync('logs', logs)
      //   }
      // },
      // log () {
      //   console.log(`log at:${Date.now()}`)
    },
    onLaunch () {
      // 获取小程序更新机制兼容
      if (wx.canIUse('getUpdateManager')) {
        const updateManager = wx.getUpdateManager()
        updateManager.onCheckForUpdate(function (res) {
          // 请求完新版本信息的回调
          if (res.hasUpdate) {
            updateManager.onUpdateReady(function () {
              wx.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success: function (res) {
                  if (res.confirm) {
                    // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                    updateManager.applyUpdate()
                  }
                }
              })
            })
            updateManager.onUpdateFailed(function () {
              // 新的版本下载失败
              wx.showModal({
                title: '已经有新版本了哟~',
                content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
              })
            })
          }
        })
      } else {
        // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
        wx.showModal({
          title: '提示',
          content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
        })
      }
    }
  }
</script>

<style lang="less">
  @import '../static/style/index';

  .main-wrap {
    .flex-1;
    overflow-y: scroll;
  }

  ::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    color: transparent;
  }


  .auth-btn {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    border: none;
    opacity: 0;
    z-index: 99999;
    background: transparent;
  }

  .van-button--default {
    font-weight: 500;
    color: #999999 !important;
  }

  .van-dialog {
    width: 60% !important;
  }
</style>
