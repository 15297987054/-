<template>
  <scroll-view class="questionTypeOpt-container" :style="{'height':windowHeight + 'px'}" scroll-y="true">
    <div class="type-item" v-for="(typeItem, index) in data" :key="index">
      <div class="title-item" @tap.stop="handleTitleItem(typeItem.total,index)">
        <div class="title-left">{{typeItem.questionTypeName}}</div>
        <div class="title-right">
          <span class="question-total">{{typeItem.total}}</span>
          <van-icon :name="typeItem.isExpand?'arrow-down':'arrow'" color="#666666"
                    style="position: relative;bottom: -2px;"/>
        </div>
      </div>
      <ul class="summary-container" v-show="typeItem.isExpand">
        <li class="summary-item" v-for="(subItem,index2) in typeItem.subItem" :key="index2"
            @tap.stop="handleSubItem(typeItem,index2+1,subItem)">
          <p class="title">第{{index2+1}}节</p>
          <div class="content-item">
            <div class="img-box">
              <img :src="appImgPath+imgPath" alt="头像"
                   lazy-load="true" v-for="(imgPath,index3) in subItem.imgList" :key="index3">
            </div>
            <div class="online-people">{{subItem.doingNum}}人在做</div>
            <div class="question-num">{{subItem.subTotal}}</div>
          </div>
        </li>
      </ul>
    </div>
  </scroll-view>
</template>

<script>
  import base from '@/utils/common'

  export default {
    name: 'question-type',
    props: {
      chapterType: {
        type: Array,
        required: true
      },
      windowHeight: {
        type: Number,
        required: true
      },
      chapterTypeImgList: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        topBorder: false,
        size: 'large',
        arrowName: 'arrow',
        data: [],
        pageSize: 20,
        appImgPath: ''
      }
    },
    onLoad () {
      this.appImgPath = base.config[base.config.active].appImgPath
    },
    mounted () {
      this.data = this.handleData(this.chapterType)
    },
    methods: {
      handleData (data) {
        return data.map((item) => {
          let totalPage = Math.ceil(item.total / 20)
          let subItem = []
          for (let i = 0; i < totalPage; i++) {
            let imgs = this.chapterTypeImgList.slice(i * 4, i * 4 + 4)
            subItem.push({
              doingNum: Math.random() * 500 | 0,
              imgList: imgs,
              subTotal: i === totalPage - 1 ? item.total - (i * this.pageSize) : this.pageSize
            })
          }
          this.$set(item, 'isExpand', false)
          this.$set(item, 'subItem', subItem)
          return item
        })
      },
      handleTitleItem (total, curIndex) {
        if (total) {
          this.data[curIndex].isExpand = !this.data[curIndex].isExpand
          for (let i = 0; this.data[i] !== undefined; i++) {
            (i !== curIndex) && (this.data[i].isExpand = false)
          }
        }
      },
      handleSubItem (typeItem, index, subItem) {
        this.$store.dispatch('updateQuestionType', typeItem.type)
        this.$store.dispatch('updateChapterId', '')
        this.$store.dispatch('updateSectionId', '')
        let practiceSelect = {pageNum: index, total: subItem.subTotal}
        mpvue.setStorageSync('practiceSelect', practiceSelect)
        mpvue.navigateTo({
          url: '../practice_select/main?pageNum=' + index + '&total=' + subItem.subTotal
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../static/style/common";

  .questionTypeOpt-container {
    padding: 25px 15px 0;
    color: #333333;
    font-size: 15px;
    overflow-x: hidden;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;


    .type-item {
      padding: 15px 0 2px;
      border-bottom: 1px solid #E5E5E5;

      .title-item {
        .flex;
        height: 40px;
        line-height: 40px;

        .title-left {
          .flex-5;
          color: #333333;
          font-weight: bold;
        }

        .title-right {
          .flex-1;
          text-align: right;

          .question-total {
            color: #666666;
            font-size: 12px;
            padding-right: 10px;
          }
        }
      }

      .summary-container {
        color: #333333;

        .summary-item {
          padding: 10px 25px 10px 8px;
          border-bottom: 1px solid #E5E5E5;

          &:last-of-type {
            border-bottom: none;
          }

          .title {
            font-size: 14px;
          }

          .content-item {
            .flex;
            padding: 5px 0 0;

            .img-box {
              .flex;
              .flex-align-center;

              img {
                position: relative;
                margin-left: -5px;
                width: 16px;
                height: 16px;
                border: 1px solid #ffffff;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
              }
            }

            .online-people {
              .flex-4;
              color: #666666;
              font-size: 12px;
              padding: 2px 0 0 15px;
            }

            .question-num {
              .flex-1;
              color: #666666;
              font-size: 12px;
              text-align: right;
            }
          }

        }
      }
    }
  }
</style>
