const proxy=require("http-proxy-middleware");

module.exports=(app)=>{
    app.use(proxy("/api",{
        target:"http://m.shihuo.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    })),
    app.use(proxy("/user",{
        target:"https://elm.cangdu.org",
        changeOrigin:true,
        pathRewrite:{
            "^/user":""
        }
    }))
}