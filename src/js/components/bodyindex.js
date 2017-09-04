/**
 * Created by roboterra_rd on 2017/9/2.
 */
import React from 'react';
import ReactDom from 'react-dom';
import BodyChild from './bodychild';
export  default class BodyIndex extends React.Component{

    // componentWillMount(){
    // //    定义你的逻辑
    //     console.log('BodyIndex-componentWillMount')
    // }
    // componentDidMount(){
    //     //    定义你的逻辑
    //     console.log('BodyIndex-componentDidMount')
    // }


    constructor(){
        super();//调用基类的所有初始化方法
        this.state = {
            username1: 'parry',
            age:20

        };//初始化赋值
        // console.log(this);

    }
    changeUserInfo(age){
        // console.log(this);
        this.setState({
            age:age
        });
    }
    handleChildValueChange(event){
        // console.log(this);
        this.setState({
            age:event.target.value
        });
    }



    render(){

        // setTimeout(()=>{
        //     this.setState(
        //         {username1 :'jack',
        //         age:30s
        //         }
        //     )
        // },2000)

        var userName = 'Parry';
        var boolInput = false;
        var html = 'IMOOC\u0020\u0020LESSON';//实现空格转码
        var html1 = 'IMOOC&nbspLESSON';//实现空格转码

        return(
            <div>
                <h2>这里是主体部分</h2>
                {/*传递所有参数的方法*/}
                <BodyChild {...this.props} id={4} handleChildValueChange = {this.handleChildValueChange.bind(this)}/>
                <p>
                    {this.state.username1}
                    <span>age:{this.state.age}</span>
                    {/*props 属于外来属性*/}
                    <span>userid: {this.props.userid}
                        </span>
                    <span>name :{this.props.name}</span>


                </p>
                <input type="button"  value='改变状态' onClick={this.changeUserInfo.bind(this,99)}/>
                <p>
                    {userName == '' ?'用户还没有登录':'用户名:'+userName}
                </p>
                <p>
                    <input disabled={boolInput} type="button" value='正常按钮'/>
                </p>
                {/*渲染转义字符的html的两种方式*/}
                {/*需要unicode转义*/}
                <p>{html}</p>
                {/*不需要转义*/}
                <p dangerouslySetInnerHTML ={{__html : html1 }} >

                </p>

            </div>
        )
    }
}
const defaultProps ={
    name:'默认值'
}
//接口间的健壮性要求
BodyIndex.propTypes={
    //限制类型  并且isRequired  表示是必须的
    userid:React.PropTypes.number.isRequired
}
BodyIndex.defaultProps =defaultProps;