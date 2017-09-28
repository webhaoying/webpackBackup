/**
 * Created by roboterra_rd on 2017/8/31.
 */
import React from 'react';
import ReactDom from 'react-dom';
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyindex';
import 'antd/dist/antd.css';
export default class Index extends  React.Component{
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
            <div>
                <ComponentHeader/>
                <BodyIndex userid={123} name={'顶级页面的name（爷爷页面）'}/>
                <div>
                    {/*添加这个属性之后  来添加index路由下的嵌套页面*/}
                    {this.props.children}
                </div>
                <ComponentFooter/>
            </div>

        )
    }
}
// ReactDom.render(
//     <h1>hello world </h1>,
//     document.getElementById('example')
// );
//这里就相当于是一个入口文件，完成入口的顶级js组件与html入口元素的绑定
// ReactDom.render(
//     <Index/>,
//     document.getElementById('example')
// );
