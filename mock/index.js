const Mock=require("mockjs");

let data=Mock.mock({
    "data|10":[
        {
            "id|+1":1,
            "authname":"@cname(3,4)",
            "tel":/^1[3456789]\d{9}$/,
            "booksImg":"@image('100x100','#ff4338','#ccc','tian')"
        }
    ]
})


Mock.mock('http://test/mock.com','post',function(options){
    console.log(options);
    return {"mocktest|4-6":[
        {
            "id|+1":1,
            "authname":"@cname(3,4)",
            "tel":/^1[3456789]\d{9}$/,
            "booksImg":"@image('100x100','#ff4338','#ccc','tian')"
        }
    ]}
})

Mock.mock('http://test/getmock.com','get',function(options){
    console.log(options);
    return {"mocktest|4-6":[
        {
            "id|+1":1,
            "authname":"@cname(3,4)",
            "tel":/^1[3456789]\d{9}$/,
            "booksImg":"@image('100x100','#ff4338','#ccc','tian')"
        }
    ]}
})

export default  Mock;
