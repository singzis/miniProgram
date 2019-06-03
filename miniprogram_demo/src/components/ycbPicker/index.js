import Taro, { Component } from '@tarojs/taro'
import { AtInput } from 'taro-ui'
import { View, Picker } from '@tarojs/components'

import './index.css'

export default class YcbPicker extends Component {
  render() {
    const {
      onChange,
      value,
      name,
      title,
      placeholder,
      range,
      mode
    } = this.props
    return (
      <View className='picker-input'>
        <AtInput
          name={name}
          title={title}
          placeholder={placeholder}
          type='text'
          value={value}
          disabled
        />
        <View className='picker'>
          <Picker
            mode={mode}
            range={range}
            onChange={onChange}
            style={{ height: '100%' }}
          >
            <View className='pickValue' />
          </Picker>
        </View>
      </View>
    )
  }
}
