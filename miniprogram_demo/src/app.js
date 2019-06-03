import '@tarojs/async-await'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.css'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/purchaseForm/index',
      'pages/personal/index',
      'pages/category/index',
      'pages/search/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      backgroundColor: '#eee'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: './image/ic_home.png',
          selectedIconPath: './image/ic_home_selected.png'
        },
        {
          pagePath: 'pages/purchaseForm/index',
          text: '发求购',
          iconPath: './image/ic_purchaseForm.png',
          selectedIconPath: './image/ic_purchaseForm.png'
        },
        {
          pagePath: 'pages/personal/index',
          text: '我的',
          iconPath: './image/ic_personal.png',
          selectedIconPath: './image/ic_personal_selected.png'
        }
      ],
      selectedColor: '#fd9943',
      color: '#b2b2b2',
      borderStyle: 'white'
    }
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
