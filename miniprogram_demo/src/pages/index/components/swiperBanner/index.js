import Taro, { Component } from '@tarojs/taro'
import { Swiper, Image, SwiperItem } from '@tarojs/components'

import './index.css'

export default class SwiperBanner extends Component {
  constructor() {
    super(...arguments)
  }
  render() {
    const { banner } = this.props
    return (
      <Swiper
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay
        interval='3000'
      >
        {banner.map((item, index) => {
          return (
            <SwiperItem key={index}>
              <Image src={item.src} className='swiper-img' />
            </SwiperItem>
          )
        })}
      </Swiper>
    )
  }
}
