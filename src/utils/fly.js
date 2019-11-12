import Fly from 'flyio/dist/npm/wx'
// import qs from 'qs'

import Dialog from '../../static/vant/dialog/dialog'
import { getStorage } from './index'
import base from '@/utils/common'

const fly = new Fly()

fly.config.baseURL = base.config[base.config.active].host  //设置请求基地址
fly.config.timeout = 15 * 1000
// fly.config.parseJson = false
// 添加请求拦截器
fly.interceptors.request.use((request) => {
  // wx.showLoading({
  //   title: '加载中',
  //   mask: true
  // })
  request.headers = {
    'Authorization': getStorage('token'),
    'clientkey': getStorage('clientkey'),
    'content-type': 'application/json',
    'platform': 'MiniProgram'
  }

  let authParams = {
    // 公共参数
    // 'categoryType': 'SaleGoodsType@sim',
  }

  request.body && Object.keys(request.body).forEach((val) => {
    if (request.body[val] === '') {
      delete request.body[val]
    }
  })
  request.body = {
    ...request.body,
    ...authParams
  }
  // 设置post方式与get方式的content-type
  // if (request.method === 'POST' || request.method === 'post') {
  //   // request.body = qs.stringify(request.body)
  //   request.headers['content-type'] = 'application/x-www-form-urlencoded'
  // } else if (request.method === 'GET' || request.method === 'GET') {
  //   request.headers['content-type'] = 'application/json'
  // }
  return request
})

// 添加响应拦截器
fly.interceptors.response.use(
  (response) => {
    mpvue.hideLoading()
    const res = response.data
    if (parseInt(res.code) === 0) {
      return res // 请求成功之后将返回值返回
    } else {
      if (parseInt(res.code) === 500) {
        if (res.msg === '请先登录') {
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
        } else if (res.msg === '请做题') {
          return res
        }
      } else if (parseInt(res.code) === 1) {
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
        return res
        // return Promise.reject(res.msg)
      }
    }
  },
  (error) => {
    mpvue.hideLoading()
    // 请求出错，根据返回状态码判断出错原因
    console.log('err:', error)
    return Promise.reject(error)
  }
)
export default fly
