<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="app-container container" id="app" ref="app">
    <ai-header :back="customGoBack" title="意见反馈"></ai-header>
    <div class="main-wrap">
      <div class="starPanel" id="starPanel">
        <span class="t1">满意度</span>
        <van-rate
          :value="message.rank"
          size="30"
          count="5"
          color="#5CCCE5"
          void-color="#C5C5C5"
          @click="onChange()"
          class="starXin"
        ></van-rate>
        <p class="fonts">{{list[message.rank].text}}</p>
      </div>
      <textarea
        v-bind:placeholder="areaText"
        placeholder-style="color: #999999"
        v-model="message.suggestion"
      ></textarea>
      <button class="te" @click="submitInfo()" type="button">提交</button>
    </div>
  </div>
</template>

<script>
// 引入防抖函数
import { debounce } from '../../utils'
import { ApiFeedback } from '@/service/'
import AiHeader from '@/components/AiHeader'
import customNav from '@/mixins/customNav'

export default {
  components: { AiHeader },
  mixins: [customNav],
  data () {
    return {
      list: [
        { text: '' },
        { text: '不满意' },
        { text: '一般' },
        { text: '不错' },
        { text: '满意' },
        { text: '超赞' }],
      reqInfo: {
        tip: { title: '请为此次服务满意度打分', icon: 'none' },
        ok: { title: '感谢您的反馈', icon: 'success' },
        fail: { title: '请稍后再试', icon: 'none' },
        load: { title: '反馈提交中', icon: 'loading' }
      },
      areaText: '您的满意是我们前进的动力',
      message: { rank: 0, suggestion: '', flag: false },
      customerId: '',
      mainH: '',
      isSubmit: false,
      timer: null
    }
  },
  onLoad () {
    this.mainH = this.$store.getters.mainWrapHeight
  },
  onShow () {
    this.customerId = this.$store.getters.customerId
    this.init()
  },
  destroyed () {
    this.timer && clearTimeout(this.timer)
  },
  // 方法
  methods: {
    init () {
      this.message.rank = 0
      this.message.suggestion = ''
      this.isSubmit = false
      this.message.flag = false
    },
    onChange () {
      this.message.rank = getApp().globalData
      this.message.flag = true
    },
    submitInfo: debounce(function () {
      if (this.isSubmit) return
      // this.message.rank = getApp().globalData
      this.customerId = parseInt(this.customerId)
      if (this.message.flag) {
        ApiFeedback({
          customerId: this.customerId,
          satisfaction: this.message.rank,
          feedbackContent: this.message.suggestion
        }).then(res => {
          this.isSubmit = true
          this.onToast(this.reqInfo.ok.title, this.reqInfo.ok.icon)
          this.timer = setTimeout(() => {
            mpvue.navigateBack({ delata: 1 })
          }, 2000)
        })
      } else {
        this.onToast(this.reqInfo.tip.title, this.reqInfo.tip.icon)
      }
    }),
    /**
     * @param title 提示语
     * @param icon 展示toast图标,默认无图标
     * @param duration 提示延迟时间,默认1500ms
     */
    onToast (title, icon, duration = 1500) {
      wx.showToast({
        title: title,
        icon: icon,
        duration: duration
      })
    }
  }
}
</script>

<style lang="less" scoped>
.fonts {
  position: relative;
  font-size: 12px;
  color: #999999;
  left: 12px;
}

.container {
  background: rgba(249, 249, 249, 1);
  position: fixed;
  width: 100%;
  height: 100%;
}

.starPanel {
  width: 90%;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 14px;
}

.starXin {
  height: auto;
  padding-left: 5px;
  line-height: 20px;
}

.starPanel span {
  width: 21%;
  height: auto;
  font-size: 15px;
  font-weight: 500;
}

.te {
  position: relative;
  top: 42px;
  width: 336px;
  height: 44px;
  background: #5ccce5;
  border-radius: 22px;
  border-top-width: 0px;
  border-bottom-width: 0px;
  font-size: 18px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}

textarea {
  width: 90%;
  height: 234px;
  left: 15px;
  border: 1px solid rgba(229, 229, 229, 1);
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  padding-top: 6px;
  padding-left: 8px;
}

button::after {
  border: none;
}
</style>
