import Taro from '@tarojs/taro'

export const env = 'dev'

export const getWapDomain = () =>
  ({
    development: '/',
    dev: 'http://wykj-internal.s-ant.cn/',
    stable: 'http://wykj-internal.microants.com.cn/',
    production: 'https://wykj.microants.cn/'
  }[env])

export const errorHandler = e => {
  if (
    e.errorCode === 'user_need_login_token_invalid' ||
    e.errorCode === 'user_need_login_token_expire'
  ) {
    console.log(e.errorMsg)
  } else if (e.errorMsg || e.errMsg || e.message) {
    Taro.showToast({
      title: e.errorMsg,
      icon: 'none',
      duration: 2000
    })
  }
}
export const hasQuery = url => {
  const arr = url.split('?')
  const query = arr[1]
  if (query) return true
  return false
}
export const removeQuery = (url, key) => {
  const arr = url.split('?')
  const host = arr[0]
  const query = arr[1]
  const keyword = `${key}=`
  if (!query) return host

  const queries = query
    .split('&')
    .filter(v => v.indexOf(keyword) === -1)
    .join('&')

  return queries ? `${host}?${queries}` : host
}

export const getCookie = (data = '', name) => {
  let arr
  const reg = RegExp('(^| )' + name + '=([^;]+)(;|$)')
  if ((arr = data.match(reg))) return decodeURIComponent(arr[2])
  else return null
}

export const debounce = (func, wait = 500) => {
  let timeout

  return function() {
    let context = this
    let args = arguments
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(function() {
      func.apply(context, args)
      timeout = null
    }, wait)
  }
}
