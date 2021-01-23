import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components';
import { connect } from 'react-redux'
class Detail extends Component {
    componentWillMount() {
        console.log(this.$router)
    }
    componentDidMount() {
        console.log(this.$router)
    }
    render() {
        return (
            <View>
                Detail
            </View>
        )
    }
}

export default Detail