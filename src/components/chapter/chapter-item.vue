<template>
  <div class="chapter-select" @click="handleClick">
    <div class="chapter-message">
      <span class="chapter-name">{{itemData.name}}</span>
      <template v-if="arrow">
        <span class="arrow">
          <van-icon :name="arrowName"/>
        </span>
      </template>
    </div>
    <div class="chapter-customer">
      <div class="online-headImg">
        <img v-for="(cu, id) in itemData.imgList" :key="id" :src="imageDomain + cu" alt="" lazy-load="true">
      </div>
      <span class="label">{{itemData.doingNumber == null ?'0':itemData.doingNumber}}人正在做</span>
      <div class="chapter-schedule">
        <span class="complete-question">
          {{itemData.questionNumber==null?'0':itemData.questionNumber>itemData.questionTotal?itemData.questionTotal:itemData.questionNumber}}
        </span>/
        <span class="question-total">
          {{itemData.questionTotal==null?'0':itemData.questionTotal}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import base from '@/utils/common'

  export default {
    name: 'chapter-item',
    props: {
      itemData: {
        required: true
      },
      arrow: {
        default: true
      },
      arrowName: {
        type: String,
        default: 'arrow'
      }
    },
    data () {
      return {
        chapterData: {},
        imageDomain: ''
      }
    },
    onLoad () {
      this.imageDomain = base.config[base.config.active].appImgPath
    },
    methods: {
      handleClick () {
        if (this.itemData) {
          // 章跳转
          if (this.itemData.type === 2 &&
            (this.itemData.children == null ||
              this.itemData.children.length === 0)) {
            // this.$store.dispatch('updateQuestionType', 0)
            this.$store.dispatch('updateChapterId', this.itemData.id)
            this.$store.dispatch('updateSectionId', '')
            mpvue.navigateTo({ // navigateTo
              url: '../practice/main'
            })
          }
          if (this.itemData.type === 2) {
            this.$store.dispatch('updateChapterId', this.itemData.id)
          }
          // 节跳转
          if (this.itemData.type === 3) {
            this.$store.dispatch('updateSectionId', this.itemData.id)
            mpvue.navigateTo({
              url: '../practice/main'
            })
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../static/style/common";

  .chapter-select {
    padding-top: 15px;
    height: 65px;

    .chapter-message {
      .flex;
      margin-bottom: 10px;

      .chapter-name {
        .flex-2;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        color: #333333;
        font-size: 15px;
        font-weight: bold;
      }

      .arrow {
        .flex-1;
        color: #666666;
        font-size: 15px;
        margin-top: 6px;
        text-align: right;
      }
    }

    &:not(:last-child) {
      border-bottom: 1px solid #E5E5E5;
    }

    .chapter-customer {
      width: 100%;

      .online-headImg {
        display: inline-block;

        img {
          height: 16px;
          width: 16px;
          position: relative;
          max-width: 100%;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
        }

        img:nth-of-type(2) {
          left: -5px;
        }

        img:nth-of-type(3) {
          left: -10px;
        }

        img:nth-of-type(4) {
          left: -15px;
        }
      }

      .label {
        color: #666666;
        font-size: 12px;
      }

      .chapter-schedule {
        display: inline-block;
        font-size: 12px;
        float: right;

        .complete-question {
          color: #5CCCE5;
        }
      }
    }
  }
</style>
