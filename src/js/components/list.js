/**
 * Created by roboterra_rd on 2017/9/2.
 */
import React from 'react';
export  default class ComponentList extends React.Component{
    render(){
        return(
            <div>
                <h2>这里是列表页面 ID:{this.props.params.id}</h2>
            </div>
        )
    };
}
