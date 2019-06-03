import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtSearchBar } from 'taro-ui'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.css'
import SwiperBanner from './components/swiperBanner'
// import Search from './components/search'
import SwiperCategory from './components/swiperCategory'
import Product from './components/product'

import {
  bannerList,
  categoryList,
  productList,
  adList
} from '../../reducers/json'

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
class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  constructor() {
    super(...arguments)
    this.state = {}
    this.goToUrl = this.goToUrl.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
    Taro.login().then(res => {
      console.log(res)
      //用code去服务器换取登陆凭证
    })
    Taro.getSetting().then(res => {
      console.log(res)
      //用以验证是否授权或处于授权期
    })
  }

  goToUrl(url) {
    Taro.navigateTo({
      url: url
    })
  }

  render() {
    const searchBg = '#fff'
    const noBanner = bannerList.length > 0 ? false : true
    const searchStyle = noBanner
      ? {
          position: 'relative',
          backgroundColor: searchBg
        }
      : {}
    return (
      <View className='index'>
        <View
          className='search'
          style={searchStyle}
          onClick={() => {
            this.goToUrl('/pages/category/index')
          }}
        >
          {/* <Search
            clickFunc={() => {
              this.goToUrl('/pages/category/index')
            }}
          /> */}
          <AtSearchBar placeholder='请输入商家名或品类...' disabled />
        </View>
        {bannerList.length > 0 && <SwiperBanner banner={bannerList} />}
        <SwiperCategory
          categoryList={categoryList}
          clickFunc={url => {
            this.goToUrl(url)
          }}
        />
        <View className='ad'>
          {adList.map(item => {
            return (
              <View className='ad-box' key={item.unique} onClick={this.goToUrl}>
                <Image src={item.src} className='ad-box-img' />
              </View>
            )
          })}
        </View>
        <View className='product'>
          {productList.map(item => {
            return (
              <View key={item.unique} className='product-box'>
                <Product product={item} />
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}

export default Index
