1.class(继承、静态属性、方法、super关键字、装饰器的应用)
babel 转换
babel-cli   @babel/cli 工具
@babel/core babel的核心包 主要是转化代码
--save-dev 开发环境

npx babel
npx babel ES6-Class.js -o ES5.js -w   转换为ES5 -w实时监听

ES6,ES7 -> es5
@babel/preset-es2015 主要转化 es6 已被废弃
@babel/preset-stage-0 未定案的语法 已被废弃
@babel/preset-env (转化已经定案的标准)

npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties

.babelrc   文件
{
  "presets": ["@babel/preset-env"],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties"]
  ]
}
预设(presets)   插件(plugins)

es6模块
export   import   esModule规范
import 特点 1、可以变量提升 在没定义之前可以直接使用
2、不能放在作用域下 只能放在顶层环境

import * as obj from "./a.js"   把所有导出的内容放在obj对象中

export 特点 1、导出的只能是 变量 或者 接口
2、每次拿到的是这个变量对应的值，如果这个值变了，那么结果也会更新

export default 特点 1、默认导出的固定的值


require module.exports   commonJs规范
umd   统一模块
1、模块的导入和导出
2、模块的动态绑定
3、模块导出命名的问题
4、模块的默认导出
5、导入模块并导出
6、动态导入模块