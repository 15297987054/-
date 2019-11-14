
var Mock = require('mockjs')
var data = Mock.mock("/mock", {
    //"/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
    "data|5": [
        {

            "piclist|5": [
                {
                    "authorIcon|1": ["@image('100x100','green','#ccc','H')",
                        "@image('100x100','yellow','#ccc','I')",
                        "@image('100x100','tomato','#ff4338','J')",
                        "@image('100x100','blue','#ccc','K')",
                        "@image('100x100','#ff4338','#ccc','L')",
                        "@image('100x100','#ff4338','#ccc','M')",
                        "@image('100x100','#ff4338','#ccc','N')"],
                }
            ],
            "goodsName": "@ctitle(10,24)",
            "id|+1": 1000,
            "price|+100": 455,
            // "tel": /^1[3456789]\d{9}$/,
            // "bookstype|1": ["现代都市", "仙侠武侠", "奇幻修真", "科幻游戏", "悬疑推理", "军事战争"],
            // "authorIcon|1": ["@image('100x100','#ff4338','#ccc','红')",
            //     "@image('100x100','#ff4338','#ccc','橙')",
            //     "@image('100x100','#ff4338','#ccc','黄')",
            //     "@image('100x100','#ff4338','#ccc','绿')",
            //     "@image('100x100','#ff4338','#ccc','青')",
            //     "@image('100x100','#ff4338','#ccc','蓝')",
            //     "@image('100x100','#ff4338','#ccc','紫')"],
            // "booksIcon": "@image('100x150','yellow','#ccc','Hello World')",
            // "booksName": "@ctitle(4,8)",
            // "status|1": ["完结", "连载"],
            // "publish|1": ["男频", "女频", "出版"],
            // "free|1": ["免费", "付费"]
            "sku|4":[
               {
                "id|+1":1,
                "spec":[
                    {
                        "specValue|1":["黑色","红色","橙色","黄色","绿色","青色","蓝色","紫色"],
                        "specName":"颜色",
                        "goodPic|1": ["@image('100x100','green','#ccc','H')",
                        "@image('100x100','yellow','#ccc','I')",
                        "@image('100x100','tomato','#ff4338','J')",
                        "@image('100x100','blue','#ccc','K')",
                        "@image('100x100','#ff4338','#ccc','L')",
                        "@image('100x100','#ff4338','#ccc','M')",
                        "@image('100x100','#ff4338','#ccc','N')"],
                    },
                    {
                        "specValue|1":["X","XL","L","M","XXL"],
                        "specName":"尺码"
                    }
                ]
               }

            ]
        }
    ]
})

// "sku": [
    
//           { "id": 1,
//            "spec": [
//                { "specValue": "黑色", "specName": "颜色" },
//                 { "specValue": "L", "specName": "尺码" }
//             ] 
//         },
//           { "id": 2, 
//           "spec": [
//               { "specValue": "黑色", "specName": "颜色" }, 
//               { "specValue": "M", "specName": "尺码" }
//             ]
//          },
//           { "id": 3, 
//           "spec": [
//               { "specValue": "黑色", "specName": "颜色" },
//                { "specValue": "XL", "specName": "尺码" }
//             ] 
//         },
//           { "id": 4, 
//           "spec": [
//               { "specValue": "粉色", "specName": "颜色" },
//                { "specValue": "M", "specName": "尺码" }
//             ] 
//         }
// ]

let data_del = Mock.mock("/mock", 'delete', function (options) {
    var id = parseInt(options.body.split("=")[1])//获取删除的id
    var index;
    for (var i in data) {
        if (data[i].id === id) {//在数组arr里找到这个id
            index = i
            break;
        }
    }
    data.splice(index, 1)//把这个id对应的对象从数组里删除
    return data;//返回这个数组,也就是返回处理后的假数据
})

export default { data, data_del }