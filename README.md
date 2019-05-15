# miniProgram

## 微信小程序登陆进入页面-登陆过程

### 授权登陆

- checkSession验证登陆态-登陆态有效
  - 带上本地accessToken请求用户信息-成功
    - 返回用户信息-accessToken存本地
  - 带上本地accessToken请求用户信息-失败-accessToken过期
    - 重新登陆login-返回用户信息-accessToken存本地
- checkSession验证登陆态-登陆态无效
  - getUserInfo检查授权权限-已授权
    - 带上iv，encryptedData等信息请求服务器-注册/登陆
    - 返回用户信息-accessToken存本地
  - getUserInfo检查授权权限-未授权
    - 弹框/页面等诱导用户点击button进行授权-点击
      - 激活微信授权弹框-成功授权
        - 带上iv，encryptedData等信息请求服务器-注册/登陆
        - 返回用户信息-accessToken存本地
      - 激活微信授权弹框-未成功授权
    - 诱导/放任不管

#### 登陆的一些tips

- 用户进入小程序，程序直接调用login获取code
- 发送code给后台获取登陆凭证和openId, sessionKey, unionId-本地保存登陆态

- OpenId 是一个用户对于一个小程序／公众号的标识，开发者可以通过这个标识识别出用户。
- UnionId 是一个用户对于同主体微信小程序／公众号／APP的标识，开发者需要在微信开放平台下绑定相同账号的主体。开发者可通过UnionId，实现多个小程序、公众号、甚至APP 之间的数据互通了。
- 同一个用户的这两个 ID 对于同一个小程序来说是永久不变的，就算用户删了小程序，下次用户进入小程序，开发者依旧可以通过后台的记录标识出来。
