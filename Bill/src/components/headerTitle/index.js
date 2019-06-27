import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import PropTypes from 'prop-types';

import './index.less'

const className = 'ht'
class UpdateBill extends Component {
  constructor() {
    super(...arguments)
  }
  render() {
    const { icon, title, date } = this.props
    return (
      <View className={`${className}`}>
        <View className={`${className}-text`}>
          <View className={`${className}-line`}></View>
          <View className={`${className}-title`}>
            {title}
          </View>
          <View className={`${className}-date`}>
            {date}
          </View>
        </View>
        {
          icon
          &&
          <View className={`${className}-icon`}>
            <Image src='https://singz72.com/images/Bill/date.png' alt='icon' />
          </View>
        }
      </View>
    )
  }
}

UpdateBill.propTypes = {
  icon:PropTypes.string,
  title:PropTypes.string,
  date:PropTypes.string
}

export default UpdateBill
