/**
 * Created by roboterra_rd on 2017/9/3.
 */
import React from 'React';
export default class  BodyChild extends React.Component{
    render(){
        return(
            <div>
                <p>子页面输入：<input type="text" onChange={this.props.handleChildValueChange}/></p>
                <p>nihaoa :{this.props.name}</p>
                <p>nihaoa :{this.props.id}</p>
                <p>nihaoa :{this.props.userid}</p>
            </div>
        )
    }
}