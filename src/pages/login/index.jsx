import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Input, Button } from '@tarojs/components';
import { connect } from 'react-redux'
import Head from '../../components/Head/Head'
import './index.less'
import {accesstokenCheck} from '../../actions/user'

@connect(function({user}){
    return {...user}
},function(dispatch){
    return {
        accesstokenCheck(params){
          return  dispatch(accesstokenCheck(params))
        }
    }
})

class Login extends Component {
    state = {
        accesstoken: ''
    }
    inputAccesstoken=(e)=>{
        this.setState({ accesstoken: e.detail.value})
    }
    login=()=>{
        const {accesstoken} = this.state
        if(accesstoken.trim()){
            this.props.accesstokenCheck({accesstoken}).then(res=>{
                if(res.success){
                    Taro.redirectTo({url:'/pages/user/index'})
                }
            })
        }else{
            Taro.showToast({title:'accesstoken不能为空',icon:'none'})
        }
    }
    render() {
        return (
            <View className='login-body'>
             <Head />
             <View className='form'>
             <Input   className='access_input' onInput={this.inputAccesstoken}  placeholder='请输入accesstoken' />
             <Button  className='btn_login' onClick={this.login}>登录</Button>
             </View>
             </View>
        )
    }
}

export default Login