# Dance_Ui Project(跳舞跳起来)

 
 
 ## 常用指令
 * npm install 初次启动时,需要运行npm install 安装所有开发依赖
 * npm run mb mac打包指令
 * npm run build windows 打包指令
 * npm run dev localhost启动,端口8080
 * npm run port localhost指定端口启动
 * npm run hot 热更新
 * npm run ip 指定ip端口启动
 
 ## 版本提交
 只需要提交src文件夹里面的内容,其他的文件夹或文件不需要提交
 
 ## 开发页面流程
 1. 在routes的map下新建路由模块,配置路由对象及tab和auth属性(tab和auth属性选填,tab表示当前路由页面是否在头部tab栏显示,auth表示是否需要登录才能查看)
 2. 如果配置了tab,需要在configs的tabs中进行想关配置,配置说明见tabs.js的注释
 3. 在data的nav.js中将旧的path替换成新建路由的path(此步骤上线后省略,协同后端修改即可)
 4. 根据nav.js中对应path的权限,配置configs中的powers,配置说明见powers.js中的注释
 5. 配置configs的tips.js中对应的页面提示
 6. 新建对应的views services vuex开始开发
 7. mint-ui的Api开发文档地址:http://mint-ui.github.io/#!/zh-cn


###目录结构

<pre>
├── README.md           
├── webpack.config     // 构建服务和webpack配置,项目不同环境的配置
├── dist               // 项目build目录
├── index.tpl          // index.html模版
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // css js和图片资源
│   ├── router         // 路由配置
│   ├── components     // 各种组件
│   ├── util           // 公共方法
│   ├── static         // 静态资源文件
│   ├── services       // ajax 服务配置
│   ├── views          // 各种页面
│   ├── vuex           // vuex状态管理器
│   └── app.js         // Webpack 预编译入口
</pre>