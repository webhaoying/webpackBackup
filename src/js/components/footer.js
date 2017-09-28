/**
 * Created by roboterra_rd on 2017/9/2.
 */
import React from 'react';
// var  footerCss = require ("../../css/footer.css");
import  footerCss from "../../css/footer.css";
export  default class ComponentFooter extends React.Component{

    render(){
       console.log({name:123});
       console.log(footerCss);
        return(

            <footer className = {footerCss.miniFooter}>
                <h1>这里是页脚</h1>
            </footer>
        )
    }
}
