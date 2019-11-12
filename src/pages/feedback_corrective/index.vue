<template>
  <div class="app-container corrective-container">
    <ai-header :back="customGoBack" title="纠错反馈"></ai-header>
    <div class="main-wrap">
      <div class="error-type-box">
        <div :class="{'error-type-item':true,'active':(index+1)===curIndex}" v-for="(item,index) in errors" :key="index"
             @tap.stop="handleClick(item)">
          {{item.name}}
        </div>
      </div>
      <div class="textarea-box">
      <textarea v-model="detail" class="textarea"
                placeholder="错误详情(可不填)"></textarea>
      </div>
      <div class="submit-btn" @tap.stop="handleSubmit">提交</div>
    </div>
    <van-toast id="van-toast"/>
  </div>
</template>

<script>
  import Toast from '../../../static/vant/toast/toast'
  import {ApiErrorFeedback} from '@/service'
  import AiHeader from '@/components/AiHeader'
  import customNav from '@/mixins/customNav'

  export default {
    components: {AiHeader},
    mixins: [customNav],
    data () {
      return {
        curIndex: -1,
        questionId: '',
        questionCurIndex: 0,
        errors: [
          {code: 1, name: '题目有误'},
          {code: 2, name: '答案有误'},
          {code: 3, name: '解析有误'},
          {code: 4, name: '选项有误'}
        ],
        detail: '',
        mainH: '',
        setTimer: '',
        isSubmit: false
      }
    },
    onLoad (options) {
      this.mainH = this.$store.getters.mainWrapHeight
      this._init()
      this.questionId = options.qid
      this.questionCurIndex = options.curIndex
    },
    onShow () {
      this.detail = ''
    },
    onUnload () {
      clearTimeout(this.setTimer)
    },
    methods: {
      _init () {
        this.curIndex = -1
        this.isSubmit = false
      },
      handleClick (item) {
        this.curIndex = item.code
      },
      handleSubmit () {
        if (this.isSubmit) return
        if (this.curIndex < 0) {
          Toast('请选择错误类型~')
          return
        }
        ApiErrorFeedback({
          questionId: this.questionId,
          type: this.curIndex,
          detail: this.detail,
          customerId: this.$store.getters.customerId
        }).then(res => {
          this.isSubmit = true
          Toast('感谢您的反馈~ 我们会更加严谨！')
          this.setTimer = setTimeout(function () {
            mpvue.navigateBack({delata: 1})
          }, 2000)
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../static/style/common";

  .corrective-container {
    background: #fff;

    .main-wrap {
      position: relative;
      padding: 0 20px;
    }

    .error-type-box {
      .flex-wrap;
      .flex-pack-justify;

      .error-type-item {
        /*width: 146px;*/
        flex: 0 0 45%;
        height: 40px;
        line-height: 40px;
        font-size: 13px;
        margin-top: 10px;
        color: #333333;
        background: rgba(245, 245, 245, 1);
        border: 1px solid rgba(245, 245, 245, 1);
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        text-align: center;
      }

      .error-type-item:nth-of-type(1),
      .error-type-item:nth-of-type(2) {
        margin-top: 5px;
      }

      .active {
        color: rgba(92, 204, 229, 1);
        font-weight: 600;
        background: rgba(232, 248, 251, 1);
        border: 1px solid rgba(92, 204, 229, 1);
      }

      .error-type-item:nth-of-type(2n+1) {
        margin-right: 5%;
      }
    }

    .textarea-box {
      width: 100%;
      margin-top: 15px;

      .textarea {
        /*margin: 0 auto;*/
        border: 0;
        width: 100%;
        height: 220px;
        /*line-height: 15px;*/
        padding: 10px;
        resize: none;
        font-size: 13px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        background-color: rgba(241, 241, 241, .98);
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
    }

    .submit-btn {
      width: 100%;
      margin-top: 25px;
      height: 44px;
      line-height: 44px;
      color: #fff;
      text-align: center;
      background: rgba(92, 204, 229, 1);
      -webkit-border-radius: 22px;
      -moz-border-radius: 22px;
      border-radius: 22px;
    }
  }
</style>
