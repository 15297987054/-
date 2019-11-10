import React, { Component } from 'react'
import { SwiperContainer } from './styled'
class AdsSwiper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //图片的个数
            len: 0,
            //当前的下标
            swiperIndex: 0,
            //swiper-content的总宽度
            countWidth: 0,
            //指示点的下标
            sIndex: 0,
            //无缝轮播的盒子
            newSwiperItems: [],
            activeIndex: 0
        }
        this.state.len = this.props.swiperItems.length;
        this.state.newSwiperItems = [...this.props.swiperItems, this.props.swiperItems[0]];
    }
    render() {
        let { newSwiperItems, countWidth, activeIndex } = this.state
        return (
            <SwiperContainer ref="swiperContainer">
                <div className="swiper-content" ref="swiperContent" style={{ width: countWidth }}>
                    {
                        newSwiperItems.map((item, index) => (
                            <div key={index}>
                               {item}
                            </div>
                        ))
                    }
                </div>
                <div className="swiper-spot">
                    {
                        this.props.swiperItems.map((item, index) => (
                            <div key={index} className={activeIndex == index ? 'active' : ""}></div>
                        ))
                    }
                </div>
            </SwiperContainer>
        )
    }
    componentDidMount() {
        this.handleInit();
        this.handleTouchInit();
        this.handleTouchMove();
        this.handleTouchEnd();

    }
    
    //初始化操作
    handleInit() {
        //一个图片的宽度
        this.swiperIw = this.refs.swiperContainer.offsetWidth;
        //swiperContent的宽度
        let width = this.swiperIw * this.state.newSwiperItems.length;

        this.setState({
            countWidth: width
        }, () => {
            this.autoplay();
        })
    }
    //轮播
    autoplay() {
        this.timer = setInterval(() => {
            if (this.state.swiperIndex == this.state.len) {
                this.setState({
                    swiperIndex: 1
                })
                this.refs.swiperContent.style.transition = "none";
                this.refs.swiperContent.style.left = 0;
            } else {
                this.setState({
                    swiperIndex: ++this.state.swiperIndex
                })
            }
            //为了能够让left归0
         this.timer1 = setTimeout(() => {
                this.toImg();
            }, 0)
        }, 2500)
    }
    //轮播的原理
    toImg() {
        this.refs.swiperContent.style.transition = 'left 0.2s ease-in-out';
        this.refs.swiperContent.style.left = -(this.state.swiperIndex * this.swiperIw) + 'px';


        this.setState({
            activeIndex: this.state.swiperIndex == this.state.len ? 0 : this.state.swiperIndex
        })
    }
    handleTouchInit() {
        this.refs.swiperContent.addEventListener("touchstart", (e) => {
            clearInterval(this.timer);
            this.disX = e.targetTouches[0].clientX;
        })
    }
    handleTouchMove() {
        this.refs.swiperContent.addEventListener("touchmove", (e) => {
            e.preventDefault();

            //手指移动的实时坐标
            this.moveX = e.targetTouches[0].clientX;
            //初始值与实时坐标的差值
            this.distanceX = this.moveX - this.disX;

            this.refs.swiperContent.style.transition = "none";


            if (this.distanceX > 0 && this.state.swiperIndex == 0) {
                this.refs.swiperContent.style.left = -(this.swiperIw * this.state.len) + this.distanceX + 'px';
            } else if (this.distanceX < 0 && this.state.swiperIndex == this.state.len) {
                this.refs.swiperContent.style.left = this.distanceX + 'px';
            } else {
                this.refs.swiperContent.style.left = -(this.state.swiperIndex * this.swiperIw) + this.distanceX + 'px';
            }
        })
    }
    handleTouchEnd(){
        this.refs.swiperContent.addEventListener("touchend", (e) => {
            if(Math.abs(this.distanceX) > this.swiperIw/5){

                if(this.distanceX>0){
                    if(this.state.swiperIndex == 0){
                        this.setState({
                            swiperIndex:this.state.len-1
                        })

                        this.refs.swiperContent.style.left = -(this.state.len * this.swiperIw)+'px';
                    }else{
                        this.setState({
                            swiperIndex:--this.state.swiperIndex
                        })
                    }

                    this.toImg();
                }else{
                 
                    if(this.state.swiperIndex == this.state.len){
                        this.setState({
                            swiperIndex:1
                        })
                       
                        this.refs.swiperContent.style.transition="none";
                        this.refs.swiperContent.style.left = 0;
                    }else{
                        this.setState({
                            swiperIndex:++this.state.swiperIndex
                        })

                        
                    }
                    this.toImg();
                }

            }else{
                if(this.state.swiperIndex == 0){
                    this.refs.swiperContent.style.left = 0;
                }else if(this.state.swiperIndex == this.state.len){
                    this.refs.swiperContent.style.left = -(this.swiperIw * this.state.len)+'px';
                }else{
                    this.refs.swiperContent.style.left = -(this.state.swiperIndex * this.swiperIw)+'px';
                }
            }

            this.autoplay();
        })
    }
    componentWillUnmount(){
        clearTimeout(this.timer);
        clearTimeout(this.timer1);
        
    }
}

AdsSwiper.defaultProps = {
    swiperItems: []
}

export default AdsSwiper;