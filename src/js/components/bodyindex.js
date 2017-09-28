/**
 * Created by roboterra_rd on 2017/9/2.
 */
import React from 'react';
import ReactDom from 'react-dom';
import BodyChild from './bodychild';
import Mixinlog  from './mixins';
import ReactMixin from 'react-mixin';
import { Switch } from 'antd';
export  default class BodyIndex extends React.Component{

    // componentWillMount(){
    // //    定义你的逻辑 这个是首次render的时候会自动触发  如果是props或者state的改变触发的更新的话
    //  会触发的是 componentWillUpdate
    //     console.log('BodyIndex-componentWillMount')
    // }
    // componentDidMount(){
    //     //    定义你的逻辑
    //     console.log('BodyIndex-componentDidMount')
    // }


    constructor(){
        super();//调用基类的所有初始化方法 也就是拿到父元素的所有的属性
        this.state = {
            username1: 'parry',
            age:20

        };//初始化赋值
        // console.log(this);

    }
    // ant design的使用
    buttonSwitch(checked) {
        console.log(`switch to ${checked}`);
    };
    changeUserInfo(age){
        // console.log(this);
        this.setState({
            age:age
        });
        //第一种 在标签添加id='SubmitButton'
        // var mySubmitButton = document.getElementById('SubmitButton');
        // ReactDom.findDOMNode(mySubmitButton).style.color='red';

        //    第二种 在标签中添加refs属性
        // refs  是访问到组件内部dom节点的唯一可靠方式
        //   refs会自动销毁对子组件的引用
        //不要在render或者render（）之前对refs进行调用
        //不要滥用refs
        this.refs.SubmitButton.style.color='red';
        Mixinlog.log();
    }
    //父子之间传值的技巧
    handleChildValueChange(event){
        // console.log(this);
        this.setState({
            age:event.target.value
        });
    }



    render(){
        //这里是改变状态
        // setTimeout(()=>{
        //     this.setState(
        //         {username1 :'jack',
        //         age:30
        //         }
        //     )
        // },2000)

        var userName = '';
        var boolInput = false;
        var html = 'IMOOC\u0020\u0020LESSON';//实现空格转码
        var html1 = 'IMOOC&nbspLESSON';//实现空格转码
        //return 里边的顶级div内部的部分才会默认是jsx语法的应用范围 所以里边的注释为{/**/}
        return(
            //
            <div>

                <h2>这里是主体部分</h2>
                <Switch defaultChecked={false} onChange={this.buttonSwitch.bind(this)} />
                {/*接收到父组件中所有的属性全部拿到 并且拿到的属性，
                在该组件的子组件中照样能够拿到*/}
                <BodyChild {...this.props} id={4} handleChildValueChange = {this.handleChildValueChange.bind(this)}/>
                <p>
                    {this.state.username1}的
                    <span>父组件中的age:{this.state.age}</span><br/>
                    {/*props 属于外来属性*/}
                    <span>userid: {this.props.userid}
                        </span><br/>
                    <span>name :{this.props.name}</span><br/>


                </p>
                <input type="button"  ref="SubmitButton" id="SubmitButton" value='改变状态' onClick={this.changeUserInfo.bind(this,99)}/>
                <p>
                    {/*三目运算的引入*/}
                    userName：{userName == '' ?'用户还没有登录':'用户名:'+userName}
                </p>
                <p>
                    {/*将变量的概念引入*/}
                    <input disabled={boolInput} type="button" value='默认按钮'/>
                </p>
                {/*渲染转义字符的html的两种方式*/}
                {/*需要unicode转义*/}
                <p>{html}</p>
                {/*不需要转义 但是也不推荐这样的写法*/}
                <p dangerouslySetInnerHTML ={{__html : html1 }} >

                </p>

            </div>
        )
    }
}
// 这个是定义如果不传值的时候，会采取默认值
const defaultProps ={
    name:'默认值'
}
BodyIndex.defaultProps =defaultProps;
//接口间的健壮性要求
BodyIndex.propTypes={
    //限制类型  并且isRequired  表示是必须的 定义这个组件下边的userid属性必须传进来number类型的数值 并且isRequired 要求不能为空
    userid:React.PropTypes.number.isRequired
}


ReactMixin(BodyIndex.prototype,Mixinlog);