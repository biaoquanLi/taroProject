import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button,Image } from '@tarojs/components';
import { connect } from 'react-redux'
import './Panel.less'
// import {myTimeToLocal} from  '../../utils/date';

class Panel extends Component {
    toDetail(item){
        Taro.navigateTo({url:'/pages/detail/index?id='+item.id})
    }
    render() {
        const {title,listData} = this.props
        return (<View  className='topic-panel'>
        <View className='topic-panel-title'>{title}</View>
        {listData.map((item)=>{
            return  (<View onClick={this.toDetail.bind(this,item)} className='topic-panel-list' key={item.id}>
             <Image className='topic-panel-list-img' src={item.author.avatar_url} />
             <Text className='topic-panel-list-title'>{item.title}</Text>
             <Text className='topic-panel-list-date'>{item.last_reply_at?item.last_reply_at.substr(0,19).replace('T',' '):''}</Text>
             </View>)
          })
        }
      </View>)
    }
}

export default Panel