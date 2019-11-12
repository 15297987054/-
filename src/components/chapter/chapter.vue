<template>
  <scroll-view
    class="chapter-container"
    :style="{'height':windowHeight + 'px'}"
    scroll-y="true"
    @scrolltoupper="refresh"
    @scrolltolower="loadMore"
    lower-threshold="50"
    upper-threshold="0"
    @scroll="viewScroll"
  >
    <div class="chapter" v-for="(item, index) in chapters" :key="index">
      <div @click="showIndex(index,item)">
        <chapter-item :itemData="item" :arrowName="selectIndex == index ? 'arrow-down' : 'arrow'"></chapter-item>
      </div>
      <div class="list" v-show="selectIndex == index">
        <chapter-item
          v-for="(chil, index2) in item.children"
          :key="index2"
          :item-data="chil"
          :arrow="false"
        ></chapter-item>
      </div>
    </div>
  </scroll-view>
</template>

<script>
import ChapterItem from './chapter-item'
import { throttle } from '@/utils'

export default {
  components: {
    ChapterItem
  },
  props: {
    chapters: {
      type: Array,
      required: true,
      default: []
    },
    windowHeight: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      selectIndex: -1
    }
  },
  onShow () {
    this.selectIndex = -1
  },
  methods: {
    handleClick () {
      mpvue.navigateTo({
        url: '../practice/main'
      })
    },
    showIndex (index, item) {
      if (item && item.children.length === 0) {
        return false
      }
      if (this.selectIndex === index) {
        this.selectIndex = -1
      } else {
        this.selectIndex = index
      }
    },
    refresh () {
    },
    loadMore () {
      this.$emit('loadMore')
    },
    viewScroll: throttle(() => {
    }, 500)
  }
}
</script>

<style lang="less" scoped>
.chapter-container {
  padding: 25px 15px 0;
  overflow-x: hidden;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  .chapter {
    &:not(:last-child) {
      border-bottom: 1px solid #e5e5e5;
    }
  }

  .list {
    padding: 0 15px;
  }
}
</style>
