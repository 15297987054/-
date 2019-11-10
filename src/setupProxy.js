const proxy = require("http-proxy-middleware");

module.exports = (app)=>{

 

    app.use(proxy("/api",{
        target:"https://elm.cangdu.org",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))

    app.use(proxy("/books",{
        target:"http://test/mock.com",
        changeOrigin:true,
        pathRewrite:{
            "^/books":""
        }
    }))

    app.use(proxy("/user",{
        target:"http://10.60.13.121:3000",
        changeOrigin:true,
        pathRewrite:{
            "^/user":""
        }
    }))

    

}