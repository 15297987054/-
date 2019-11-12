<template>
  <ul class="answer-container">
    <li class="answer-item" v-for="(item,index) in options" :key="index">
      <div class="item" v-if="item.isCorrect == 1">
        <!--        <icon type="success" size="30" color="green"/>-->
        <img class="icon" src="../../static/images/judge_correct.svg" alt />
        <span class="answer-name" v-html="item.content"></span>
      </div>
      <div class="item" v-else-if="selected.indexOf(index)>-1 && item.isCorrect!=1">
        <!--        <icon type="cancel" size="30" color="red"/>-->
        <img class="icon" src="../../static/images/judge_wrong.svg" alt />
        <span class="answer-name" v-html="item.content"></span>
      </div>
      <div class="item" v-else>
        <span class="answer-id">{{item.itemCode}}</span>
        <span class="answer-name" v-html="item.content"></span>
      </div>
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
    options: {
      type: [Array, Object],
      require: true,
      default: []
    }
  },
  data () {
    return {
      isActives: [false, false, false, false, false, false, false, false, false, false, false, false], // 改变选择的样式
      questionID: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
      chose: []
    }
  },
  watch: {
    'selected': {
      deep: true,
      handler (newValue) {
        this.isActives = [false, false, false, false, false, false, false, false, false, false, false, false]
        this.selected = newValue
        this.chose = this.selected
        this.chose.forEach((item) => {
          this.isActives[item] = true
        })
      }
    },
    'options' (newValue) {
      this.options = newValue
    }
  },
  methods: {
    handleChoose (item) {
      this.isActives[item] = !this.isActives[item]
      let index = this.chose.indexOf(item)
      if (index > -1) {
        this.chose.splice(index, 1)
      } else {
        this.chose.push(item)
      }
      this.$emit('update:selected', this.chose)
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

    .icon {
      height: 25px;
      width: 25px;
    }

    .answer-id,
    .answer-name {
      display: block;
      line-height: 24px;
    }

    .answer-id {
      height: 24px;
      width: 24px;
      margin-right: 8px;
      text-align: center;
      font-size: 14px;
      color: #5ccce5;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      border: 1px solid #5ccce5;
    }

    .answer-name {
      .flex-1;
      font-size: 14px;
      padding-left: 5px;
      color: #000 !important;
    }

    .active {
      color: #fff;
      background: rgba(92, 204, 229, 1);
    }
  }
}
</style>
