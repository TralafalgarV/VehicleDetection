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
    title: PropTypes.string,

    leftItemHidden: PropTypes.bool,

    rightItemName: PropTypes.string,
    rightItemHidden: PropTypes.bool,
    rightClick: PropTypes.func,

    titleClick: PropTypes.func,

    style: PropTypes.object,
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