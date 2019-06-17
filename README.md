# 微信小程序

方案：Taro

## 微信小程序登陆进入页面-登陆过程

### 授权登陆

- login，获取code
- getSetting获取授权情况
  ```js
  //获取授权按钮
   <Button openType='getUserInfo' onGetUserInfo={this.getUserInfoRequest}>点击登陆</Button>
  ```
  - 已授权
    - getUserInfo获取用户信息
    - 将code和用户信息发送到后台-返回自定义登陆态
    - 本地存储自定义登陆态
  - 未授权
    - 诱导用户点击授权

登陆的一些tips

- 用户进入小程序，程序直接调用login获取code
- 发送code给后台获取登陆凭证和openId, sessionKey, unionId-本地保存登陆态
- OpenId 是一个用户对于一个小程序／公众号的标识，开发者可以通过这个标识识别出用户。
- UnionId 是一个用户对于同主体微信小程序／公众号／APP的标识，开发者需要在微信开放平台下绑定相同账号的主体。开发者可通过UnionId，实现多个小程序、公众号、甚至APP 之间的数据互通了。
- 同一个用户的这两个 ID 对于同一个小程序来说是永久不变的，就算用户删了小程序，下次用户进入小程序，开发者依旧可以通过后台的记录标识出来。

