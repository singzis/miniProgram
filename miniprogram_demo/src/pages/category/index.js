import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtSearchBar } from 'taro-ui'

import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'

import './index.css'

// import Search from '../index/components/search'
import CategoryTabsPane from './components/categoryTabsPane'

import { categoryList } from '../../reducers/json'

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
    navigationBarTitleText: '商品分类'
  }

  constructor() {
    super(...arguments)
    this.state = {
      windowHeight: 667,
      current: 0,
      categoryData: []
    }
  }

  componentWillMount() {
    Taro.getSystemInfo().then(res => {
      this.setState({
        windowHeight: res.windowHeight
      })
    })
  }

  componentDidMount() {
    this.setState({
      categoryData: categoryList
    })
  }

  goToUrl(url) {
    Taro.navigateTo({
      url: url
    })
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  render() {
    const { categoryData, windowHeight, current } = this.state
    const goToPage = this.goToUrl
    return (
      <View className='cg'>
        <View
          className='cg-search'
          onClick={() => {
            goToPage('../search/index')
          }}
        >
          {/* <Search
            clickFunc={() => {
              goToPage('/pages/index/index')
            }}
            noBanner
            searchBg='#fffff'
          /> */}
          <AtSearchBar placeholder='请输入商家名或品类...' disabled />
        </View>
        <AtTabs
          current={current}
          scroll
          height={`${windowHeight - 36}px`}
          tabDirection='vertical'
          tabList={categoryData}
          onClick={this.handleClick.bind(this)}
        >
          {categoryData.map((item, index) => {
            return (
              <AtTabsPane
                tabDirection='vertical'
                current={current}
                index={index}
                key={item.unique}
              >
                <CategoryTabsPane tabs={item} clickFunc={goToPage} />
              </AtTabsPane>
            )
          })}
        </AtTabs>
      </View>
    )
  }
}
