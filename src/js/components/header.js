/**
 * Created by roboterra_rd on 2017/9/2.
 */
import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router';
export  default class ComponentHeader extends React.Component{
    constructor(){
      super();
      this.state={
          miniHeader:false
      }
    };
    SwitchHeader(){
        this.setState({
            miniHeader:!this.state.miniHeader
        });
    }
    render(){
        //定义样式 然后调用  这个要在render() 方法中，在render函数之中，并且在return之前
        const styleCom = {
            //这样内联方式的引用的样式  不能写hover和动画  要不就驼峰 要不就用- 但是要加引号
            header:{
                backgroundColor:this.state.miniHeader ?"#333":'#f00',
                color:"fff",

                //css文件里边可以使用表达式来进行选择运算
                paddingTop:this.state.miniHeader?  "3px":'15px',
                paddingBottom:this.state.miniHeader ? "3px":'15px'

            }
        };
        return(
            //这样的方式，是在行内直接给元素添加样式
            <header style={styleCom.header} className="smallFontSize" onClick={this.SwitchHeader.bind(this)}>
                <h1>这里是头部</h1>
                <ul>
                    {/*  Link 代替a标签完成页面跳转   */}
                    <li><Link to={'/'}>首页</Link></li>
                    <li><Link to={'/details'}>嵌套的详情页面</Link></li>
                    <li><Link to={'/list/传过去的id'}>列表页面</Link></li>
                </ul>
            </header>
        )
    }
}
