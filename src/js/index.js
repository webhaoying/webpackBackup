/**
 * Created by roboterra_rd on 2017/8/31.
 */
import React from 'react';
import ReactDom from 'react-dom';
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyindex';
class Index extends  React.Component{
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
                <BodyIndex userid={123} name={'zhanghao'}/>
                <ComponentFooter/>
            </div>

        )
    }
}
// ReactDom.render(
//     <h1>hello world </h1>,
//     document.getElementById('example')
// );
ReactDom.render(
    <Index/>,
    document.getElementById('example')
);
