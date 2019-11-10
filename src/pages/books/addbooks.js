import React from "react";
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import { Form, Input, Button } from 'antd'
class Addbooks extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "",
            content: ""
        }
    }
    componentDidMount() {
        // 异步设置编辑器内容
        setTimeout(() => {
            this.props.form.setFieldsValue({
                content: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>')
            })
        }, 1000)
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.form.validateFields((error, values) => {
            if (!error) {
                const submitData = {
                    title: values.title,
                    content: values.content.toRAW() // or values.content.toHTML()
                }
                console.log(this.props)
                if (submitData) {
                    this.props.history.push({ pathname: "/books/booksArticle", query: { data: submitData } })
                }
                console.log(submitData)

            }
        })
    }
    render() {
        console.log(this.props.location.query.data.arr)
        const { getFieldDecorator } = this.props.form
        const controls = ['bold', 'italic', 'underline', 'text-color', 'separator', 'link', 'separator', 'media', 'emojis']
        let { title, content } = this.state;
        title = this.props.location.query.data.title
        content = this.props.location.query.data.arr
        return (
            <div className="demo-container">
                <Form style={{ width: "100%" }} onSubmit={this.handleSubmit}>
                    <Form.Item style={{ display: "flex" }} label="文章标题">
                        {getFieldDecorator('title', {
                            initialValue: title,
                            rules: [{
                                required: true,
                                message: '请输入标题',
                            }],
                        })(
                            <Input size="large" placeholder="请输入标题" />
                        )}
                    </Form.Item>
                    <Form.Item style={{ display: "flex", width: "100%" }} label="文章正文">
                        {getFieldDecorator('content', {
                            initialValue: 111,
                            validateTrigger: 'onBlur',
                            rules: [{
                                required: true,
                                validator: (_, value, callback) => {
                                    if (value.isEmpty()) {
                                        callback('请输入正文内容')
                                    } else {
                                        callback()
                                    }
                                }
                            }],
                        })(
                            <BraftEditor
                                stripPastedStyles={true}
                                style={{ border: "1px #ccc solid", width: "900px" }}
                                className="my-editor"
                                placeholder="请输入正文内容"
                                onSave={this.submitContent}
                            />
                        )}
                    </Form.Item>
                    <Form.Item style={{ marginLeft: "80px" }} >
                        <Button size="large" type="primary" htmlType="submit">提交</Button>
                    </Form.Item>
                </Form>
            </div>
        )

    }

}
export default Form.create()(Addbooks)