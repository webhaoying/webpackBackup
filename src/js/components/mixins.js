/**
 * Created by roboterra_rd on 2017/9/4.
 */
//  MIxin  独立组件的共用代码
const   Mixinlog ={
    componentDidMount(){
        console.log('Mixinlog componentDidMount')
    },
    componentWillMount(){
        console.log('Mixinlog componentWillMount')
    },
    log(){
        console.log('12312313.....');
    }
};
export default  Mixinlog;