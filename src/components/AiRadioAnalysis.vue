<template>
  <ul class="answer-container">
    <li class="answer-item" v-for="(item,index) in options" :key="index">
      <template v-if="questionType=='1'">
        <div class="item" v-if="item.isCorrect==1">
          <!--          <icon type="success" size="30" style="background: rgba(247,111,111,1)"/>-->
          <img class="icon" src="../../static/images/judge_correct.svg" alt="">
          <span class="answer-name" v-html="item.content"></span>
        </div>
        <div class="item" v-if="selected[0] == index && item.isCorrect!=1">
          <img class="icon" src="../../static/images/judge_wrong.svg" alt="">
          <!--          <icon type="cancel" size="30" color="red"/>-->
          <span class="answer-name" v-html="item.content"></span>
        </div>
        <div class="item" v-if="selected[0] != index && item.isCorrect!=1">
          <span class="answer-id">{{item.itemCode}}</span>
          <span class="answer-name" v-html="item.content"></span>
        </div>
      </template>
      <template v-else>
        <div class="item" v-if="item.isCorrect == '1'">
          <img class="icon" src="../../static/images/judge_correct.svg" alt="">
          <span class="answer-name" v-html="item.content"></span>
        </div>
        <div class="item" v-else-if="selected[0]==index && item.isCorrect!='1'">
          <img class="icon" src="../../static/images/judge_wrong.svg" alt="">
          <span class="answer-name" v-html="item.content"></span>
        </div>
        <div class="item" v-else>
          <span class="judge-id">&nbsp;</span>
          <span class="answer-name" v-html="item.content" style="padding-left:0;"></span>
        </div>
      </template>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      // 选择的答案
      selected: {
        type: [Array, Object],
        require: true,
        default: []
      },
      answers: {
        type: [Array, Object],
        require: true,
        default: []
      },
      options: {
        type: [Array, Object],
        require: true,
        default: []
      },
      questionType: {
        type: Number,
        default: '1'
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../static/style/common.less";

  .answer-container {
    .flex-v;

    .answer-item {
      padding: 10px 0;
      .flex;
      //.flex-align-center;

      .item {
        .flex;
        .flex-align-center;
      }

      .answer-id, .answer-name {
        display: block;
        line-height: 24px;
      }

      .icon {
        height: 25px;
        width: 25px;
      }

      .answer-id {
        height: 24px;
        width: 24px;
        text-align: center;
        font-size: 14px;
        color: #5CCCE5;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        border: 1px solid #5CCCE5;
      }

      .answer-name {
        .flex-1;
        padding-left: 8px;
        font-size: 14px;
        color: #000 !important;
      }

      .active {
        color: #fff;
        background: rgba(92, 204, 229, 1);
      }

      .judge-id {
        display: inline-block;
        height: 18px;
        width: 18px;
        padding: 3px;
        margin-right: 8px;
        text-align: center;
        font-size: 14px;
        color: #5CCCE5;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        border: 1px solid #5CCCE5;

        & > span {
          display: block;
          height: 100%;
          width: 100%;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
        }

        .judge-active {
          background-color: #5CCCE5;
        }
      }
    }
  }
</style>
