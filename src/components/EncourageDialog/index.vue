<template>
  <van-popup safe-area-inset-top="true" custom-style="background-color:rgba(76, 76, 76, .1);"
             custom-class="encourage-popup" :show="show" duration="50"
             @close="onClose">
    <div class="container">
      <div class="box">
        <img :src="bg" alt="">
        <div class="share-box">
          <button class="share-btn" open-type="share" @tap.stop="handleShare">炫耀一下</button>
        </div>
        <div class="word-box">
          <div class="word-text" v-if="encourageType == '1'">
            恭喜学霸，刷题{{ countNumMod }}道
          </div>
          <div class="word-text" v-else>
            恭喜学霸，刷题{{ countNum }}天
          </div>
        </div>
        <!--      <icon class="on-close" type="clear" size="20" @tap.stop="onClose"></icon>-->
        <img class="on-close" src="../../../static/images/icon_close.svg" alt="" @tap.stop="onClose">
      </div>
    </div>
  </van-popup>
</template>

<script>
  import base from '../../utils/common'

  export default {
    props: {
      encourageType: {
        type: [Number, String],
        default: '1',
        required: true
      },
      countNum: {
        type: [Number, String],
        default: 0,
        required: false
      },
      show: {
        type: [Boolean],
        default: false,
        required: true
      }
    },
    data () {
      return {
        // isShow: this.show
        appImgPath: '',
        bg: ''
      }
    },
    computed: {
      countNumMod () {
        return parseInt(this.countNum / 100) * 100
      }
    },
    onLoad () {
      this.appImgPath = base.config[base.config.active].appImgPath
      this.bg = this.appImgPath + base.config[base.config.active].encourageImg
    },
    methods: {
      onClose () {
        this.show = false
        this.$emit('updateIsEncourage', this.show)
      }
    }
  }
</script>
<style lang="less" scoped>
  .van-popup.encourage-popup {
    background-color: rgba(76, 76, 76, .1) !important;

    .box {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      transform: translate(-50%, -50%);
      text-align: center;
    }

    .container {
      position: relative;
      height: 100vh;
      padding: 0;

      img {
        display: block;
        width: 289px;
        height: 379px;
        margin: 0 auto;
        /*padding-top: 20%;*/
      }

      .word-box {
        position: absolute;
        top: 237px;
        height: 30px;
        line-height: 30px;
        width: 100%;

        .word-text {
          margin: 0 auto;
          width: 204px;
          color: #fff;
          font-size: 16px;
          height: 100%;
          line-height: 30px;
          text-align: center;
        }
      }

      .share-box {
        margin-top: 25px;
        text-align: center;

        .share-btn {
          width: 40%;
          font-size: 16px;
          font-weight: 500;
          color: #fff;
          -webkit-border-radius: 30px;
          -moz-border-radius: 30px;
          border-radius: 30px;
          background-color: #F9BA35;
        }
      }

      .on-close {
        position: absolute;
        top: 83px;
        right: 12px;
        width: 22px;
        height: 22px;
      }
    }
  }
</style>

