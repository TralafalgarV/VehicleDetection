import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, StyleSheet, TouchableWithoutFeedback, Image, StatusBar } from 'react-native'
import cssConfig from "../../styleSheet/css.config";

class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  static propTypes = {
    title: PropTypes.string, // 标题
    titleClick: PropTypes.func, // 标题点击事件

    leftItemHidden: PropTypes.bool, // 是否隐藏左侧按钮

    rightItemName: PropTypes.string, // 右侧按钮名称
    rightItemHidden: PropTypes.bool, // 是否隐藏右侧按钮
    rightClick: PropTypes.func, // 右侧点击事件

    style: PropTypes.object, // headerBar 的样式
  };
  static defaultProps = {
    title: '标题',

    leftItemHidden: false,

    rightItemName: '',
    rightItemHidden: false,
    rightClick: () => {},

    titleClick: () => {},
  };

  render() {
    const {
      title,
      rightItemName,
      leftItemHidden,
      rightItemHidden,
      rightClick,
      titleClick,
      navigation,
      style,
    } = this.props;

    return (
      <View style={[styles.headerBar, style]}>
        <StatusBar barStyle={'light-content'} backgroundColor={'rgba(0,0,0,0)'} translucent={true} />
        {
          !leftItemHidden ?
            <TouchableWithoutFeedback onPress={() => {navigation && navigation.goBack()}}>
              <View style={styles.headerBarItem}>
                <Image style={styles.backImg} source={require('./imgs/goback.png')} />
              </View>
            </TouchableWithoutFeedback> : 
            <View style={styles.headerBarItem}/>
        }
        <TouchableWithoutFeedback onPress={titleClick}>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
        </TouchableWithoutFeedback>
        {
          !rightItemHidden ?
          <TouchableWithoutFeedback onPress={rightClick}>
            <View style={styles.headerBarItem}>
              <Text style={styles.text}>{rightItemName || '确认'}</Text>
            </View>
          </TouchableWithoutFeedback> :
          <View style={styles.headerBarItem}/>
        }
        
      </View>
    );
  }
}

export default HeaderBar;

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 88,
    width: '100%',
    paddingTop: 22,
    backgroundColor: '#5695d2',
    position: 'relative',
  },
  headerBarItem: {
    width: 66,
    height: 66,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: cssConfig.titleFontSize,
    color: '#FFFFFF',
  },
  text: {
    fontSize: cssConfig.textFontSize,
    color: '#FFFFFF',
  },
  backImg: {
    width: 8,
    height: 16,
    tintColor: '#fff',
  },  
});