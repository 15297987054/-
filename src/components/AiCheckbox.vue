<template>
  <ul class="answer-container">
    <li
      class="answer-item"
      v-for="(item,index) in options"
      :key="index"
      @tap.stop="handleChoose(index)"
    >
      <div :class="{'answer-id':true,active:isActives[index]}">{{item.itemCode}}</div>
      <div class="answer-name" v-html="item.content"></div>
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
      isActives: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], // 改变选择的样式
      chose: []
    }
  },
  watch: {
    'selected': {
      immediate: true,
      deep: true,
      handler (newValue) {
        this.isActives = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
        this.chose = newValue
        if (this.chose.length) {
          this.chose.forEach((item) => {
            this.isActives[item] = true
          })
        }
      }
    },
    'options': {
      deep: true,
      handler (newValue) {
        this.options = newValue
      }
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
@import "../../static/style/common";

.answer-container {
  .flex-v;

  .answer-item {
    padding: 10px 0;
    .flex;

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
      color: #000 !important;
    }

    .active {
      color: #fff;
      background: rgba(92, 204, 229, 1);
    }
  }
}
</style>
