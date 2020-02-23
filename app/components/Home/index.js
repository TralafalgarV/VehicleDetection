import React, { Component } from 'react';
import { View, StyleSheet, Text } from "react-native";
import HeaderBar from "../../common/HeaderBar";
import { Grid } from '@ant-design/react-native';

const data = [
  {
    icon: undefined,
    text: '外观检测'
  },
  {
    icon: undefined,
    text: '尾气检测'
  },  
  {
    icon: undefined,
    text: '其他'
  }, 
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  // 页面跳转
  navToPage = (_el, index) => {
    const { navigation } = this.props;
    
    switch (index) {
      case 0:
        navigation.navigate('AppearanceList')
        break;

      case 1:
        // navigation.navigate('Appearance')
        break;

      case 2:
        // navigation.navigate('Appearance')
        break;        
    
      default:
        break;
    }
  }

  // 渲染 Item
  renderItem = (el, index) => {
    return (
      <View>
        <Text style={styles.title}>{el.text}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderBar 
          navigation={ this.props.navigation }
          title='检测项目'
          leftItemHidden={true}
          rightItemHidden={true}
        />
        <View style={styles.container}>
          <Grid
            data={data}
            columnNum={2}
            hasLine={false}
            itemStyle={styles.itemStyle}
            onPress={this.navToPage}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  itemStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontSize: 24,
    color: '#222',
  },
});

export default Home;