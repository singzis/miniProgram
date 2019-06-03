import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.css'

export default class Indicator extends Component {
  constructor() {
    super(...arguments)
  }
  render() {
    return (
      <View className='indicator'>
        <View className='indicator-gary indicator-gary1' />
        <View className='indicator-gary indicator-gary2' />
        <View className='indicator-move' />
      </View>
    )
  }
}
