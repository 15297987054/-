import Fly from '@/utils/fly'

export function getVerifyCode (params) {
  return Fly.request({
    method: 'post', // post/get 请求方式
    // url: '/mms/country/queryValidZoneListForMallHome',
    url: '/api/wechat/question',
    body: {}
  })
}

/***
 * 获取验证码接口
 * @phoneNumber 手机号码
 * @returns {*}
 * @constructor
 */
export function ApiGetVerifycode (params) {
  return Fly.get('/api/wechat/verifycode', params)
}

/***
 * 登录接口
 * @mobile 手机号码
 * @loginType 登录类型；登陆类型。0：验证码登陆；1：微信授权登陆 2 用户名密码登录
 * @verifyCode 验证码
 * @returns {*}
 * @constructor
 */
export function ApiLogin (params) {
  /* return Fly.post('/api/login/miniLogin?mobile=' + params.mobile +
    '&loginType=' + params.loginType +
    '&verifyCode=' + params.verifyCode
    , params) */
  return Fly.post('/api/wechat/login?phone=' + params.mobile +
    '&loginType=' + params.loginType +
    '&verifyCode=' + params.verifyCode +
    '&code=' + params.code +
    '&encryptedData=' + params.encryptedData +
    '&iv=' + params.iv
    , params)
}

/***
 * 首页接口
 * @param params
 * @returns {*}
 * @constructor
 */
export function ApiGetHomeData (params) {
  return Fly.get('/api/wechat/index', params)
}

/***
 * 科目接口
 * @pageNum 每页记录数
 * @pageSize 当前页码
 * @type 方式(0章节 1收藏 2错题 3考点)
 * @questionBankId 题库ID
 * @customerId 学生id
 * @returns {*}
 */
export function ApiQuestionChapterInfo (params) {
  return Fly.get('/api/wechat/questionChapterInfo', params)
}

/***
 * 章节列表
 * @type 方式(0章节 1收藏 2错题 3考点)
 * @questionChapterInfoId 课程ID
 * @customerId 学生ID
 * @pageNum 每页记录数
 * @pageSize 当前页码
 * @returns {*}
 */
export function ApiGetChapter (params) {
  return Fly.get('/api/wechat/questionChapterInfo/chapter', params)
}

/***
 * 题型选择接口
 * @customerId 学员id
 * @courseId 课程id
 * @returns {*}
 */
export function ApiGetQuestionType (params) {
  return Fly.get('/api/wechat/progress', params)
}

/***
 * 问题查询列表
 * @type 方式(0章节 1收藏 2错题 3考点 4单选  5多选 6判断)
 * @courseId 课程id
 * @chapterId 章节id
 * @sectionId 小节id
 * @customerId 学生id
 * @returns {*}
 */
export function ApiGetQuestion (params) {
  return Fly.get('/api/wechat/question', params)
}

/***
 * 提交题目信息
 * @type 方式(0章节 1收藏 2错题 3考点 4单选  5多选 6判断)
 * @courseId 课程id
 * @chapterId 章节id
 * @sectionId 小节id
 * @customerId 学生id
 * @duration 耗时(分钟计算)
 * @startTime 开始时间
 * @endTime 结束时间
 * @questionList 问题列表(把上个接口的返回数据封装进来，答案列表只下留用户选择的)
 * @returns {*}
 */
export function ApiGetQuestionSubmit (params) {
  return Fly.post('/api/wechat/question/submit', params)
}

/***
 * 排行榜接口
 * @type 方式(0 周榜 1总榜)
 * @property 排序字段
 * @pageNum 每页记录数
 * @pageSize 当前页码
 * @returns {*}
 */
export function ApiStatistical (params) {
  return Fly.get('/api/wechat/statistical', params)
}

/***
 * 刷题激励
 * @customerId 学生id
 * @exerciseNum 学生刷题激励数
 * @exerciseCount 学生刷题激励天数
 * @returns {*}
 */
export function ApiStatisticalEncourage (params) {
  return Fly.get('/api/wechat/statistical/encourage', params)
}

/***
 * 意见反馈
 * @customerId 学生id
 * @satisfaction 满意度;1-不满意；2-一般；3-不错；4-满意；5-超棒
 * @Feedbacktype 反馈类型
 * @feedbackContent 反馈内容
 * @returns {*}
 */
export function ApiFeedback (params) {
  // return Fly.post('/api/wechat/feedback', params)
  return Fly.post('/api/wechat/feedback?satisfaction=' + params.satisfaction + '&Feedbacktype=' + params.Feedbacktype + '&feedbackContent=' + params.feedbackContent, params)
}

/***
 * 题目错误反馈
 * @questionId 问题id
 * @type 错误类型(0 全部 1题目有误 2答案有误 3解析有误 4选项有误)
 * @detail 内容
 * @returns {*}
 */
export function ApiErrorFeedback (params) {
  // return Fly.post('/api/wechat/errorCorrecting?'+, params)
  return Fly.post(`/api/wechat/errorCorrecting?questionId=${params.questionId}&type=${params.type}&detail=${params.detail}&customerId=${params.customerId}`, params)
}

/***
 * 题目分析
 * @id 提交问题时返回的id
 * @customerId 学生id
 * @returns {*}
 */
export function ApiQuestionAnalysis (params, id) {
  return Fly.get('/api/wechat/question/analysis/' + id, params)
}

/***
 * 题目收藏或者取消收藏
 * @id 问题id
 * @customerId 学生id
 * @returns {*}
 */
export function ApiCollection (params) {
  return Fly.post('/api/wechat/question/collection?id=' + params.id + '&customerId=' + params.customerId)
}

/***
 * 删除错题
 * @id 问题id
 * @customerId 学生id
 * @returns {*}
 */
export function ApiDeleteError (params, id) {
  return Fly.post('/api/wechat/question/error/' + id, params)
}

/***
 * 刷题记录
 * @questionBankId 专业
 * @customerId 学生id
 * @returns {*}
 */
export function ApiQuestionRecord (params) {
  return Fly.get('/api/wechat/questionRecord', params)
}
/***
 * 刷题激励
 * @customerId 学生id
 * @returns {*}
 */
export function ApiEncourage (params) {
  return Fly.get('/api/wechat/statistical/encourage', params)
}

/***
 * 科目进度
 * @courseId 科目id
 * @customerId 学员id
 * @type 类型type
 * @returns {*}
 * @constructor
 */
export function ApiSubjectProcess (params) {
  let courseId = params.courseId
  delete params.courseId
  return Fly.get('/api/wechat/questionChapterInfo/' + courseId, params)
}
