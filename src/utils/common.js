export default {
  validataPhone (phoneNumber) { // 校验手机号码格式
    // let myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/
    let myreg = /^1\d{10}$/
    return myreg.test(phoneNumber)
  },
  isNotEmpty (obj) { // 判断字符串不为空
    if (obj !== null && obj !== undefined && obj !== '' &&
      obj !== 'null' && obj !== 'undefined') {
      return true
    }
    return false
  },
  isAuthorization () { // 检查用户是否授权
    return new Promise((resolve) => {
      wx.getSetting({
        success: function (result) {
          if (result.authSetting['scope.userInfo']) {
            return resolve(true)
          }
          return resolve(false)
        }
      })
    })
  },
  accMul (arg1, arg2) { // 精确的乘法函数
    let m = 0
    let s1 = arg1.toString()
    let s2 = arg2.toString()
    try {
      m += s1.split('.')[1].length
    } catch (e) {
    }
    try {
      m += s2.split('.')[1].length
    } catch (e) {
    }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
  },
  config: { // 根据不同环境取值  console.log('------>', base.config.active) console.log('1--->', base.config[base.config.active].img)
    active: 'test',
    hm: {
      appImgPath: 'http://uatdfs.aihuaol.com/',
      leaderBoard: 'group1/M00/00/0C/rBITilzjZ1OAQUmqAAGLcidH1aM459.png',
      encourageImg: 'group1/M00/00/0C/rBITilzSlIqAGwviAAPscapxo-I199.svg',
      host: 'http://192.168.1.183:8089'
    },
    test: {
      appImgPath: 'http://192.168.1.71:8888/', // 图片域名
      host: 'http://172.1.2.47:8089', // 接口请求域名
      leaderBoard: 'group1/M00/00/30/wKgBR1z12P6ARFukAAGLcidH1aM895.png', // 排行榜图片
      encourageImg: 'group1/M00/00/2E/wKgBR1zQ6m2ACncqAAPshP9GW3Q965.svg' // 激励图片
    },
    uat: {
      appImgPath: 'http://uatdfs.aihuaol.com/',
      host: 'https://uatquestion.aihuaol.com',
      leaderBoard: 'group1/M00/00/0C/rBITilzjZ1OAQUmqAAGLcidH1aM459.png',
      encourageImg: 'group1/M00/00/0C/rBITilzSlIqAGwviAAPscapxo-I199.svg'
    },
    pro: {
      appImgPath: 'http://dfs.aihuaol.com:8888/',
      host: 'https://question.aihuagrp.com',
      leaderBoard: 'group1/M00/01/17/rBITjV0HAWGAXz__AAGLcidH1aM672.png',
      encourageImg: 'group1/M00/00/A3/rBITjVzU9buAFW7EAAPscapxo-I515.svg'
    }
  }
}
