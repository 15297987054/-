export default {
  methods: {
    eachQList (data) {
      var c = 0
      var t = 0
      let temp = data.map((item) => {
        t = t + 1
        if (Number(item.type) > 3) {
          c++
        } else {
          if (Number(item.type) !== 3) {
            if (item.selected.length < 1) {
              return item
            }
            if (item.correctAnswer === this.optionsToString(item.selected)) {
              c++
            }
          } else {
            if (item.isCorrect === item.selected[0]) {
              c++
            }
          }
        }
        return item
      })
      this.correctNum = c
      this.doNum = t
      return temp
    },
    handleQListData (data) {
      let len = data.length
      if (!len) {
        return []
      }
      while (len--) {
        let arr = []
        if (!data[len].selected.length) {
          data.splice(len, 1)
          this.isAnswerAll = false
        } else {
          for (let i = 0; i < data[len].selected.length; i++) {
            let curValueIndex = data[len].selected[i]
            arr.push(data[len].answers[curValueIndex])
          }
          data[len].answers = arr
          delete data[len].selected
          delete data[len].correctAnswer
        }
      }
      return data
    },
    handleSubmitData (data) {
      return {
        type: this.$store.getters.questionType,
        customerId: this.$store.getters.customerId,
        courseId: this.$store.getters.courseId,
        chapterId: this.$store.getters.chapterId,
        sectionId: this.$store.getters.sectionId || '',
        duration: this.stringToMinutes(this.$store.getters.timerString),
        startTime: this.$store.getters.startTime,
        endTime: this.$store.getters.endTime,
        questionList: data
      }
    },
    stringToMinutes (string) {
      let arr = string.split(':').reverse()
      return parseInt(arr[2] || 0) * 60 + parseInt(arr[1] || 0) + Math.floor(parseInt(arr[0]) / 60 + 1)
    },
    optionsToString (data) {
      let str = ''
      for (let i = 0; i < data.length; i++) {
        str += this.$store.getters.selectOptions[data[i]]
      }
      return str
    }
  }
}
