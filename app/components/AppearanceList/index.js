/**
 * 外观检测单列表组件
 */
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from "react-native";
import {
  Provider,
  List,
  SearchBar,
} from '@ant-design/react-native';
import { connect } from "react-redux";
import HeaderBar from "../../common/HeaderBar";

class AppearanceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      list: this.props.list,
      oldMock: this.props.list,
    };
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      list: props.list,
    });
  }

  // 渲染外观检测单列表
  renderAppearanceListItem = data => {
    let status = ''
    let color = '#fff'
    switch (data.result) {
      case 0:
        status = '不通过';
        color = '#ED5655';
        break;       
      case 1:
        status = '已通过';
        color = '#5695D2';
        break;
      case 2:
        status = '进行中';
        color = '#F6BB42';
        break;      
      default:
        break;
    }

    return (
      <List.Item
        key={data.ID}
        extra={<Text style={[styles.status, {color}]}>{status}</Text>}
        onPress={this.selectedItem}
      >
      {data.ID}
      </List.Item>  
    );
  }

  render() {
    const { list, searchText } = this.state;
    return (
      <View style={{flex: 1}}>
        <HeaderBar 
          navigation={ this.props.navigation }
          title='外观检测单'
          rightItemName='新增'
          rightClick={this.addTransferSheet}
        />
        <View>
          <SearchBar
            value={searchText}
            placeholder="搜索"
            onSubmit={this.searchCarNo}
            onCancel={this.clear}
            onChange={this.onChange}
            cancelText={<Text style={styles.cancel}>取消</Text>}
            showCancelButton={true}
          />
        </View>    
        <Provider>
          <List>
          {
            list && list.map((data) => this.renderAppearanceListItem(data))
          }                                                         
          </List>
        </Provider>
      </View>
    );
  }

  // 选中某个item
  selectedItem = () => {
    const { navigation } = this.props;
    navigation && navigation.navigate('AddAppearance');
  }

  addTransferSheet = () => {
    const { navigation } = this.props;
    navigation && navigation.navigate('AddAppearance');
  }

  // 搜索
  searchCarNo = () => {
    this.setState((preState) => {
      const { list, searchText } = preState;
      return {
        list: list.filter((item) => { 
          return item.carNo.match(searchText)
        })
      }
    });
  }

  // 搜索框输入文字
  onChange = searchText => {
    this.setState({ searchText });
  };

  // 取消
  clear = () => {
    const { oldMock } = this.state;
    this.setState({
      list: oldMock,
      searchText: '',
    })
  }  
}

const mapStateToProps = state => {
  return {
    list: state.appearance.list,
  };
}

const styles = StyleSheet.create({
  status: {
    fontSize: 16,
    color: '#666',
  },
  cancel: {
    fontSize: 16,
    color: '#666'
  }
});

export default connect(mapStateToProps)(AppearanceList);