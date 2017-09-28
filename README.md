# webpackBackup
### english ：
it is  a demo made by myself . It runs with Hot Module Replacement, the local server and the process to create the bundle.js
##### 中文:
这个文件是我用来备份webpack使用的，由于不同的版本组件下会有不同的配置包，所以自己干脆把自己调试成功的一个包，连同node_modules 一起上传，回头只要git clone 到本地，就可以在本地仓库轻松搭建其webpack的开发环境。这个环境包括启动本地服务器、热更新、以及bundle.js的生成。
# the environment 
## branch介绍
  * master分枝是一个实现了热更新，本地服务器以及最简单的显现页面的demo
  * dev分枝包括了：js组件的嵌套复用、css模块的加载、antdesign的尝试使用、router的配置（react-router的2.x版本 这个router的配置和最新的 [react-router 4.x版本](http://618cj.com/react-router4-0%E8%B7%AF%E7%94%B1%E4%B8%AD%E6%96%87%E6%96%87%E6%A1%A3api/)有很大的区别）
  * pro 分枝是一个练手的简单的项目
##### english:
it is created base on :
node version 6.11.2   
npm   version 5.3.0
the version is not exactly necessary.Generaly the Higher version is also
run fluently。
##### 中文 ：
我自己安装这些组件的时候，使用的是node 6.11.2的版本，npm  是5.3.0的版本，别的版本下安装自己没有过多尝试，但大体上后边的高版本自己尝试了几个，是能够兼容的。
# the usage
##### english:
 firstly cd into de dir where  you git clone the repo.Then run 'webpack' in an  terminal tab and run 'webpack-dev-server' in another terminal tab.You can also 'npm run dev ' ,it is a Combination of 'webpack' and 'webpack-dev-server'
##### 中文
首先，就像克隆所有项目一样，将其克隆到自己电脑的本地仓库，然后在命令行窗口运行'webpack' ,然后在另外一个命令行窗口运行'webpack-dev-server'确保两个命令是同时都在运行着，在开发的时候，只要这两个terminal（macbook中）窗口一直是运行的，那么webpack的热更新还有本地服务器，生成bundle.js，还有ES6 转换ES5，react的JSX语法转化成纯js，都是完美实现了的。
我已经自行配置了package.json中的scripts对象，并且在里边定义了一个dev的命令，因此在cli中运行如下代码就可以完成webpack 以及webpack-dev-server的效果   
````
npm run dev
````
