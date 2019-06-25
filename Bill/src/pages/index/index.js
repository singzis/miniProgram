import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'

import HeaderTitle from '../../components/headerTitle'

const className='home'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

    config = {
    navigationBarTitleText: '闪电记账'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className={`${className}`}>
        <View className={`${className}-header`}>
          <HeaderTitle title='消费总览' date='2019-06-25' />
        </View>
      </View>
    )
  }
}

export default Index
