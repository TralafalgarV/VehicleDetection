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
import HeaderBar from "../../../../common/HeaderBar";

const mock = [
  {
    carNo: '京AU0001',
    id: '202002020001',
    status: '1'
  },
  {
    carNo: '京AU0002',
    id: '202002020002',
    status: '1'
  },
  {
    carNo: '京AU0003',
    id: '202002020003',
    status: '1'
  },
  {
    carNo: '京AU0004',
    id: '202002020004',
    status: '2'
  },      
  {
    carNo: '京AU0005',
    id: '202002020005',
    status: '3'
  },  
];

class AppearanceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      mock,
      oldMock: mock,
    };
  }

  // 选中某个item
  selectedItem = () => {
    const { navigation } = this.props;
    navigation && navigation.navigate('Appearance');
  }

  addTransferSheet = () => {
    const { navigation } = this.props;
    navigation && navigation.navigate('Appearance');
  }

  // 搜索
  searchCarNo = () => {
    this.setState((preState) => {
      const { mock, searchText } = preState;
      return {
        mock: mock.filter((item) => { 
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
      mock: oldMock,
      searchText: '',
    })
  }

  // 渲染外观检测单列表
  renderAppearanceListItem = data => {
    let status = ''
    let color = '#fff'
    
    switch (data.status) {
      case '1':
        status = '已通过';
        color = '#5695D2';
        break;
      case '2':
        status = '进行中';
        color = '#F6BB42';
        break;   
      case '3':
        status = '不通过';
        color = '#ED5655';
        break;    
      default:
        break;
    }

    return (
      <List.Item
        key={data.id}
        extra={<Text style={[styles.status, {color}]}>{status}</Text>}
        onPress={this.selectedItem}
      >
      {data.carNo}
      </List.Item>  
    );
  }

  render() {
    const { mock, searchText } = this.state;
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
            mock.map((data) => this.renderAppearanceListItem(data))
          }                                                         
          </List>
        </Provider>
      </View>
    );
  }
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

export default AppearanceList;