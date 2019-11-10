const { override, fixBabelImports, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
const path = require("path")
module.exports = override(
    //按需加载
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    //配置别名
    addWebpackAlias({
        "@": path.join(__dirname, "./src"),
        "@components": path.join(__dirname, "./src/components"),
        "@api": path.join(__dirname, "./src/api"),
        "@actions": path.join(__dirname, "./src/actions"),
        "@common": path.join(__dirname, "./src/common"),
        "@lib": path.join(__dirname, "./src/lib"),
        "@pages": path.join(__dirname, "./src/pages"),
        "@router": path.join(__dirname, "./src/router"),
        "@store": path.join(__dirname, "./src/store"),
        "@utils": path.join(__dirname, "./src/utils"),
        "@layout":path.join(__dirname, "./src/layout"),
    }),
    //配置装饰器
    addDecoratorsLegacy()
);
