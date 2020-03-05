/**
 * 外观检测单列表组件
 */
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  List,
  SearchBar,
  ListView,
} from '@ant-design/react-native';
import { connect } from "react-redux";
import HeaderBar from "../../common/HeaderBar";
import LoadingSpinner from "../../common/LoadingSpinner";

const { height } = Dimensions.get('window')

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
        onPress={() => this.selectedItem(data)}
      >
      {data.ID}
      </List.Item>  
    );
  }

  render() {
    const { searchText } = this.state;
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
        <ListView
          refreshableMode="advanced" // basic or advanced
          onFetch={this.onFetch}
          keyExtractor={(item, index) =>
            `${this.state.layout} - ${item} - ${index}`
          }
          renderItem={this.renderAppearanceListItem}
          numColumns={1}
          paginationFetchingView={this.renderPaginationFetchingView}
          refreshViewStyle={{ height: 80 }}
          refreshViewHeight={80}
        />        
      </View>
    );
  }

  sleep = (time) =>
    new Promise(resolve => setTimeout(() => resolve(), time));

  onFetch = async (
    page = 1,
    startFetch,
    abortFetch
  ) => {

    try {
      let pageLimit = 20;

      await this.sleep(2000);
      startFetch(this.state.list, pageLimit);
    } catch (err) {
      abortFetch();
    }
  };

  renderPaginationFetchingView = () => (
    <LoadingSpinner height={height * 0.2} text="加载中..." />
  )  

  // 选中某个item，并将数据回传
  selectedItem = (data) => {
    const { navigation } = this.props;
    navigation && navigation.navigate('AddAppearance', {...data});
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