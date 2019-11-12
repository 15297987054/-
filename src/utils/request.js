// import Fly from 'flyio'
import Fly from 'flyio/dist/npm/wx'
import qs from 'qs'
import base from '@/utils/common'
import { getStorage } from '@/utils/index'
import Dialog from '../../static/vant/dialog/dialog'
const fly = new Fly()
fly.config.timeout = 10 * 1000
// fly.config.baseURL = 'http://localhost:8089/api'
fly.config.baseURL = base.config[base.config.active].host + '/api'
const request = function (url, data = {}, method = 'post', contentType = false) {
  return new Promise((resolve, reject) => {
    const options = {
      method,
      headers: {
        'Authorization': getStorage('token'),
        'clientkey': getStorage('clientkey'),
        'platform': 'MiniProgram'
      }
    }
    if (method.toLowerCase() !== 'get') {
      data = contentType ? data : qs.stringify(data)
    }
    fly.request(url, data, options).then(response => {
      // todo  1. 根据状态码判断
      const res = response.data
      if (Number(res.code) === 0) {
        resolve(res)
      } else {
        if (Number(res.code) === 500) {
          if (res.msg === '请先登录') {
            Dialog.confirm({
              // title: '标题',
              message: '您还没有登录哦~'
            }).then(() => {
              // on confirm
              mpvue.navigateTo({
                url: '../login/main'
              })
            })
          } else if (res.msg === '请做题') {
            resolve(res)
          } else if (Number(res.code) === 1) {
            Dialog.confirm({
              // title: '标题',
              message: '您还没有登录哦~'
            }).then(() => {
              // on confirm
              mpvue.navigateTo({
                url: '../login/main'
              })
            }).catch(() => {
              // on cancel
            })
          } else {
            resolve(res)
          }
        }
      }
    }).catch(error => {
      reject(error)
    })
  })
}

export default request
