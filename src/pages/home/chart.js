import React, { Component } from 'react';
 
 // 引入 ECharts 主模块
  import echarts from 'echarts/lib/echarts';
  // 引入环形图
  import 'echarts/lib/chart/pie';
  // 引入提示框和标题组件
  import 'echarts/lib/component/tooltip';
  import 'echarts/lib/component/title';
 import 'echarts/lib/component/visualMap';

 export default class IndexPieData extends Component {
   initCharts = () => {
     const data = this.props.data;
     var piedata = data.map((item, index) => {
      return {
         value: item.y,   //value和name是echarts规定的，呜呜呜
         name: item.x,
      };
     });
     // 基于准备好的dom，初始化echarts实例
     var myChart = echarts.init(document.getElementById('main'));
     // 绘制图表
     myChart.setOption({
       tooltip: {
         trigger: 'item',
         // formatter: "{a} <br/>{b}: {c} ({d}%)"
         formatter: '{b}:   {d}%',
       },       
       series: [
         {
           name: '设备占比数量',
           type: 'pie',
           radius: ['0%', '0%'],
          label: {
             formatter: '{b}:{d}%',
             textStyle: {
             color: '#000000',
               fontSize: 1,
             },
           },
           data: piedata,
         },
        ]
     });
  };

   componentDidMount() {
     this.initCharts();
   }
   componentDidUpdate() {  //当图表切换的时候，重新执行
     this.initCharts();
   }
   render() {
     return <div id="main" style={{ width: '100%', height: 311 }} />;
   }
 }