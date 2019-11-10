import React, { Component } from 'react';
import { Card, BackTop, Button } from 'antd';
import "./style.css"
export default class Read extends Component {
    constructor() {
        super()
        this.state = {
            readingArr: []
        }
    }
    render() {
        let obj = {}
        let { readingArr } = this.state;
        if (!(this.props.location.query)) {
            readingArr = []
        } else {
            obj.title = this.props.location.query.data.title;
            obj.arr = this.props.location.query.data.arr;
            readingArr.push(obj)
        }
        return (
            <div >
                {
                    readingArr.map((item, index) => (
                        <Card key={index} title={item.title} extra={<a href="#/books/booksArticle">返回文章列表</a>} style={{ width: "1050px", background: "#ccc" }}>
                            <div>
                                {
                                    item.arr.map((item, index) => (
                                        <p key={index} >{item.text}</p>
                                    ))
                                }
                                <div>
                                    <BackTop />
                                </div>,
                            </div>
                           
                        </Card>
                    ))
                }
            </div>
        )
    }
    componentWillMount() {
        document.getElementById('root').scrollIntoView(true);//为ture返回顶部，false为底部
    }
}