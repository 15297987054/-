import React from 'react'
import mock from '../../mock'
import { Carousel, WingBlank, Drawer, List, NavBar, Icon } from 'antd-mobile';
import axios from 'axios'
import "./style.css"
import { BrowserRouter as Router, Link } from 'react-router-dom';
export default class Detail extends React.Component {
  state = {
    data: ['1', '2', '3', '4', '5'],
    price: "",
    open: false,
  }
  componentDidMount() {
    this.getData()
  }
  onOpenChange = (...args) => {

    this.setState({ open: !this.state.open });
  }
  render() {
    let { price } = this.state;
    if (price == "") { price = 455 }
    const sidebar = (<List>
      {[0, 1, 2, 3].map((i, index) => {
        if (index === 0) {
          return (<List.Item key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            multipleLine
          >Category</List.Item>);
        }
        return (<List.Item key={index}
          thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        >Category{index}</List.Item>);
      })}
    </List>);

    return (
      <div className="box">
        <WingBlank>
          <Carousel
            autoplay={true}
            infinite
          >
            {this.state.data.map(val => (
              <a
                key={val}
              >
                <img
                  src={val.authorIcon}
                  alt=""
                  style={{ width: '100%', height: "299.992px" }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
        <div onClick={this.handle.bind(this)} className="content">
          <span  className="price">
            ￥{price}
            <span style={{ fontSize: "19px", marginLeft: "10px", color: "black" }}>选择颜色、尺寸</span>
          </span>
          <div className="detail" style={{ fontSize: "29px" }}><div>></div></div>
        </div>

       
      <Drawer
        className="my-drawer"
        style={{ minHeight: "3.9rem",display: this.state.open ? "block":"none" }}
        position="bottom"
        contentStyle={{ color: '#A6A6A6', textAlign: 'center'}}
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
      </Drawer>
      </div>
    )
  }
  async getData() {
    await axios.get("/mock", { dataType: 'json' }).then(res => {
      console.log(res)
      this.setState({
        data: res.data.data[0].piclist,
        price: res.data.data[0].price
      });
    })
  }
  handle() {
    // this.props.history.push("/size")
    console.log(111)
    this.onOpenChange();
  }
}