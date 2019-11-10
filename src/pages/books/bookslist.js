import React, { Fragment } from "react";
import { Table, Divider, Tag, Button, Modal, Form, Select } from 'antd';
import axios from 'axios';
import "../../mock";
import ModifyForm from "@components/modifyForm"
const { Option } = Select;
export default class Bookslist extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [],
            modifyData: {},
            visible: false,
            columns: [
                {
                    title: '作者头像',
                    dataIndex: 'authorIcon',
                    key: 'authorIcon',
                    render: authorIcon => <img src={authorIcon} style={{ width: "30px", height: "30px", borderRadius: "20px" }} />,
                },
                {
                    title: '笔名',
                    dataIndex: 'authorName',
                    key: 'authorName',
                },

                {
                    title: '书籍名称',
                    dataIndex: 'booksName',
                    key: 'booksName',
                },
                {
                    title: '书籍封面',
                    dataIndex: 'booksIcon',
                    key: 'booksIcon',
                    render: booksIcon => < img src={booksIcon} style={{ width: "50px", height: "70px" }} />,
                },
                {
                    title: '书籍类型',
                    key: 'bookstype',
                    dataIndex: 'bookstype',
                    render: bookstype => <span style={{ colot: "geekblue" }}>{bookstype}</span>
                },
                {
                    title: '笔者电话',
                    dataIndex: 'tel',
                    key: 'tel',
                },
                {
                    title: '编辑',
                    key: 'action',
                    render: (record) => (
                        <span>
                            <Button type="link"
                                onClick={this.handleShowModal.bind(this, record)}
                            >编辑</Button>
                            <Divider type="vertical" />
                            <Button type="link"
                                onClick={this.handleDel.bind(this, record)}
                            >删除</Button>
                        </span>
                    ),
                },
            ]
        }
    }
    render() {
        let { list, columns, modifyData } = this.state;

        return (
            <Fragment>
                <Form layout="inline">
                    <Form.Item label="价格">
                        <Select defaultValue="全部" onChange={this.handleFree.bind(this)}>
                            <Option value="0">全部</Option>
                            <Option value="1">免费</Option>
                            <Option value="2">付费</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="频道">
                        <Select defaultValue="男频" onChange={this.handleGroup.bind(this)}>
                            <Option value="1">男频</Option>
                            <Option value="2">女频</Option>
                            <Option value="3">出版</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="状态">
                        <Select defaultValue="全部" onChange={this.handleFinish.bind(this)}>
                            <Option value="0">全部</Option>
                            <Option value="1">完结</Option>
                            <Option value="2">连载</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="分类">
                        <Select style={{ width: "100px" }} defaultValue="全部" onChange={this.handleSortId.bind(this)}>
                            <Option value="0">现代都市</Option>
                            <Option value="1">仙侠武侠</Option>
                            <Option value="2">奇幻修真</Option>
                            <Option value="3">科幻游戏</Option>
                            <Option value="4">悬疑推理</Option>
                            <Option value="5">军事战争</Option>
                        </Select>
                    </Form.Item>
                </Form>
                <div>
                    <Table
                        rowKey={record => record.id}
                        columns={columns}
                        dataSource={list}
                        pagination={{
                            showQuickJumper: true,
                            pageSize: 10,
                            total: 100,
                            onChange: this.handlepaginatioChange.bind(this)
                        }}
                    />
                </div>
                <Modal
                    title="修改书籍信息"
                    visible={this.state.visible}
                    footer={null}
                    onCancel={this.handleCancel.bind(this)}
                >
                    <ModifyForm modifyData={modifyData} />
                </Modal>
            </Fragment>
        )
    }
    handleFree(value) {
        let list = JSON.parse(sessionStorage.getItem("bookslist"))
        let copylistFree = []
        let copylistPay = []
        let str = ""
        if (value === "0") {
            this.setState({
                list: list
            })
        };
        if (value === "1") {
            str = "付费"
            for (let i = 0; i < list.length; i++) {
                if (list[i].free === str) {
                    copylistPay.push(list[i])
                }
            }
        } else if (value === "2") {
            str = "免费"
            for (let i = 0; i < list.length; i++) {
                if (list[i].free === str) {
                    copylistFree.push(list[i])
                }
            }
        }
        if (value === "1") {
            this.setState({
                list: copylistPay
            })
        } else if (value === "2") {
            this.setState({
                list: copylistFree
            })
        }

    }
    handleGroup(value) {
        console.log(value)
        let list = JSON.parse(sessionStorage.getItem("bookslist"))
        let copylistFree = []
        let copylistPay = []
        let str = ""
        if (value === "1") {
            this.setState({
                list: list
            })
        };
        if (value === "2") {
            str = "女频"
            for (let i = 0; i < list.length; i++) {
                if (list[i].publish === str) {
                    copylistPay.push(list[i])
                }
            }
        } else if (value === "3") {
            str = "出版"
            for (let i = 0; i < list.length; i++) {
                if (list[i].publish === str) {
                    copylistFree.push(list[i])
                }
            }
        }
        if (value === "2") {
            this.setState({
                list: copylistPay
            })
        } else if (value === "3") {
            this.setState({
                list: copylistFree
            })
        }

    }

    handleSortId(value) {
        let list = JSON.parse(sessionStorage.getItem("bookslist"))
        let copylist0 = []
        let copylist1 = []
        let copylist2 = []
        let copylist3 = []
        let copylist4 = []
        let copylist5 = []
        let str = ""
        if (value === "") {
            this.setState({
                list: list
            })
        };
        if (value === "0") {
            str = "现代都市"
            for (let i = 0; i < list.length; i++) {
                if (list[i].bookstype === str) {
                    copylist0.push(list[i])
                }
            }
        } else if (value === "1") {
            str = "仙侠武侠"
            for (let i = 0; i < list.length; i++) {
                if (list[i].bookstype === str) {
                    copylist1.push(list[i])
                }
            }
        } else if (value === "2") {
            str = "奇幻修真"
            for (let i = 0; i < list.length; i++) {
                if (list[i].bookstype === str) {
                    copylist2.push(list[i])
                }
            }
        } else if (value === "3") {
            str = "科幻游戏"
            for (let i = 0; i < list.length; i++) {
                if (list[i].bookstype === str) {
                    copylist3.push(list[i])
                }
            }
        } else if (value === "4") {
            str = "悬疑推理"
            for (let i = 0; i < list.length; i++) {
                if (list[i].bookstype === str) {
                    copylist4.push(list[i])
                }
            }
        } else if (value === "5") {
            str = "军事战争"
            for (let i = 0; i < list.length; i++) {
                if (list[i].bookstype === str) {
                    copylist5.push(list[i])
                }
            }
        }
        if (value === "0") {
            this.setState({
                list: copylist0
            })
        } else if (value === "1") {
            this.setState({
                list: copylist1
            })
        } else if (value === "2") {
            this.setState({
                list: copylist2
            })
        } else if (value === "3") {
            this.setState({
                list: copylist3
            })
        } else if (value === "4") {
            this.setState({
                list: copylist4
            })
        } else if (value === "5") {
            this.setState({
                list: copylist5
            })
        }
    }
    handleFinish(value) {
        console.log(value)

        let list = JSON.parse(sessionStorage.getItem("bookslist"))
        let copylistFree = []
        let copylistPay = []
        let str = ""
        if (value === "0") {
            this.setState({
                list: list
            })
        };
        if (value === "1") {
            str = "完结"
            for (let i = 0; i < list.length; i++) {
                if (list[i].status === str) {
                    copylistPay.push(list[i])
                }
            }
        } else if (value === "2") {
            str = "连载"
            for (let i = 0; i < list.length; i++) {
                if (list[i].status === str) {
                    copylistFree.push(list[i])
                }
            }
        }
        if (value === "1") {
            this.setState({
                list: copylistPay
            })
        } else if (value === "2") {
            this.setState({
                list: copylistFree
            })
        }
    }

    handlepaginatioChange() {

    }
    handleCancel() {
        this.setState({
            visible: false
        })
    }
    handleShowModal(record) {
        this.setState({
            visible: true,
            modifyData: record
        })
    }
    handleDel(record) {
        console.log(record)
        Modal.info({
            title: "删除",
            content: `您确定要删除《${record.booksName}》吗？`,
            onOk: () => { }
        })
    }
    componentDidMount() {
        this.getList();
    }
    // this.props.handleBooksImg();
    async getList() {
        await axios.get('/mock', { dataType: 'json' }) //这列的'/mock'与mock.js文件里的地址一致
            .then(res => {
                console.log(res.data.data);
                this.setState({
                    list: res.data.data,
                })
                sessionStorage.setItem("bookslist", JSON.stringify(res.data.data))
            })
    }

}
