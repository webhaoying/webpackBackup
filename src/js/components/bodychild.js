/**
 * Created by roboterra_rd on 2017/9/3.
 */
import React from 'react';
export default class  BodyChild extends React.Component{
    render(){
        return(
            <div>
                <p>子页面输入：<input type="text" onChange={this.props.handleChildValueChange}/></p>
                <p>孙子页面 拿到爷爷页面的属性 :{this.props.name}</p>
                <p>孙子页面 拿到爷爷页面的属性 :{this.props.id}</p>
                <p>孙子页面 拿到爷爷页面的属性:{this.props.userid}</p>
            </div>
        )
    }
}