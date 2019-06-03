import Taro, { Component } from '@tarojs/taro'
import { View, RadioGroup, Radio, Input } from '@tarojs/components'
import {
  AtForm,
  AtInput,
  AtTextarea,
  AtIcon,
  AtImagePicker,
  AtButton
} from 'taro-ui'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.css'

import YcbPicker from '../../components/ycbPicker'

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
class PurchaseForm extends Component {
  config = {
    navigationBarTitleText: '发起求购'
  }

  constructor() {
    super(...arguments)
    this.state = {
      nameVal: '',
      textArea: '',
      product: ['甜品', '水果', '饮料', '面包', '蛋糕'],
      selectProduct: '',
      buyType: ['类型1', '类型2', '类型3', '类型4', '类型5'],
      selectBuyType: '',
      selectDeliveryDate: '',
      radioType: 1,
      radioInputVal: '',
      imgFiles: [],
      imgCount: 9
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  changeValue(v) {
    this.setState({
      nameVal: v
    })
  }
  textAreaChangee(e) {
    this.setState({
      textArea: e.detail.value
    })
  }
  productChange = e => {
    this.setState({
      selectProduct: this.state.product[e.detail.value]
    })
  }
  buyTypeChange = e => {
    this.setState({
      selectBuyType: this.state.buyType[e.detail.value]
    })
  }
  deliveryDateChange = e => {
    this.setState({
      selectDeliveryDate: e.detail.value
    })
  }
  radioChange = e => {
    this.setState({
      radioType: e.detail.value
    })
  }
  radioInputChange = e => {
    this.setState({
      radioInputVal: e.detail.value
    })
  }
  imagePicker = imgFiles => {
    console.log(imgFiles)
    this.setState({
      imgFiles
    })
  }
  imagePickerFile = msg => {
    console.log(msg)
  }
  submit = () => {
    const {
      nameVal,
      textArea,
      selectProduct,
      selectBuyType,
      selectDeliveryDate,
      radioType,
      radioInputVal,
      imgFiles
    } = this.state

    const obj = {
      nameVal,
      textArea,
      selectProduct,
      selectBuyType,
      selectDeliveryDate,
      radioType,
      radioInputVal,
      imgFiles
    }
    console.log(obj)
  }
  render() {
    return (
      <View className='index'>
        <View className='notice'>
          <View className='icon'>
            <AtIcon value='alert-circle' size='22' color='#DE8C17' />
            <View>求购引导</View>
          </View>
          <View className='notice-text'>当前有565656位供应商在线抢单</View>
        </View>
        <AtForm>
          <AtInput
            name='name'
            title='产品名称'
            placeholder='简易填写您求购的产品名称'
            type='text'
            value={this.state.nameVal}
            onChange={this.changeValue}
          />
          <AtTextarea
            value={this.state.textArea}
            onChange={this.textAreaChangee}
            placeholder='*产品描述：如出口国家、价格、材质、规格等'
            maxLength='200'
          />
          <YcbPicker
            name='product'
            title='产品分类'
            placeholder='请选择采购商品类别'
            value={this.state.selectProduct}
            range={this.state.product}
            onChange={this.productChange}
            mode='selector'
          />
          <YcbPicker
            name='buyType'
            title='求购类型'
            placeholder='请选择求购类型'
            value={this.state.selectBuyType}
            range={this.state.buyType}
            onChange={this.buyTypeChange}
            mode='selector'
          />
          <YcbPicker
            name='deliveryDate'
            title='交货日期'
            placeholder='请选择交货日期'
            value={this.state.selectDeliveryDate}
            onChange={this.deliveryDateChange}
            mode='date'
          />
          <View className='radioCount'>
            <View className='radio-box'>
              <View className='radio-title'>求购数量</View>
              <View className='radio-group'>
                <RadioGroup onChange={this.radioChange}>
                  <Radio className='radio' checked value='1' color='#fe8f43'>
                    <View>
                      <Input
                        type='text'
                        placeholder='请输入数量及单位'
                        onChange={this.radioInputChange}
                        value={this.state.radioInputVal}
                      />
                    </View>
                  </Radio>
                  <Radio className='radio' value='2' color='#fe8f43'>
                    <View className='redio-text'>按商户起订量</View>
                  </Radio>
                </RadioGroup>
              </View>
            </View>
          </View>
          <View className='image-picker'>
            <AtImagePicker
              files={this.state.imgFiles}
              onChange={this.imagePicker}
              onFail={this.imagePickerFile}
              count={this.state.imgCount}
              showAddBtn
              multiple
            />
          </View>
          <View className='button'>
            <AtButton
              type='primary'
              circle
              form-type='submit'
              onClick={this.submit}
            >
              立即发布
            </AtButton>
          </View>
        </AtForm>
      </View>
    )
  }
}

export default PurchaseForm
