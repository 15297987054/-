# 邦德产品中心

# Features

- 本项目fork自ant design vue pro，有兴趣直接[传送](https://pro.loacg.com/)
- 独有的字典用法
- 独有的自定义默认排序
- 监控类外链不宜对外暴露，可以设置白名单
- 运行项目需要启动后端 `bond-cloud`




## How to Run

- 拉取项目代码，进入目录
```bash
cd bond-product-web
```

- 切换vue.config.js中devServer:proxy:http://gateway.com:9527，也可以换成你自己的网关

- 安装依赖
```
yarn install
```

- 开发模式运行
```
yarn run serve
```

- 编译项目
```
yarn run build
```

- Lints and fixes files
```
yarn run lint
```

# How to develop

- **添加菜单**

菜单管理添加菜单,并且让用户获取到菜单，如 `userList` 做 `menu_key`。

- **新增 vue 文件**

在 `src/views` 下新建页面的 `vue` 文件，如果相关页面有多个，可以新建一个文件夹来放置相关文件。

- **将文件加入菜单和路由**

后端添加好菜单并确保能获取到你新加的路由，在 `src\utils\routerUtil.js` 中动态引入页面组件,如:

```javascript
userList: () => import('@/views/system/UserList')
```

加好后，访问 http://localhost:8000/system/userList 就可以看到新增的页面了。

`system` 是上级模块名称 `userList` 是当前模块名称，也就是数据库中的 `menu_key` (唯一)，根据 `children` 关系获得。

- **新增 model （非必须）**

布局及路由都配置好之后，回到之前新建的 `newPage.vue`，可以开始写业务代码了！如果需要用到 `vuex` 中的数据流，还需要在 `src/store/model` 中建立相应的 `model`。

- **业务接口**

在已有微服务中添加接口或新建一个微服务(gateway中配置好映射)，添加完成可以用 `postman` (推荐)测试接口是否正常，在 `src/api` 中添加对应请求方法,参考 `system.js` ,在 `vue` 文件中导入。