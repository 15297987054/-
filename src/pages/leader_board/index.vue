<template>
  <div class="leaderboard-container">
    <ai-header :back="customGoBack" title="刷题榜"
               customStyle="background-color:#FFB049;color:#fff;border-bottom:1px solid #FFB049"></ai-header>
    <scroll-view class="main-wrap" scroll-y="true">
      <div class="top-container">
        <img class="top-bg" :src="topBg" alt="" lazy-load="true"/>
        <div class="barrage-container">
          <div class="barrage-box">
            <span class="text-box" v-for="(item,index) in barrageList" :key="index" :style="{top: item.top}">{{item.words}}</span>
          </div>
        </div>
        <div class="personal-wrap">
          <div class="personal-achievement flex-v">
            <div class="switch-sort" @tap.stop="switchSortWay">切换排序方式</div>
            <div class="head-box">
              <img :src="avatarUrl" :alt="nickName" lazy-load="true">
            </div>
            <div class="achievement-content">
              <p class="user-name">{{nickName}}</p>
              <p class="rank" v-if="!currentRank">本周排名第{{statusDetail.ranking}}名</p>
              <p class="rank" v-else>总排行榜第{{statusDetail.ranking}}名</p>
            </div>
            <ul class="flex statistical-box">
              <li><span>{{timeLong}}</span><span>时长(小时)</span></li>
              <li><span :style="{color: accuracy<20?'#F76F6F':'#333333'}">{{accuracy}}%</span><span>正确率</span></li>
              <li><span>{{statusDetail.exerciseCount}}</span><span>数量(道)</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="main-container">
        <div class="list-container">
          <div class="list-header">
            <div class="btn-group" @tap.stop="test">
              <div class="btn-item" :class="{'btn-active':!currentRank}" @tap.stop="selectRank(0)">本周排行榜</div>
              <div class="btn-item" :class="{'btn-active':currentRank}" @tap.stop="selectRank(1)">总排行榜</div>
            </div>
            <p class="s-tip">排名次序每周更新一次~</p>
            <div class="tab-header" id="tab-header">
              <span class="u-rank">排名</span>
              <span class="u-name">名称</span>
              <span class="u-number" v-if="!currentRank">{{propertysWeekMap[queryFormWeek.property]}}</span>
              <span class="u-number" v-else>{{propertysTotalMap[queryFormTotal.property]}}</span>
            </div>
          </div>
          <scroll-view scroll-y scroll-with-animation class="list week-list" v-show="!currentRank">
            <div class="loading-box" v-if="spinnerLoading">
              <van-loading type="spinner"/>
            </div>
            <div class="list-item" v-for="(item,index) in weekRank" :key="index">
            <span class="item u-rank">
              <img src="/static/images/leaderboard/list_medal1.png" lazy-load="true" alt="1" v-if="index===0"/>
              <img src="/static/images/leaderboard/list_medal2.png" lazy-load="true" alt="2" v-if="index===1"/>
              <img src="/static/images/leaderboard/list_medal3.png" lazy-load="true" alt="3" v-if="index===2"/>
              <span v-if="index>2">{{index+1}}</span>
            </span>
              <div class="item u-name">
                <img :src="appImgPath+item.headImg" :alt="item.customerName" lazy-load="true">
                <span>{{item.customerName}}</span>
              </div>
              <span class="item u-number">
                   {{item[queryFormWeek.property]}}&nbsp;&nbsp;&nbsp;
              </span>
            </div>
          </scroll-view>
          <scroll-view scroll-y scroll-with-animation class="list total-list" v-show="currentRank">
            <div class="loading-box" v-if="spinnerLoading">
              <van-loading type="spinner"/>
            </div>
            <div class="list-item" v-for="(item,index) in totalRank" :key="index">
            <span class="item u-rank">
              <img src="/static/images/leaderboard/list_medal1.png" alt="1" lazy-load="true" v-if="index===0"/>
              <img src="/static/images/leaderboard/list_medal2.png" alt="2" lazy-load="true" v-if="index===1"/>
              <img src="/static/images/leaderboard/list_medal3.png" alt="3" lazy-load="true" v-if="index===2"/>
              <span v-if="index>2">{{index+1}}</span>
            </span>
              <div class="item u-name">
                <img :src="appImgPath+item.headImg" :alt="item.customerName">
                <span>{{item.customerName}}</span>
              </div>
              <span class="item u-number">
                   {{item[queryFormTotal.property]}}&nbsp;&nbsp;&nbsp;
              </span>
            </div>
          </scroll-view>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
  // 引入防抖函数
  import base from '../../utils/common'
  import {debounce} from '../../utils'
  import {ApiStatistical} from '@/service/'
  import AiHeader from '@/components/AiHeader'
  import customNav from '@/mixins/customNav'

  export default {
    components: {AiHeader},
    mixins: [customNav],
    data () {
      return {
        currentRank: 0, // 方式(0 周榜 1总榜)
        statusDetail: {}, // 当前时间 正确率等信息
        weekDetail: {},
        totalDetail: {},
        weekRank: [], // 排名情况
        totalRank: [],
        spinnerLoading: false,
        propertysWeek: ['exerciseCount', 'durationTotal', 'accuracy'],
        propertysTotal: ['exerciseCount', 'durationTotal', 'accuracy'],
        propertysWeekIndex: 0,
        propertysTotalIndex: 0,
        propertysWeekMap: {
          exerciseCount: '刷题数（道）',
          durationTotal: '刷题时间（分钟）',
          accuracy: '正确率（%）'
        },
        propertysTotalMap: {
          exerciseCount: '刷题数（道）',
          durationTotal: '刷题时间（分钟）',
          accuracy: '正确率（%）'
        },
        // 查询参数
        queryFormWeek: {
          property: 'exerciseCount', // 排序的字段
          pageNum: 1,
          pageSize: 10
        },
        queryFormTotal: {
          property: 'durationTotal', // 排序的字段
          pageNum: 1,
          pageSize: 10
        },
        tipRight: 0,
        tipWidth: 0,
        winW: 0,
        winH: 0,
        opacity1: 1,
        appImgPath: '',
        mainH: '',
        timerId: '',
        timerId2: '',
        topBg: '',
        barrageData: ['超赞~ 位居榜首，无人能敌！'],
        barrageList: []
      }
    },
    computed: {
      nickName () {
        return this.$store.getters.nickName
      },
      avatarUrl () {
        return this.$store.getters.avatarUrl
      },
      timeLong () {
        return (this.statusDetail.durationTotal / 60).toFixed(1)
      },
      accuracy () {
        return (this.statusDetail.accuracy * 100).toFixed(1)
      }
    },
    onLoad () {
      this.appImgPath = base.config[base.config.active].appImgPath
      this.topBg = this.appImgPath + base.config[base.config.active].leaderBoard
      this.mainH = this.$store.getters.mainWrapHeight
      this.winH = mpvue.getSystemInfoSync().windowHeight
      this.winW = mpvue.getSystemInfoSync().windowWidth
      this.barrageList = this.setBarrageList()
    },
    onUnload () {
      clearTimeout(this.timerId)
      clearTimeout(this.timerId2)
    },
    mounted () {
      this.mainH = this.$store.getters.mainWrapHeight
      // this.loopTip()
      // 首先加载周排行榜
      this.loadWeek()
      this.selectRank(0)
    },
    methods: {
      // 选择周榜还是总榜
      selectRank: debounce(function (data) {
        this.currentRank = parseInt(data)
        if (this.currentRank === 0) {
          this.loadWeek()
        } else if (this.currentRank === 1) {
          this.loadTotal()
        } else {
          this.statusDetail = this.currentRank ? this.totalDetail : this.weekDetail
        }
      }, 60, false),
      // 选择排序方式
      switchSortWay: debounce(function () {
        // 当前是周榜
        if (this.currentRank === 0) {
          if (++this.propertysWeekIndex > this.propertysWeek.length - 1) {
            this.propertysWeekIndex = 0
          }
          // 显示排序方式的名称
          this.queryFormWeek.property = this.propertysWeek[this.propertysWeekIndex]
          this.spinnerLoading = true
          ApiStatistical({
            customerId: this.$store.getters.customerId,
            type: 0,
            property: this.queryFormWeek.property
          }).then(res => {
            this.spinnerLoading = false
            res = res.data
            this.weekDetail = res.myQuestionStatistical
            this.statusDetail = this.weekDetail
            // this.weekRank = res.questionStatisticalList
            this.weekRank = res.questionStatisticalList.map(item => {
              item.accuracy = (item.accuracy * 100).toFixed(1)
              return item
            })
          })
        } else {
          // 当前是总榜
          if (++this.propertysTotalIndex > this.propertysTotal.length - 1) {
            this.propertysTotalIndex = 0
          }
          this.queryFormTotal.property = this.propertysTotal[this.propertysTotalIndex]
          this.spinnerLoading = true
          ApiStatistical({
            customerId: this.$store.getters.customerId,
            type: this.currentRank,
            property: this.queryFormTotal.property
          }).then(res => {
            this.spinnerLoading = false
            res = res.data
            this.totalDetail = res.myQuestionStatistical
            this.statusDetail = this.totalDetail
            this.totalRank = res.questionStatisticalList.map(item => {
              item.accuracy = (item.accuracy * 100).toFixed(1)
              return item
            })
          })
        }
      }, 400, false),
      loadWeek () {
        this.spinnerLoading = true
        ApiStatistical({
          customerId: this.$store.getters.customerId,
          type: 0, // 方式(0 周榜 1总榜)
          property: this.queryFormWeek.property
        }).then(res => {
          this.spinnerLoading = false
          res = res.data
          this.weekDetail = res.myQuestionStatistical
          this.statusDetail = this.weekDetail
          if (this.queryFormWeek.property === 'accuracy') {
            this.weekRank = res.questionStatisticalList.map(item => {
              item.accuracy = (item.accuracy * 100).toFixed(1)
              return item
            })
          } else {
            this.weekRank = res.questionStatisticalList
          }
        })
      },
      loadTotal () {
        this.spinnerLoading = true
        ApiStatistical({
          type: this.currentRank,
          customerId: this.$store.getters.customerId,
          property: this.queryFormTotal.property
        }).then(res => {
          this.spinnerLoading = false
          res = res.data
          this.totalDetail = res.myQuestionStatistical
          this.statusDetail = this.totalDetail
          if (this.queryFormTotal.property === 'accuracy') {
            this.totalRank = res.questionStatisticalList.map(item => {
              item.accuracy = (item.accuracy * 100).toFixed(1)
              return item
            })
          } else {
            this.totalRank = res.questionStatisticalList
          }
        })
      },
      setBarrageList () {
        let temp = []
        for (let i = 0; i < this.barrageData.length; i++) {
          temp.push({
            top: Math.floor(Math.random() * 130) + 'px',
            words: this.barrageData[i]
          })
        }
        return temp
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../static/style/common";
  @import "../../../static/style/index";

  .leaderboard-container {
    background-color: #F5F5F5;

    .ai-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: transparent;
    }

    .main-wrap {
      margin: 0;
      padding: 0;
      border: none;
    }

    .btn-active {
      background: linear-gradient(to bottom, rgba(255, 177, 74, 1) 0%, rgba(255, 198, 119, .8) 100%); /* 标准的语法 */
      background: -webkit-linear-gradient(to bottom, rgba(255, 177, 74, 1) 0%, rgba(255, 198, 119, .8) 100%);
      color: #fff;
    }

    .loading-box {
      margin-top: 5px;
      text-align: center;
    }

    .top-container {
      position: relative;
      height: 262px;
      width: 100%;
      border-bottom-left-radius: 10px;
      -webkit-border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      -webkit-border-bottom-right-radius: 10px;
      box-sizing: border-box;
      padding: 0;
      border: 0;

      .barrage-container {
        position: absolute;
        top: 0;
        left: 0;
        height: 150px;
        width: 100%;
        z-index: 99;

        .barrage-box {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;

          .text-box {
            position: absolute;
            right: -40%;
            display: inline-block;
            height: 18px;
            line-height: 18px;
            padding: 0 8px;
            font-size: 10px;
            text-align: center;
            white-space: nowrap;
            z-index: 100;
            -webkit-border-radius: 15px;
            -moz-border-radius: 15px;
            border-radius: 15px;
            color: rgba(255, 255, 255, .7);
            background: rgba(0, 0, 0, .11);
            -webkit-animation: move 20s ease-in infinite;
            -o-animation: move 20s ease-in infinite;
            animation: move 20s ease-in infinite;
          }
        }
      }

      .top-bg {
        display: block;
        width: 100%;
        margin: 0;
      }

      .personal-wrap {
        position: absolute;
        top: 180px;
        width: calc(100% - 30px);
        padding: 0 15px;

        .personal-achievement {
          position: relative;
          background: #fff;
          -webkit-border-radius: 10px;
          -moz-border-radius: 10px;
          border-radius: 10px;

          .switch-sort {
            .btn-active;
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 0 8px;
            height: 24px;
            line-height: 24px;
            font-size: 10px;
            -webkit-border-radius: 12px;
            -moz-border-radius: 12px;
            border-radius: 12px;
          }

          .head-box {
            height: 24px;

            img {
              display: block;
              margin: 0 auto;
              width: 48px;
              max-width: 100%;
              height: 48px;
              position: relative;
              top: -24px;
              -webkit-border-radius: 50%;
              -moz-border-radius: 50%;
              border-radius: 50%;
            }
          }

          .achievement-content {
            margin-bottom: 8px;
            line-height: 23px;
            text-align: center;

            .user-name {
              font-size: 15px;
            }

            .rank {
              font-size: 13px;
              color: #F76F6F;
            }
          }

          .statistical-box {
            padding-bottom: 20px;

            & > li {
              .flex-1;

              &:nth-of-type(1), &:nth-of-type(2) {
                border-right: .25px solid #E5E5E5;
              }

              &:nth-of-type(3), &:nth-of-type(2) {
                border-left: .25px solid #E5E5E5;
              }

              span {
                display: block;
                text-align: center;

                &:nth-of-type(1) {
                  font-size: 16px;
                  font-weight: bold;
                  color: #333333;
                }

                &:nth-of-type(2) {
                  font-size: 10px;
                  color: #999999;
                }
              }

            }
          }
        }
      }

    }

    .main-container {
      padding: 80px 15px 15px 15px;

      .list-container {
        background: #fff;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
        border-radius: 15px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        .list-header {
          .btn-group {
            .flex;
            background: @mainBgColor;

            & > .btn-item {
              .flex-1;
              height: 40px;
              line-height: 40px;
              background: #fff;
              font-size: 16px;
              color: #333333;
              font-weight: 500;
              text-align: center;
              border-top-left-radius: 15px;
              border-top-right-radius: 15px;
              -webkit-transition: all .1s;
              -moz-transition: all .1s;
              -ms-transition: all .1s;
              -o-transition: all .1s;
              transition: all .1s;
            }

            .btn-active {
              color: #fff;
              background: linear-gradient(to bottom, rgba(255, 177, 74, 1) 0%, rgba(255, 198, 119, .8) 100%);
              background: -webkit-linear-gradient(to bottom, rgba(255, 177, 74, 1) 0%, rgba(255, 198, 119, .8) 100%);
            }

          }

          .s-tip {
            height: 25px;
            line-height: 25px;
            font-size: 10px;
            color: #999999;
            text-align: center;
          }

          .tab-header {
            .flex;
            padding: 0 10px;
            height: 32px;
            line-height: 32px;
            font-size: 10px;
            color: #666666;
            background: #F1F1F1;
            border: 2px solid #fff;

            & > span {
              text-align: center;
            }
          }
        }

        .u-rank {
          .flex-1;
          .flex-v;
          .flex-pack-center;
          .flex-align-center;

          img {
            display: inline-block;
            width: 16px;
            height: 21px;
          }
        }

        .u-name {
          .flex-3;
        }

        .u-number {
          .flex-2;
        }

        .list {
          padding: 0 10px;
          overflow-y: scroll;
          -webkit-transition: all .3s;
          -moz-transition: all .3s;
          -ms-transition: all .3s;
          -o-transition: all .3s;
          transition: all .3s;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;

          .list-item {
            .flex;
            height: 45px;
            line-height: 45px;
            border-bottom: 1px solid #EFEFEF;

            .item {
              font-size: 13px;
              text-align: center;
            }

            .u-name {
              .flex;
              //.flex-pack-center;
              .flex-align-center;
              .oneline-ellipsis;
              text-align: left;
              padding-left: 5px;

              img {
                display: inline-block;
                margin-right: 3px;
                width: 25px;
                height: 25px;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
              }

              span {
                display: inline-block;
                color: #333333;
              }

            }

            .u-number {
              font-size: 14px;
              font-weight: bold;
            }
          }
        }
      }

    }
  }

  @keyframes move {
    0% {
      right: -100%;
    }
    100% {
      right: 110%;
    }
  }

  @-webkit-keyframes move {
    0% {
      right: -100%;
    }
    100% {
      right: 110%;
    }
  }
</style>
