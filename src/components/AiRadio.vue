<template>
  <ul class="answer-container">
    <li
      class="answer-item"
      v-for="(item,index) in options"
      :key="index"
      @tap.stop="handleChoose(index)"
    >
      <div
        v-if="questionType==='1'"
        class="answer-id"
        :class="{active:chose[0] === index}"
      >{{item.itemCode}}</div>
      <div v-else class="judge-id">
        <div :class="{'judge-active':chose[0] === index}">&nbsp;</div>
      </div>
      <div class="answer-name" v-html="item.content"></div>
    </li>
  </ul>
</template>
<script>
import { debounce } from '../utils'

export default {
  props: {
    selected: {
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
  },
  data () {
    return {
      chose: this.selected,
      isActives: []
    }
  },
  watch: {
    'selected': {
      immediate: true,
      deep: true,
      handler (newValue) {
        this.chose = newValue
      }
    },
    'options': {
      deep: true,
      handler (newValue) {
        this.options = newValue
        this.options.forEach(() => {
          this.isActives.push(false)
        })
      }
    }
  },
  methods: {
    handleChoose: debounce(function (item) {
      this.chose.length ? this.chose[0] = item : this.chose.push(item)
      this.changeActive(this.chose[0])
      this.$emit('update:selected', this.chose)
      // this.$emit('updateSelected', this.chose)
      this.changeQuestion()
    }, 50, false),
    changeQuestion: debounce(function () {
      let isTrue = [0, 3, 4, 6].indexOf(parseInt(this.$store.getters.questionType)) > -1
      if (isTrue) {
        this.$emit('updateCurQuestionId')
      }
    }, 800, false),
    changeActive (selectedIndex) {
      this.isActives = this.isActives.map((item, index) => {
        item = selectedIndex === index
        return item
      })
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
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
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

    .judge-id {
      display: inline-block;
      height: 18px;
      width: 18px;
      padding: 3px;
      margin-right: 8px;
      text-align: center;
      font-size: 14px;
      color: #5ccce5;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      border: 1px solid #5ccce5;

      & > div {
        display: block;
        height: 100%;
        width: 100%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
      }

      .judge-active {
        background-color: #5ccce5;
      }
    }
  }
}
</style>
