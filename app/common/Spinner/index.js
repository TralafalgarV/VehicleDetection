import React from 'react';
import { StyleSheet, View, Text, Modal, Image, TouchableWithoutFeedback } from 'react-native';

const typesImgage = {
  loading: {
    style: {
      height: 35,
      width: 35,
    },
    // img: require('../../images/status/loadingW.gif')
  },
  success: {
    style: {
      height: 30,
      width: 30,
      tintColor: '#fff'
    },
    // img: require('../../images/status/successBig.png')
  },
  fail: {
    style: {
      height: 30,
      width: 30,
      tintColor: '#fff'
    },
    // img: require('../../images/status/failBig.png')
  },
  timeout: {
    style: {
      height: 30,
      width: 30,
      tintColor: '#fff'
    },
    // img: require('../../images/status/failBig.png')
  }
}

export let closeSpinner_Ref = null; // 这个抛出是为了在公共方法中能去调用hide方法，把模态框关闭掉 情景：当在spinner显示时 此时要提示该账户在
// 其他设备中登录 该方法在fetchUtil里写的 无法直接操作spinner里的方法 所以需要把方法传出去

export default class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible || false,
      context: this.props.context || '',
      type: this.props.type || '',
    };

    if (this.props.time && this.props.visible) {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => this.hide(), typeof time === 'number' ? time : 1500)
    }
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer)
    this.asyncCallbackHandle && clearTimeout(this.asyncCallbackHandle)
  }

  render() {
    return this._renderSpinner();
  }

  _renderSpinner() {
    const {
      visible,
      type,
      context
    } = this.state
    if (!visible) {
      return null
    }
    return (
      <Modal
        supportedOrientations={['landscape', 'portrait']}
        ref={(ref) => this._spinner = ref}
        onRequestClose={() => this.hide(this.hideBack)}
        transparent={true}
        visible={true}
      >
        <TouchableWithoutFeedback onPress={() => !this.whiteNoHide && this.hide(this.hideBack)}>
          <View style={styles.container}>
            <View style={styles.center}>
              {
                (type === 'loading' || type === 'success'|| type === 'fail' || type === 'timeout') &&
                <View style={styles.centerTop}>
                  <Image source={typesImgage[type].img} style={typesImgage[type].style}/>
                </View>
              }
              <View style={styles.centerBottom}>
                <Text style={styles.context}>{context}</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }

  show = (type, context, time, hideBack, whiteNoHide) => {
    closeSpinner_Ref = this;
    this.hideBack = hideBack;
    this.whiteNoHide = whiteNoHide
    this.callback = null;
    // type: loading success fail timeout，context: 提示的文字,
    // time: 是否定时消失, 每次show预定义的将会被覆盖, 传入的数字就是定时的时间，非数字且为真，默认1500后消失
    this.timer && clearTimeout(this.timer);
    if (!type) {
      throw new Error(`type, 不符合定义要求， 应为 loading, success, fail, timeout, update`);
    }
    this.setState({
      visible: true,
      context,
      type,
    }, () => {
      if (time) { // 定时消失
        this.timer = setTimeout(() => {
          this.hide(hideBack);
        }, typeof time === 'number' ? time : 1500)
      }
    });
  };

  hide = (callback,deleyTimes) => {
    closeSpinner_Ref = null;
    this.timer && clearTimeout(this.timer);
    this.setState({
      visible: false,
    },() => callback instanceof Function && this.asyncCallback(callback,deleyTimes))
  };


  asyncCallback = (callback,deleyTimes) => {
    if (typeof deleyTimes === 'number') {
      this.asyncCallbackHandle = setTimeout(callback,deleyTimes)
    } else {
      callback()
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    minWidth: 100,
    maxWidth: '60%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    padding: 12,
    borderRadius: 4,
  },
  centerTop: {
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,

  },
  centerBottom: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  context: {
    fontSize: 12,
    color: '#fff'
  }
});