<template>
  <div class="ai-header" :style="getCustomStyle">
    <div
      class="h-left"
      :style="{ height: headAreaHeight + 'px',lineHeight:headAreaHeight+'px', marginTop: headAreaMarTop + 'px' }"
      @tap.stop="back"
    >
      <van-icon name="arrow-left" size="25px" v-if="back!==''" style="position:relative;top: 3px;" />
      <span v-else>&nbsp;</span>
    </div>
    <div
      class="h-mid"
      :style="{ height: headAreaHeight + 'px',lineHeight:headAreaHeight+'px', marginTop: headAreaMarTop + 'px' }"
    >{{title}}</div>
    <div
      class="h-right"
      :style="{ height: headAreaHeight + 'px',lineHeight:headAreaHeight+'px', marginTop: headAreaMarTop + 'px' }"
    >
      <slot name="right">&nbsp;</slot>
    </div>
  </div>
</template>

<script>
import app from '../App'

export default {
  name: 'AiHeader',
  props: {
    title: {
      type: String,
      default: ''
    },
    back: {
      type: [Function, String],
      default: ''
    },
    customStyle: {
      type: String,
      default: ''
    }
  },
  computed: {
    getCustomStyle () {
      return `padding-top: ${this.statusBarHeight}px;height:${this.navHeight}px;padding-bottom:${this.navHeightBottom}px;${this.customStyle}`
      // return `height: ${this.headAreaHeight}px,lineHeight:${this.headAreaHeight}px, marginTop: ${this.headAreaMarTop}px;${this.customStyle}`
    }
  },
  data () {
    return {
      pixelRatio: app.getSysInfo().pixelRatio, //  系统像素比
      statusBarHeight: app.getSysInfo().statusBarHeight, //  系统状态栏高度
      navHeight: '', //  顶部导航栏高度
      navHeightBottom: 7,
      headAreaHeight: app.getSysInfo().pixelRatio * 35 / app.getSysInfo().pixelRatio - 1, //  顶部内容区域高度
      headAreaMarTop: '', //  顶部内容区域外边距
      headleftBoxW: '', //  顶部内容左侧区域外边距
      headRightBoxW: '', //  顶部内容右侧区域外边距
      containersHeight: '' //  页面内容区域高度
    }
  },
  onLoad () {
    //  IOS 与 安卓进行差异化处理
    if (app.getSysInfo().system.substring(0, 3).toUpperCase() === 'IOS') {
      this.navHeight = this.pixelRatio * 40 / this.pixelRatio
      this.headAreaMarTop = this.pixelRatio * 0.5 / this.pixelRatio
      this.headleftBoxW = app.getSysInfo().windowWidth - this.pixelRatio * 100 / this.pixelRatio
      this.headRightBoxW = this.pixelRatio * 100 / this.pixelRatio
      this.containersHeight = app.getSysInfo().windowHeight - (this.statusBarHeight + this.pixelRatio * 40 / this.pixelRatio)
    } else {
      this.navHeight = this.pixelRatio * 45 / this.pixelRatio
      this.headAreaMarTop = this.pixelRatio * 2.5 / this.pixelRatio
      this.headleftBoxW = app.getSysInfo().windowWidth - this.pixelRatio * 110 / this.pixelRatio
      this.headRightBoxW = this.pixelRatio * 110 / this.pixelRatio
      this.containersHeight = app.getSysInfo().windowHeight - (this.statusBarHeight + this.pixelRatio * 45 / this.pixelRatio)
    }
    let mainH = parseInt(mpvue.getSystemInfoSync().windowHeight - this.statusBarHeight - this.navHeight - this.navHeightBottom)
    this.$store.dispatch('updateMainWrapHeight', mainH)
  }
}
</script>

<style lang="less" scoped>
@import "../../static/style/common";

.ai-header {
  .flex;
  .flex-pack-justify;
  .flex-align-center;
  background-color: #ffffff;
  color: #333333;

  .h-left,
  .h-right {
    .flex-1;
  }

  .h-left {
    padding-left: 15px;
    text-align: left;
  }

  .h-right {
    padding-right: 5px;
    text-align: right;
  }

  .h-mid {
    .oneline-ellipsis;
    .flex-2;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }
}
</style>
