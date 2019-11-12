function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime (time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime2 (time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

export function currentDateTime () {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()
  const hh = now.getHours()
  const mm = now.getMinutes()
  const ss = now.getSeconds()
  let clock = year + '-'

  if (month < 10) {
    clock += '0'
  }

  clock += month + '-'

  if (day < 10) {
    clock += '0'
  }

  clock += day + ' '

  if (hh < 10) {
    clock += '0'
  }

  clock += hh + ':'
  if (mm < 10) clock += '0'
  clock += mm + ':'

  if (ss < 10) clock += '0'
  clock += ss
  return (clock)
}

/**
 * 防抖函数，返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
 *
 * @param  {function} func        回调函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @param  {boolean}  immediate   设置为ture时，是否立即调用函数
 * @return {function}             返回客户调用函数
 */
export function debounce (func, wait = 50, immediate = false) {
  let timer, context, args
  const later = () => setTimeout(() => {
    timer = null
    if (!immediate) {
      func.apply(context, args)
      context = args = null
    }
  }, wait)
  return function (...params) {
    // 如果没有创建延迟执行函数（later），就创建一个
    if (!timer) {
      timer = later()
      // 如果是立即执行，调用函数
      // 否则缓存参数和调用上下文
      if (immediate) {
        func.apply(this, params)
      } else {
        context = this
        args = params
      }
      // 如果已有延迟执行函数（later），调用的时候清除原来的并重新设定一个
      // 这样做延迟函数会重新计时
    } else {
      clearTimeout(timer)
      timer = later()
    }
  }
}

// 节流函数
export function throttle (fn, wait = 50) {
  // 上一次执行 fn 的时间
  let previous = 0
  // 将 throttle 处理结果当作函数返回
  return function (...args) {
    // 获取当前时间，转换成时间戳，单位毫秒
    let now = +new Date()
    // 将当前时间和上一次执行函数的时间进行对比
    // 大于等待时间就把 previous 设置为当前时间并执行函数 fn
    if (now - previous > wait) {
      previous = now
      fn.apply(this, args)
    }
  }
}

// 判断手势事件
export function handleDirection (data) {
  // 手势识别
  if (!data.start) {
    return false
  }
  if (!data.move) {
    return false
  }
  // 获取起始点坐标
  let startPoint = {
    x: data.start.pageX,
    y: data.start.pageY
  }
  // 获取结束点坐标
  let endPoint = {
    x: data.move.pageX,
    y: data.move.pageY
  }
  // 由于页面定位坐标系和直角坐标系有区别，故此y轴需要反过来减
  let _dx = endPoint.x - startPoint.x
  let _dy = startPoint.y - endPoint.y

  // 计算角度
  let directorDeg = (Math.atan2(_dx, _dy) / Math.PI) * 180
  let backData = {
    direct: '',
    dx: _dx,
    dy: _dy
  }
  // 对角度进行识别和处理
  if (Math.abs(directorDeg) <= 45 && _dy > 100) {
    // 向上移动
    backData.direct = 'up'
  } else if (Math.abs(directorDeg) >= 135 && _dy < -100) {
    // 向下移动
    backData.direct = 'down'
  } else if (directorDeg < 135 && directorDeg > 45 && _dx > 100) {
    // 向右移动
    backData.direct = 'right'
  } else if (directorDeg > -135 && directorDeg < -45 && _dx < -100) {
    // 向左移动
    backData.direct = 'left'
  }
  return backData
}

export function test () {
  console.log('this is test')
}

export function formatMsgTime (timespan) {
  var dateTime = new Date(timespan)
  var year = dateTime.getFullYear()
  var month = dateTime.getMonth() + 1
  var day = dateTime.getDate()
  var hour = dateTime.getHours()
  var minute = dateTime.getMinutes()
  // var second = dateTime.getSeconds()
  var now = new Date()
  var noeNew = Date.parse(now.toDateString())
  var milliseconds = 0
  var timeSpanStr
  milliseconds = noeNew - timespan
  if (milliseconds <= 1000 * 60 * 1) {
    timeSpanStr = '刚刚'
  } else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) {
    timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前'
  } else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
    timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前'
  } else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) {
    timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前'
  } else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year === now.getFullYear()) {
    timeSpanStr = month + '-' + day + ' ' + hour + ':' + minute
  } else {
    timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute
  }
  return timeSpanStr
}

export function getDateDiff (dateTimeStamp) {
  dateTimeStamp = dateTimeStamp.replace(/-/g, ':').replace(' ', ':')
  dateTimeStamp = dateTimeStamp.split(':')
  dateTimeStamp = new Date(dateTimeStamp[0], (dateTimeStamp[1] - 1), dateTimeStamp[2], dateTimeStamp[3], dateTimeStamp[4], dateTimeStamp[5])
  var minute = 1000 * 60
  var hour = minute * 60
  var day = hour * 24
  var month = day * 30
  var now = new Date().getTime()
  var diffValue = now - dateTimeStamp
  var result = ''
  if (diffValue < 0) {
    return
  }
  var monthC = diffValue / month
  var weekC = diffValue / (7 * day)
  var dayC = diffValue / day
  var hourC = diffValue / hour
  var minC = diffValue / minute
  if (monthC >= 1) {
    if (monthC > 11) {
      result = '' + parseInt(monthC / 12) + '年前'
    } else {
      result = '' + parseInt(monthC) + '月前'
    }
  } else if (weekC >= 1) {
    result = '' + parseInt(weekC) + '周前'
  } else if (dayC >= 1) {
    result = '' + parseInt(dayC) + '天前'
  } else if (hourC >= 1) {
    result = '' + parseInt(hourC) + '小时前'
  } else if (minC >= 1) {
    result = '' + parseInt(minC) + '分钟前'
  } else {
    result = '刚刚'
  }
  return result
}

export function getStorage (key) {
  return mpvue.getStorageSync(key)
}

export default {
  formatNumber,
  formatTime,
  currentDateTime,
  debounce,
  throttle,
  handleDirection,
  formatTime2,
  getDateDiff
}
