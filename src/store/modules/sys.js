const sys = {
  state: {
    selectOptions: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
    mainWrapHeight: '',
    prodStaticImg: {
      leaderBoard: 'group1/M00/00/0C/rBITilzT4RyAFFXgAAGooYdNhso909.png',
      encourageImg: 'group1/M00/00/0C/rBITilzSlIqAGwviAAPscapxo-I199.svg'
    },
    questionTypes: {
      '1': '单选题',
      '2': '多选题',
      '3': '判断题',
      '4': '填空题',
      '5': '问答题',
      '6': '论述题',
      '7': '案例分析题',
      '8': '名词解释题'
    },
    questionDifficulty: ['简单', '较简单', '一般', '较困难', '困难', '非常难'],
    testTypes: ['非考点', '低频考点', '普通考点', '高频考点'],
    answerOptions: [{ itemCode: '0', content: '错误' }, { itemCode: '1', content: '正确' }]
  },
  mutations: {
    UPDATE_NAME: (state, data) => {
      state.name = data
    },
    UPDATE_MAIN_WRAP_HEIGHT: (state, data) => {
      state.mainWrapHeight = data
    }
  },
  actions: {
    updateName ({ commit }, data) {
      commit('UPDATE_NAME', data)
    },
    updateMainWrapHeight ({ commit }, data) {
      commit('UPDATE_MAIN_WRAP_HEIGHT', data)
    }
  }
}
export default sys
