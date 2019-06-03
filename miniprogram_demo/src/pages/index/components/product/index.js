import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import './index.css'

export default class Product extends Component {
  constructor() {
    super(...arguments)
  }
  render() {
    const { product } = this.props
    return (
      <View className='product'>
        <View className='product-img'>
          <Image src={product.src} />
        </View>
        <View className='product-title'>{product.title}</View>
        <View className='product-info'>
          <View className='product-price'>
            <Text className='product-rmb'>¥</Text>
            {product.price}
          </View>
          <View className='product-icon'>
            <Image src={product.icon} />
          </View>
        </View>
      </View>
    )
  }
}
