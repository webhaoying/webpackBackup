/**
 * Created by roboterra_rd on 2017/8/31.
 */
import React from 'react';
import ReactDom from 'react-dom';
import Index from './index';
import {Router,Route,hashHistory} from 'react-router';
//4.x版本要使用
// import {
//     HashRouter,
//     Route,
//     Link
// } from 'react-router-dom';
import ComponentList  from './components/list';
import ComponentDetails  from './components/details';

class Root extends  React.Component{
    // componentWillMount(){
    //     //    定义你的逻辑
    //     console.log('Index-componentWillMount')
    // }
    // componentDidMount(){
    //     //    定义你的逻辑
    //     console.log('Index-componentDidMount')
    // }
    render(){
        return(
            //这里替换之前的index  变成程序入口
            //这里是2.x版本的router 使用  4.x版本的router 使用与此有很大不同


            <Router history={hashHistory}>
                    <Route exact component = { Index } path="/">
                        <Route component={ ComponentDetails}  path="details"></Route>
                    </Route>
                    {/*这里的list  前边是否加上／  都可以  传值的话 后边添加/:id*/}
                    <Route component={ ComponentList}  path="/list/:id"></Route>
            </Router>
        );
    };
}
// ReactDom.render(
//     <h1>hello world </h1>,
//     document.getElementById('example')
// );
//这里就相当于是一个入口文件，完成入口的顶级js组件与html入口元素的绑定
ReactDom.render(
    <Root/>,
    document.getElementById('example')
);
