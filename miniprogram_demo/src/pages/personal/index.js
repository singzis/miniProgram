import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Button } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.css'

import avatar from './assets/avatar.png'
import ru from './assets/ru.png'
import it from './assets/it.png'

@connect(
  ({ counter }) => ({
    counter
  }),
  dispatch => ({
    add() {
      dispatch(add())
    },
    dec() {
      dispatch(minus())
    },
    asyncAdd() {
      dispatch(asyncAdd())
    }
  })
)
class Personal extends Component {
  config = {
    navigationBarTitleText: '个人中心'
  }

  constructor() {
    super(...arguments)
    this.state = {
      name: '这是一个真实的昵称',
      tips: '37%',
      login: false,
      info: [
        {
          num: 97,
          title: '我的求购',
          unique: 0
        },
        {
          num: 34,
          title: '关注的店铺',
          unique: 1
        },
        {
          num: 187,
          title: '关注的产品',
          unique: 2
        }
      ],
      row: [
        {
          src: it,
          title: '采购商认证',
          more: '认证后权益更多',
          unique: 0
        },
        {
          src: it,
          title: '意见反馈',
          more: '为了得到更好的服务',
          unique: 1
        },
        {
          src: it,
          title: '关于我们',
          more: 'XXX介绍',
          unique: 2
        }
      ]
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getUserInfo = e => {
    console.log(e)
  }

  render() {
    const { name, tips, info, row, login } = this.state
    return (
      <View className='index'>
        <View className='personal'>
          <View className='avatar'>
            <View className='avatar-box'>
              <AtAvatar circle image={avatar} size='large' />
              {login && (
                <View className='avatar-icon'>
                  <Image src={it} className='avatar-icon-img' />
                  <Image src={ru} className='avatar-icon-img' />
                </View>
              )}
            </View>
          </View>
          {login ? (
            <View>
              <View className='name'>{name}</View>
              <View className='tips'>
                资料完善度<Text style={{ fontWeight: '600' }}>{tips}</Text>
                ，立即完善资料
              </View>
            </View>
          ) : (
            <View className='login'>
              <Button
                openType='getUserInfo'
                onGetUserInfo={this.getUserInfo}
                className='login-button'
                size='mini'
              >
                点击登陆
              </Button>
            </View>
          )}
        </View>
        <View className='info'>
          {info.map(item => {
            return (
              <View className='info-box' key={item.unique}>
                <View className='info-num'>{item.num}</View>
                <View className='info-title'>{item.title}</View>
              </View>
            )
          })}
        </View>
        <View className='other'>
          {row.map(item => {
            return (
              <View className='row' key={item.unique}>
                <View className='row-title'>
                  <Image className='row-icon' src={item.src} />
                  {item.title}
                </View>
                <View className='row-more'>{`${item.more} >`}</View>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}

export default Personal
