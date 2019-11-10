import { connect } from 'react-redux';
import { LOGIN_ACTION_ASYNC, LOGIN_CODE } from "@actions/user";
import {message} from 'antd';
const mapStateToProps = (state) => ({
  code: state.user.code
})

const mapDispatchToProps = (dispatch) => ({
  handleLogin(e) {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        let data = await dispatch(LOGIN_ACTION_ASYNC(values))
        if(data){
          message.success("登录成功", 1.5,()=>{
            this.props.history.push("/home")
          })
         
        }
      }
    });
  },
  verifyCode() {
    dispatch(LOGIN_CODE())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)