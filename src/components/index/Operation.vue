<template>
  <div class="operation-item flex-1" @tap.stop="handleTo">
    <img :src="imgPath" alt="">
    <p class="operation-name">{{operationName}}</p>
  </div>
</template>

<script>
  import Dialog from '../../../static/vant/dialog/dialog'

  export default {
    name: 'Operation',
    props: {
      imgPath: {
        type: String,
        default: '/static/images/home/home_switch.png',
        required: true
      },
      operationName: {
        type: String,
        default: '暂无',
        required: true
      },
      to: {
        type: String,
        default: '',
        required: true
      },
      questionType: {
        type: String,
        default: '0',
        required: false
      }
    },
    methods: {
      handleTo () {
        if (this.$store.getters.token !== '') {
          this.handleLogin()
          return
        }
        this.$store.dispatch('updateQuestionType', this.questionType)
        mpvue.navigateTo({
          url: this.to
        })
      },
      handleLogin () {
        Dialog.confirm({
          // title: '标题',
          message: '您还没有登录哦~',
          confirmButtonText: '立即登录'
        }).then(() => {
          // on confirm
          mpvue.navigateTo({
            url: '../login/main'
          })
        }).catch(() => {
          // on cancel
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .operation-item {
    text-align: center;

    img {
      width: 32px;
      height: 32px;
    }

    .operation-name {
      font-size: 10px;
    }

  }
</style>
