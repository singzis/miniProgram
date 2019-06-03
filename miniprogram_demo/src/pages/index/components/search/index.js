import Taro, { Component } from '@tarojs/taro'
import { View, Icon, Input } from '@tarojs/components'

import './index.css'

export default class Search extends Component {
  constructor() {
    super(...arguments)
  }
  render() {
    const { clickFunc } = this.props
    return (
      <View className='search'>
        <View
          className='search-box'
          onClick={() => {
            clickFunc()
          }}
        >
          <Icon size='15' type='search' className='search-icon' />
          <Input
            type='text'
            className='search-input'
            placeholder='请输入商家名或品类...'
            disabled
          />
        </View>
      </View>
    )
  }
}
