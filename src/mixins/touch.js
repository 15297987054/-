import {debounce} from '../utils'

export default {
  data () {
    return {
      isMove: false
    }
  },
  methods: {
    touchStartFn (e) {
      this.touchStartDebounce(this, e)
    },
    touchMoveFn (e) {
      let that = this
      // 移动过程中，修正index的位置
      // 获取起始点坐标
      let startPoint = {
        x: that.touchData.start.pageX,
        y: that.touchData.start.pageY
      }
      // 获取移动时的坐标点
      let movePoint = {
        x: e.touches[0].pageX,
        y: e.touches[0].pageY
      }
      // 由于页面定位坐标系和指教坐标系有区别，故此y轴需要反过来减
      let _dx = movePoint.x - startPoint.x
      let _dy = startPoint.y - movePoint.y
      // 计算角度
      let directorDeg = (Math.atan2(_dx, _dy) / Math.PI) * 180
      if (((directorDeg < 135 && directorDeg > 45) || (directorDeg > -135 && directorDeg)) && (_dx > 100 || _dx < -100)) {
        if (!this.isMove) {
          this.touchData.move = e.touches[0]
          this.isMove = true
        }
      }
    },
    touchStartDebounce: debounce((vm, e) => {
      vm.isMove = false
      // 清除当前手势数据
      vm.touchData.start = 0
      vm.touchData.move = 0
      vm.touchData.start = e.touches[0]
    }, 50, true)
  }
}
