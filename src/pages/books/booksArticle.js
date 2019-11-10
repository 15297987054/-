import React, { Component } from 'react';
import { Card, Pagination, Button, Input,Modal } from 'antd';
import "./style.css"
const { Search } = Input;
export default class BooksArticle extends Component {
    constructor() {
        super()
        this.state = {
            dataList: [],
            current: 1,
            pageList: [],
            searchList: [],
            oneList: [],
            flag: false,
            visible:false,
        }
    }
    onChange = page => {
        this.setState({
            current: page,
        });
    };
    onSearch = (value, searchList, dataList) => {
        if (value == "") {
            this.setState({
            visible:true
            })
        }
        if (value != "") {
            var title = []
            var nPos;
            var vResult = [];
            for (var i in searchList) {
                var sTxt = searchList[i] || '';
                nPos = sTxt.indexOf(value);
                if (nPos >= 0) {
                    vResult[vResult.length] = sTxt;
                }
            }
            for (let j in dataList) {
                if (vResult == dataList[j].title) {
                    title.push(dataList[j])
                }
            }
            console.log(title, 33333)
            this.setState({
                oneList: title
            })
        }

    }
    hideModal = () => {
        this.setState({
          visible: false,
        });
      };
    render() {
        let { dataList, pageList, current, searchList, oneList, flag } = this.state;
        searchList = []
        console.log(oneList)
        dataList = JSON.parse(localStorage.getItem("arr"))
        pageList = dataList.slice((current - 1) * 6, (current - 1) * 6 + 6);
        if (oneList.length != 0) {
            pageList = oneList;
            flag = true;
        }
        for (var i in dataList) {
            searchList.push(dataList[i].title);
        }
        if (!dataList) { dataList = [] }
        let obj = {}
        if (!(this.props.location.query)) {

        } else {
            let data = (this.props.location.query.data)
            console.log((JSON.parse(this.props.location.query.data.content)).blocks, 11111111)
            obj.title = data.title;
            obj.arr = (JSON.parse(this.props.location.query.data.content)).blocks;
            dataList.push(obj)
            localStorage.setItem("arr", JSON.stringify(dataList));
        }

        return (
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                <Button type="primary"
                    style={{ display: flag ? "block" : "none" }}
                    onClick={this.handleShow.bind(this)}
                >
                    返回文章列表
                </Button>
                <Modal
                    title="搜索内容不能为空"
                    visible={this.state.visible}
                    onOk={this.hideModal}
                    onCancel={this.hideModal}
                    okText="确认"
                    cancelText="取消"
                >
                <p>请输入搜索内容</p>
                </Modal>
                <Search
                    placeholder="请输入搜索内容"
                    enterButton="搜索"
                    size="default"
                    style={{ width: "300px", marginRight: "500px" }}
                    onSearch={value => this.onSearch(value, searchList, dataList)}
                />
                {
                    pageList.map((item, index) => (
                        <Card key={index} title={item.title} extra={<a onClick={this.handleRead.bind(this, item)}>去阅读</a>} style={{ width: 300, marginTop: "20px" }}>
                            <div id="text">
                                {
                                    item.arr.map((item, index) => (
                                        <p key={index} >{item.text}</p>
                                    ))
                                }
                            </div>
                            <div style={{display:"flex",padding:"10px",justifyContent:"space-around"}}>
                            <Button onClick={this.handleDel.bind(this, index)} style={{width:"70px"}} type="danger" block>
                                删除
                            </Button>
                            <Button onClick={this.handleChange.bind(this, item)} style={{width:"70px"}} type="primary" block>
                                编辑
                            </Button>
                            </div>
                        </Card>
                    ))
                }
                <Pagination showQuickJumper={true} style={{ width: "800px", marginTop: "20px" }} onChange={this.onChange} pageSize={6} defaultCurrent={1} total={dataList.length} />
            </div>
        )
    }
    handleChange(item){
        this.props.history.push({pathname:"/books/addbooks",query:{data:item}})
    }
    handleRead(item) {
        this.props.history.push({ pathname: "/read", query: { data: item } })
    }
    handleDel(index) {
        let arr = JSON.parse(localStorage.getItem("arr"));
        arr.splice(index, 1);
        this.setState({
            dataList: arr
        })
        localStorage.setItem("arr", JSON.stringify(arr))
    }
    handleShow() {
        this.setState({
            flag: false,
            oneList: []
        })
    }
}