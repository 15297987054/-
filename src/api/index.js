import request from '@/utils/request'
// let test = 'http://localhost:8089/api'
// const baseUrl = process.env.NODE_ENV === 'development' ? test : '/api'

const Api = {
  test (params) {
    return request('/v1/test/index', params, 'get')
  },
  getVerifyCode (params) {
    return request('/wechat/question', params, 'post')
  },
  /***
 * 获取验证码接口
 * @phoneNumber 手机号码
 * @returns {*}
 * @constructor
 */
  ApiGetVerifycode (params) {
    return request('/wechat/verifycode', params, 'get')
  },
  /***
 * 登录接口
 * @mobile 手机号码
 * @loginType 登录类型；登陆类型。0：验证码登陆；1：微信授权登陆 2 用户名密码登录
 * @verifyCode 验证码
 * @returns {*}
 * @constructor
 */
  ApiLogin (params) {
    /* return Fly.post('/api/login/miniLogin?mobile=' + params.mobile +
      '&loginType=' + params.loginType +
      '&verifyCode=' + params.verifyCode
      , params) */
    return request('/wechat/login?phone=' + params.mobile +
      '&loginType=' + params.loginType +
      '&verifyCode=' + params.verifyCode +
      '&code=' + params.code +
      '&encryptedData=' + params.encryptedData +
      '&iv=' + params.iv, params, 'post')
  },
  /***
 * 首页接口
 * @param params
 * @returns {*}
 * @constructor
 */
  ApiGetHomeData (params) {
    return request('/wechat/index', params, 'get')
  },
  /***
 * 科目接口
 * @pageNum 每页记录数
 * @pageSize 当前页码
 * @type 方式(0章节 1收藏 2错题 3考点)
 * @questionBankId 题库ID
 * @customerId 学生id
 * @returns {*}
 */
  ApiQuestionChapterInfo (params) {
    return request('/wechat/questionChapterInfo', params, 'get')
  },
  /***
 * 章节列表
 * @type 方式(0章节 1收藏 2错题 3考点)
 * @questionChapterInfoId 课程ID
 * @customerId 学生ID
 * @pageNum 每页记录数
 * @pageSize 当前页码
 * @returns {*}
 */
  ApiGetChapter (params) {
    return request('/wechat/questionChapterInfo/chapter', params, 'get')
  },
  /***
 * 题型选择接口
 * @customerId 学员id
 * @courseId 课程id
 * @returns {*}
 */
  ApiGetQuestionType (params) {
    return request('/wechat/progress', params, 'get')
  },
  /***
 * 问题查询列表
 * @type 方式(0章节 1收藏 2错题 3考点 4单选  5多选 6判断)
 * @courseId 课程id
 * @chapterId 章节id
 * @sectionId 小节id
 * @customerId 学生id
 * @returns {*}
 */
  ApiGetQuestion (params) {
    return request('/wechat/question', params, 'get')
  },
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
  ApiGetQuestionSubmit (params) {
    return request('/wechat/question/submit', params, 'post')
  },
  /***
 * 排行榜接口
 * @type 方式(0 周榜 1总榜)
 * @property 排序字段
 * @pageNum 每页记录数
 * @pageSize 当前页码
 * @returns {*}
 */
  ApiStatistical (params) {
    return request('/wechat/statistical', params, 'get')
  },
  /***
 * 刷题激励
 * @customerId 学生id
 * @exerciseNum 学生刷题激励数
 * @exerciseCount 学生刷题激励天数
 * @returns {*}
 */
  ApiStatisticalEncourage (params) {
    return request('/wechat/statistical/encourage', params, 'get')
  },
  /***
 * 意见反馈
 * @customerId 学生id
 * @satisfaction 满意度;1-不满意；2-一般；3-不错；4-满意；5-超棒
 * @Feedbacktype 反馈类型
 * @feedbackContent 反馈内容
 * @returns {*}
 */
  ApiFeedback (params) {
    // return Fly.post('/api/wechat/feedback', params)
    return request('/wechat/feedback', params, 'post')
  },
  /***
 * 题目错误反馈
 * @questionId 问题id
 * @type 错误类型(0 全部 1题目有误 2答案有误 3解析有误 4选项有误)
 * @detail 内容
 * @returns {*}
 */
  ApiErrorFeedback (params) {
    // return Fly.post('/api/wechat/errorCorrecting?'+, params)
    return request(`/wechat/errorCorrecting`, params, 'post')
  },
  /***
 * 题目分析
 * @id 提交问题时返回的id
 * @customerId 学生id
 * @returns {*}
 */
  ApiQuestionAnalysis (params, id) {
    return request('/wechat/question/analysis/' + id, params, 'get')
  },

  /***
   * 题目收藏或者取消收藏
   * @id 问题id
   * @customerId 学生id
   * @returns {*}
   */
  ApiCollection (params) {
    return request('/wechat/question/collection', params, 'post')
  },
  /***
 * 删除错题
 * @id 问题id
 * @customerId 学生id
 * @returns {*}
 */
  ApiDeleteError (params, id) {
    return request('/wechat/question/error/' + id, params, 'post')
  },

  /***
   * 刷题记录
   * @questionBankId 专业
   * @customerId 学生id
   * @returns {*}
   */
  ApiQuestionRecord (params) {
    return request('/wechat/questionRecord', params, 'get')
  },
  /***
   * 刷题激励
   * @customerId 学生id
   * @returns {*}
   */
  ApiEncourage (params) {
    return request('/wechat/statistical/encourage', params, 'get')
  },
  /***
 * 科目进度
 * @courseId 科目id
 * @customerId 学员id
 * @type 类型type
 * @returns {*}
 * @constructor
 */
  ApiSubjectProcess (params) {
    return request('/wechat/questionChapterInfo/' + params.courseId, params, 'get')
  }
}
export default Api
