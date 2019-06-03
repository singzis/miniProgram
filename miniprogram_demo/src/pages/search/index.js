import Taro, { Component } from '@tarojs/taro'
import { View, Icon } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import { debounce } from '../../utils/index'

import './index.css'

import { historyD, hotD, tipsD } from '../../reducers/json'

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
export default class Category extends Component {
  config = {
    navigationBarTitleText: '搜索'
  }

  constructor() {
    super(...arguments)
    this.state = {
      words: '',
      tips: [],
      historyData: [],
      hotData: [],
      tipsData: []
    }
    this.getInputValue = this.getInputValue.bind(this)
    this.inputHandle = this.inputHandle.bind(this)
  }

  componentWillMount() {}

  componentDidMount() {
    this.setState({
      historyData: historyD,
      hotData: hotD,
      tipsData: tipsD
    })
  }
  getInputValue(e) {
    //取到input输入值 逻辑操作
    const { tipsData } = this.state
    let tips = tipsData.filter(item => {
      return item.title.indexOf(e.detail.value) > -1
    })
    this.setState({
      words: e.detail.value,
      tips
    })
  }

  inputHandle = debounce(this.getInputValue, 500)

  clear() {
    this.setState({
      words: ''
    })
  }

  toBack() {
    Taro.navigateBack()
  }

  remove() {
    this.setState({
      historyData: []
    })
  }
  goToUrl() {
    Taro.navigateTo({
      url: '/pages/index'
    })
  }

  searchChange(v) {
    const { tipsData } = this.state
    let tips = tipsData.filter(item => {
      return item.title.indexOf(v) > -1
    })
    this.setState({
      words: v,
      tips
    })
  }

  render() {
    const { words, historyData, hotData, tips } = this.state
    return (
      <View className='search'>
        <View className='search-top'>
          <AtSearchBar value={words} onChange={this.searchChange} />
          {/* <View className='search-top-box'>
            <Icon
              className='icon-search'
              type='search'
              size={iconSize}
              color={iconColor}
            />
            <Input
              type='text'
              placeholder='输入查找'
              className='top-input'
              value={words}
              onInput={this.inputHandle}
            />
            <Icon
              className='icon-clear'
              type='clear'
              size={iconSize}
              color={iconColor}
              onClick={this.clear}
            />
          </View> */}
          {/* <View className='cancel' onClick={this.toBack}>
            取消
          </View> */}
        </View>
        {words && (
          <View className='search-lists'>
            {tips.map((item, index) => {
              return (
                <View className='search-lists-item' key={index}>
                  {item.title}
                </View>
              )
            })}
            {tips.length < 1 && (
              <View className='nogoods'>数据库暂无此类商品...</View>
            )}
          </View>
        )}
        {historyData.length > 0 && (
          <View className='history'>
            <View className='history-top'>
              <View className='history-title'>历史搜索</View>
              <Icon
                className='icon-remove'
                type='clear'
                size='18'
                color='#8a8a8a'
                onClick={this.remove}
              />
            </View>
            <View className='history-list'>
              {historyData.map(item => {
                return (
                  <View
                    className='history-result'
                    key={item.unique}
                    onClick={this.historyHandle}
                  >
                    {item.title}
                  </View>
                )
              })}
            </View>
          </View>
        )}
        <View className='hot history'>
          <View className='history-top'>
            <View className='history-title'>热门搜索</View>
          </View>
          <View className='history-list'>
            {hotData.map(item => {
              return (
                <View
                  className='history-result'
                  key={item.unique}
                  onClick={this.historyHandle}
                >
                  {item.title}
                </View>
              )
            })}
          </View>
        </View>
      </View>
    )
  }
}
