const user = {
  state: {
    customerId: '',
    questionBankId: '',
    questionBankName: '', // 专业ID
    questionType: '', // 方式(0章节 1收藏 2错题 3考点 4单选  5多选 6判断)
    courseId: '',
    chapterId: '',
    sectionId: '',
    questionList: [],
    timerString: '',
    startTime: '',
    endTime: '',
    token: '',
    nickName: '',
    avatarUrl: '',
    // 科目跳到章节
    questionTotal: '',
    questionNumber: '',
    wxAuth: false,
    // 章节进度
    questionProcess: {
      questionTotal: '',
      questionNumber: ''
    },
    curSubjectName: ''
  },
  mutations: {
    UPDATE_NAME: (state, data) => {
      state.name = data
    },
    UPDATE_QUESTION_BLANK_ID: (state, data) => {
      state.questionBankId = data
    },
    UPDATE_QUESTION_BLANK_NAME: (state, data) => {
      state.questionBankName = data
    },
    UPDATE_QUESTION_TYPE: (state, data) => {
      state.questionType = data
    },
    UPDATE_COURSE_ID: (state, data) => {
      state.courseId = data
    },
    UPDATE_CHAPTER_ID: (state, data) => {
      state.chapterId = data
    },
    UPDATE_SECTION_ID: (state, data) => {
      state.sectionId = data
    },
    UPDATE_QUESTION_LIST: (state, data) => {
      state.questionList = data
    },
    UPDATE_TIMER_STRING: (state, data) => {
      state.timerString = data
    },
    UPDATE_START_TIME: (state, data) => {
      state.startTime = data
    },
    UPDATE_END_TIMER: (state, data) => {
      state.endTime = data
    },
    UPDATE_TOKEN: (state, data) => {
      state.token = data
    },
    NICK_NAME: (state, data) => {
      state.nickName = data
    },
    AVATAR_URL: (state, data) => {
      state.avatarUrl = data
    },
    CUSTOMER_ID: (state, data) => {
      state.customerId = data
    },
    QUESTION_TOTAL: (state, data) => {
      state.questionTotal = data
    },
    QUESTION_NUMBER: (state, data) => {
      state.questionNumber = data
    },
    UPDATE_WX_AUTH: (state, data) => {
      state.wxAuth = data
    },
    UPDATE_QUESTION_PROCESS: (state, data) => {
      state.questionProcess = data
    },
    UPDATE_CUR_SUBJECT_NAME: (state, data) => {
      state.curSubjectName = data
    }
  },
  actions: {
    updateName ({ commit }, data) {
      commit('UPDATE_NAME', data)
    },
    updateQuestionBankId ({ commit }, data) {
      commit('UPDATE_QUESTION_BLANK_ID', data)
    },
    updateQuestionBankName ({ commit }, data) {
      commit('UPDATE_QUESTION_BLANK_NAME', data)
    },
    updateQuestionType ({ commit }, data) {
      commit('UPDATE_QUESTION_TYPE', data)
    },
    updateCourseId ({ commit }, data) {
      commit('UPDATE_COURSE_ID', data)
    },
    updateChapterId ({ commit }, data) {
      commit('UPDATE_CHAPTER_ID', data)
    },
    updateSectionId ({ commit }, data) {
      commit('UPDATE_SECTION_ID', data)
    },
    updateQuestionList ({ commit }, data) {
      commit('UPDATE_QUESTION_LIST', data)
    },
    updateTimerString ({ commit }, data) {
      commit('UPDATE_TIMER_STRING', data)
    },
    updateStartTime ({ commit }, data) {
      commit('UPDATE_START_TIME', data)
    },
    updateEndTime ({ commit }, data) {
      commit('UPDATE_END_TIME', data)
    },
    updateToken ({ commit }, data) {
      commit('UPDATE_TOKEN', data)
    },
    updateNickName ({ commit }, data) {
      commit('NICK_NAME', data)
    },
    updateAvatarUrl ({ commit }, data) {
      commit('AVATAR_URL', data)
    },
    updateCustomerId ({ commit }, data) {
      commit('CUSTOMER_ID', data)
    },
    updateQuestionTotal ({ commit }, data) {
      commit('QUESTION_TOTAL', data)
    },
    updateQuestionNumber ({ commit }, data) {
      commit('QUESTION_NUMBER', data)
    },
    updateWxAuth ({ commit }, data) {
      commit('UPDATE_WX_AUTH', data)
    },
    updateQuestionProcess ({ commit }, data) {
      commit('UPDATE_QUESTION_PROCESS', data)
    },
    updateCurSubjectName ({ commit }, data) {
      commit('UPDATE_CUR_SUBJECT_NAME', data)
    }
  }
}
export default user
