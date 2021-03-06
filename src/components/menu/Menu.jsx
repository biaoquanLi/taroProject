import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components';
import { AtDrawer } from 'taro-ui'
import { connect } from 'react-redux'
import { showDrawer, hideDrawer, changeCata } from '../../actions/menu'
import { getTopicList } from '../../actions/topicList'
import { validateUser } from '../../actions/user'
import './menu.less'

@connect(function ({ menu, user }) {
    return { ...menu, user }
}, function (dispatch) {
    return {
        showDrawer() {
            dispatch(showDrawer())
        },
        hideDrawer() {
            dispatch(hideDrawer())
        },
        changeCata(currentCata) {
            dispatch(changeCata(currentCata))
        },
        getTopicList(params) {
            dispatch(getTopicList(params))
        }
    }
})
class Menu extends Component {
    showDrawer() {
        this.props.showDrawer && this.props.showDrawer()
    }
    hideDrawer() {
        this.props.hideDrawer && this.props.hideDrawer()
    }
    onItemClick(index) {
        if (this.props.cataData[index].key !== this.props.currentCata.key) {
            this.props.changeCata && this.props.changeCata(this.props.cataData[index])
            this.props.getTopicList && this.props.getTopicList({ page: 1, limit: 20, tab: this.props.cataData[index].key })
        }

    }
    getMenuList() {
        return this.props.cataData.map(item => item.value)
    }
    gotoUser = () => {
        const { userMessage } = this.props.user
        if (validateUser(userMessage)) {
            Taro.navigateTo({ url: '/pages/user/index' })
        }

    }
    render() {
        const menuList = this.getMenuList()
        const { isShowDrawer, currentCata } = this.props
        // const customStyle = { 'position': 'absolute' }
        return (
            <View className='topiclist-menu' >
                <View style={{ position: 'absolute', height: '100%', background: '#ffffff' }}>
                    <AtDrawer
                        show={isShowDrawer}
                        mask
                        onItemClick={this.onItemClick.bind(this)}
                        onClose={this.hideDrawer.bind(this)}
                        items={menuList}
                        width='50%'
                    ></AtDrawer>
                </View>
                <Image className='image left' onClick={this.showDrawer.bind(this)} src={require('../../assets/img/cata.png')} />
                <Text>{currentCata ? currentCata.value : ''}</Text>
                <Image className='image right' onClick={this.gotoUser} src={require('../../assets/img/login.png')} />
            </View>
        )
    }
}

export default Menu