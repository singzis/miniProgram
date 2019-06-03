import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView, Image } from '@tarojs/components'

import './index.css'

export default class CategoryTabsPane extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      categoryData: []
    }
  }
  componentDidMount() {
    let arr = []
    for (let i = 0, l = 15; i < l; i += 1) {
      arr.push(i)
    }
    this.setState({
      categoryData: arr
    })
  }
  render() {
    const { tabs, clickFunc } = this.props
    const { categoryData } = this.state
    return (
      <ScrollView>
        <View className='header'>
          <View className='title'>
            {tabs.title}
            <View className='icon'>假装有icon</View>
          </View>
          <View
            className='click'
            onClick={() => {
              clickFunc()
            }}
          >{`查看全部 >`}</View>
        </View>
        <View className='ad'>
          <View className='ad-text'>{`${tabs.title}广告`}</View>
        </View>
        <View className='category'>
          {categoryData.map(item => {
            return (
              <View
                className='category-icon-title'
                key={item}
                onClick={() => {
                  clickFunc(tabs.url)
                }}
              >
                <Image src={tabs.src} className='category-icon' />
                <View className='category-title'>{tabs.title}</View>
              </View>
            )
          })}
        </View>
      </ScrollView>
    )
  }
}
