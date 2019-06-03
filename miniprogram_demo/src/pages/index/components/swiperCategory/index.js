import Taro, { Component } from '@tarojs/taro'
import { View, Image, ScrollView } from '@tarojs/components'

import './index.css'

// import Indicator from '../indicator'

export default class SwiperCategory extends Component {
  constructor() {
    super(...arguments)
  }
  render() {
    const { categoryList = [], clickFunc } = this.props
    let newCategoryList = []
    const l = categoryList.length
    if (l < 1) {
      newCategoryList = categoryList
    } else {
      const l_1 = Math.ceil(l / 2)
      const l_2 = Math.floor(l / 2)
      let i = 0
      for (i = 0; i < l_1; i += 1) {
        newCategoryList.push([categoryList[i]])
      }
      for (let j = 0; j < l_2; j += 1) {
        newCategoryList[j].push(categoryList[j + l_1])
      }
    }
    return (
      <View style={{ height: '160px' }}>
        <ScrollView
          style={l > 10 ? { height: '290rpx' } : {}}
          scrollX
          scrollWithAnimation
        >
          <View className='category'>
            {newCategoryList.map((item, index) => {
              return (
                <View key={index} className='catrgoty-li'>
                  <View
                    className='icon-title'
                    key={item[0].unique}
                    onClick={() => {
                      clickFunc(item[0].url)
                    }}
                  >
                    <Image src={item[0].src} className='icon' />
                    <View className='title'>{item[0].title}</View>
                  </View>
                  <View
                    className='icon-title'
                    key={item[1].unique}
                    onClick={() => {
                      clickFunc(item[1].url)
                    }}
                  >
                    <Image src={item[1].src} className='icon' />
                    <View className='title'>{item[1].title}</View>
                  </View>
                </View>
              )
            })}
          </View>
        </ScrollView>
        {/* <View className='indicator'>
          <Indicator />
        </View> */}
      </View>
    )
  }
}
