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
  List,
  SearchBar,
} from '@ant-design/react-native';
import { connect } from "react-redux";
import HeaderBar from "../../common/HeaderBar";
import { FETCH_APPEARANCE_LIST } from "../../redux/actions/appearance.action";
import { fetchRequest } from "../../utils/fetchUtils";
import { ListData } from "../../mockData";
import PullToRefresh from 'react-native-pull-to-refresh-custom';
import RefreshHeader from "../../common/RefreshHeader";
import {
  MERGE_APPEARANCE_INFO,
  FILTER_APPEARANCE_INFO,
  REDO_APPEARANCE_INFO
} from "../../redux/actions/appearance.action";
import cssConfig from "../../styleSheet/css.config";

class AppearanceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      list: this.props.list || [],
      refreshing: false,
    };
  }

  componentDidMount() {
    // fetchRequest(FETCH_APPEARANCE_LIST, {}).then(res => {
    //   console.log(res);
    //   this.props.fetchList(res);
    // })
    // .catch(err => console.log(err));

    // Mock
    this.props.fetchList(ListData);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.list !== nextProps.list) {
      return { 
        list: nextProps.list,
      };
    } else {
      return null;
    }
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
        <Text style={styles.text}>{data.ID}</Text>
      </List.Item>  
    );
  }

  render() {
    const { searchText, list } = this.state;
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
            onSubmit={this.searchID}
            onCancel={this.clear}
            onChange={this.onChange}
            cancelText={<Text style={styles.cancel}>取消</Text>}
            showCancelButton={true}
          />
        </View>
        <PullToRefresh
          HeaderComponent={RefreshHeader}
          headerHeight={80}
          refreshTriggerHeight={80}
          refreshingHoldHeight={80}
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
          style={styles.refresh}
        >
          <List>
          { list.length > 0 && list.map(this.renderAppearanceListItem) }
          </List>
        </PullToRefresh>        
      </View>
    );
  }

  onRefresh = () => {
    this.setState({
      refreshing: true,
    });

    setTimeout(() => {
      this.setState(() => {
        return {
          refreshing: false,
          list: this.props.list,
        };
      });
    }, 1000);
  }

  // 选中某个item，并将选中的数据存储
  selectedItem = (data) => {
    const { navigation } = this.props;
    this.props.mergeAppearanceInfo(data);
    navigation && navigation.navigate('AddAppearance');
  }

  addTransferSheet = () => {
    const { navigation } = this.props;
    navigation && navigation.navigate('AddAppearance');
  }

  // 搜索
  searchID = () => {
    this.props.filterAppearanceInfo(this.state.searchText);
  }

  // 搜索框输入文字
  onChange = searchText => {
    this.setState({ searchText });
  };

  // 取消
  clear = () => {
    this.props.redoAppearanceInfo();
    this.setState({
      searchText: '',
    })
  }  
}

const mapStateToProps = state => {
  return {
    list: state.appearance.list,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    // 获取数据列表
    fetchList: params => {
      dispatch({
        type: FETCH_APPEARANCE_LIST,
        payload: params,
      })
    },
    // 更新redux中的外观信息
    mergeAppearanceInfo: params => {
      dispatch({
        type: MERGE_APPEARANCE_INFO,
        payload: params,
      })
    },
    // 筛选数据
    filterAppearanceInfo: params => {
      dispatch({
        type: FILTER_APPEARANCE_INFO,
        payload: params,
      })
    },
    // 恢复数据
    redoAppearanceInfo: () => {
      dispatch({
        type: REDO_APPEARANCE_INFO,
      })
    },    
  }
}

const styles = StyleSheet.create({
  status: {
    fontSize: cssConfig.textFontSize,
    color: '#666',
    margin: 10,
  },
  cancel: {
    fontSize: cssConfig.textFontSize,
    color: '#666'
  },
  refresh: {
    flex: 1,
    zIndex: -1
  },
  text: {
    fontSize: cssConfig.textFontSize,
    margin: 10,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppearanceList);