<template>
  <div class="ai-timer-container">
    <slot name="icon"></slot>
    <div
      :sendSync="sendSync"
      :autoStart="autoStart"
      :defaultVal="defaultVal"
      :isOn="isOn"
    >{{countString}}</div>
  </div>
</template>
<script>
export default {
  props: {
    sendSync: {
      type: Boolean,
      default: false
    },
    autoStart: {
      type: Boolean,
      default: false
    },
    defaultVal: {
      type: Number,
      default: 0
    },
    isOn: {
      type: Boolean,
      require: false,
      default: true
    }
  },
  data () {
    return {
      isStart: false,
      globalTimer: null, // 获取setInterval对象值
      countString: '0', // 用来显示时间
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
      countVal: this.defaultVal, // 获取初始值
      pauseTime: 0
    }
  },
  watch: {
    'countString': {
      deep: true,
      handler: function (val, oldVal) {
        var vm = this
        if (vm.needSendSunc) {
          vm.passToParent(val)
        }
      }
    },
    'needSendSunc': {
      deep: true,
      handler: function (val) {
        var vm = this
        if (val) {
          vm.passToParent(vm.countString)
        }
      }
    },
    'isOn' (n) {
      if (!n) {
        this.stopCountFn()
      } else {
        this.startCountFn()
      }
    }
  },
  mounted () {
    var vm = this
    if (vm.autoStart) {
      vm.startCountFn()
    }
  },
  computed: {
    needSendSunc: function () {
      return this.sendSync
    }
  },
  created: function () {
    this.$on('startCount', function () {
      this.startCountFn()
    })
    this.$on('stopCount', function () {
      this.stopCountFn()
    })
  },
  destroyed () {
    clearInterval(this.globalTimer)
  },
  methods: {
    counterFn: function (counterTime) {
      var vm = this
      var num = null
      var minuteStr = ''
      var secondStr = ''
      var nowDate = new Date().getTime()
      if (vm.pauseTime === 0) {
        num = nowDate - counterTime // 计算时间毫秒差
      } else {
        vm.pauseTime = vm.pauseTime + 10
        num = vm.pauseTime - counterTime // 计算时间毫秒差
      }
      var leave1 = num % (24 * 3600 * 1000)
      var leave2 = leave1 % (3600 * 1000)
      var leave3 = leave2 % (60 * 1000)
      vm.day = Math.floor(num / (24 * 3600 * 1000)) // 计算相差天数
      vm.hour = Math.floor(leave1 / (3600 * 1000))// 计算相差小时
      vm.minute = Math.floor(leave2 / (60 * 1000))// 计算相差分钟
      vm.second = Math.round(leave3 / 1000) // 计算相差秒
      if (vm.second > 59) vm.second = 59
      if (vm.second > 0 && vm.second < 10) {
        secondStr = `0${vm.second}`
      } else if (vm.second < 1) {
        secondStr = `00`
      } else {
        secondStr = `${vm.second}`
      }
      if (vm.minute < 10) {
        minuteStr = `0${vm.minute}`
      } else {
        minuteStr = `${vm.minute}`
      }
      if (vm.day > 0) {
        vm.countString = `${vm.day} ${vm.hour}:${minuteStr}:${secondStr}`
      } else if (vm.hour > 0) {
        vm.countString = `${vm.hour}:${minuteStr}:${secondStr}`
      } else if (vm.minute > 0) {
        vm.countString = `${minuteStr}:${secondStr}`
      } else {
        vm.countString = `${minuteStr}:${secondStr}`
      }
    },
    startCountFn: function () {
      var vm = this
      if (!vm.isStart) {
        vm.countVal = vm.countVal ? vm.countVal : new Date().getTime()
        var timer = setInterval(function () {
          vm.counterFn(vm.countVal)
        }, 10)
        vm.globalTimer = timer
        vm.isStart = true
      }
    },
    stopCountFn: function () {
      var vm = this
      if (vm.isStart) {
        clearInterval(vm.globalTimer)
        vm.globalTimer = null
        vm.isStart = false
        vm.pauseTime = new Date().getTime()
      }
    },
    passToParent: function (data) {
      this.$emit('getDataFromChild', data)
    }
  }
}
</script>
<style lang="less" scoped>
.ai-timer-container {
  color: #333333;
  font-size: 13px;
}
</style>
