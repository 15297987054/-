
var Mock = require('mockjs')
var data = Mock.mock("/mock",{  
  //"/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
  "data|100":[
    {
        "id|+1":1,
        "authorName":"@cname(3,4)",
        "tel":/^1[3456789]\d{9}$/,
        "bookstype|1":["现代都市","仙侠武侠","奇幻修真","科幻游戏","悬疑推理","军事战争"],
        "authorIcon":"@image('100x100','#ff4338','#ccc','tian')",
        "booksIcon":"@image('100x150','yellow','#ccc','Hello World')",
        "booksName":"@ctitle(4,8)",
        "status|1":["完结","连载"],
        "publish|1":["男频","女频","出版"],
        "free|1":["免费","付费"]
    }
]
})

let data_del=Mock.mock("/mock",'delete',function(options){
    var id = parseInt(options.body.split("=")[1])//获取删除的id
    var index;
    for(var i in data){
        if(data[i].id===id){//在数组arr里找到这个id
            index=i
            break;
        }
    }
    data.splice(index,1)//把这个id对应的对象从数组里删除
    return data;//返回这个数组,也就是返回处理后的假数据
})

export default {data,data_del}