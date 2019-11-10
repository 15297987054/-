import React from "react";
import {UserListApi} from "@api/user";
import { Table,Switch } from 'antd';
import moment from 'moment'

export default class Userlist extends React.Component{
    constructor(){
        super()
        this.state={
            columns : [
                {
                  title: '用户账号',
                  dataIndex: 'userId',
                  key: 'userId',
                },
                {
                  title: '用户名称',
                  dataIndex: 'username',
                  key: 'username',
                },
                {
                  title: '用户头像',
                  dataIndex: 'userPic',
                  key: 'userPic',
                  render: userpic=><img style={{width:"25px",height:"25px",borderRadius:"20px"}} src={userpic} alt=""/>
                },
                {
                  title: '注册时间',
                  key: 'registerTime',
                  dataIndex: 'registerTime',
                  render: time=><p>{moment(time).format("YYYY-MM-DD")}</p>
                },
                {
                  title: '用户状态',
                  key: 'status',
                  render: status=><Switch defaultChecked onChange={this.handleUserStatus.bind(this)} />
                },
              ],
              userList:[]
        }
    }
    render(){
        let {columns,userList} = this.state;
        return(
            <div>
            <Table 
            columns={columns} 
            dataSource={userList}
            rowKey={info=>info._id}
            />
            </div>
        )
    }
    handleUserStatus(value){
        console.log(value)
    }
   async componentDidMount(){
        let data= await UserListApi();
        this.setState({
            userList:data.data.list
        })
        console.log(data)
    }
}