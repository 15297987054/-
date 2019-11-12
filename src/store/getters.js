const getters = {
  // pageType: state => state.app.pageType,
  // count: state => state.app.count,
  // menuStatus: state => state.app.menuStatus
  // sys
  appImgPath: state => state.sys.appImgPath,
  staticImg: state => state.sys.prodStaticImg,
  selectOptions: state => state.sys.selectOptions,
  mainWrapHeight: state => state.sys.mainWrapHeight,
  questionTypes: state => state.sys.questionTypes,
  questionDifficulty: state => state.sys.questionDifficulty,
  testTypes: state => state.sys.testTypes,
  answerOptions: state => state.sys.answerOptions,
  // user
  name: state => state.user.name,
  customerId: state => state.user.customerId,
  questionList: state => state.user.questionList,
  questionBankId: state => state.user.questionBankId,
  questionBankName: state => state.user.questionBankName,
  questionType: state => state.user.questionType,
  courseId: state => state.user.courseId,
  chapterId: state => state.user.chapterId,
  sectionId: state => state.user.sectionId,
  timerString: state => state.user.timerString,
  startTime: state => state.user.startTime,
  token: state => state.user.token,
  nickName: state => state.user.nickName,
  avatarUrl: state => state.user.avatarUrl,
  questionTotal: state => state.user.questionTotal,
  questionNumber: state => state.user.questionNumber,
  wxAuth: state => state.user.wxAuth,
  questionProcess: state => state.user.questionProcess,
  curSubjectName: state => state.user.curSubjectName
}

export default getters
