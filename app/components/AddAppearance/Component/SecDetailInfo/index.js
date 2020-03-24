/** 
 * 环保外观检测信息
*/
import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import {
  List,
  Modal,
  Toast,
  WhiteSpace,
} from '@ant-design/react-native';
import {
  KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view';
import HeaderBar from "../../../../common/HeaderBar";
import { CONFIGINFO } from "./config";
import cssConfig from "../../../../styleSheet/css.config";
import { MERGE_APPEARANCE_INFO } from "../../../../redux/actions/appearance.action";

class SecDetailInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {

      secResult: 0, // 安检外观检测
    };
  }

  renderItem = (data) => {
    return (
      <View 
        style={styles.itemContainer} 
        key={data.key}
      >
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{data.name}</Text>
          <View style={[styles.line, {height: 32 * data.subitems.length}]}/>
        </View>
        <View style={styles.subItemContainer1}>{data.subitems.map(item => this.renderSubItem(item))}</View>
      </View>
    );
  }

  renderSubItem = (data) => {
    return (
      <View 
        key={data.stateProperty} 
        style={styles.subItemContainer}
      >
        <Text style={styles.subItemContent}>{data.title}</Text>
        <View style={styles.switchContainer}>
        {
          data.options && data.options.map(item => {
            // 判断 item 是否被选中
            const selectd = this.state[data.stateProperty] == item.value;
            return (
              <TouchableWithoutFeedback 
                key={item.value}
                onPress={() => {
                  this.commonInputFunc(item.value, data.stateProperty);
                }}
              >
                <View style={[styles.selectionItem, selectd && styles.selectedItem]}>
                  <Text style={[styles.tagText, selectd && {color: '#fff'}]}>{item.label}</Text>
                </View>
              </TouchableWithoutFeedback>
            )
          })
        }
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderBar 
          navigation={ this.props.navigation }
          title='安检外观检验项目'
          rightItemName='保存'
          rightClick={this.showModal}
          leftClick={this.checkEdited}
        />      
        <KeyboardAwareScrollView>
          <List 
            renderHeader={this.renderHeader('不合格项点击：否  ( * 表示: 否决项 )')}
          >
          { CONFIGINFO.map(item => this.renderItem(item)) }
          </List>
          <WhiteSpace />
        </KeyboardAwareScrollView>
      </View>
    );
  }


  // section header 标题
  renderHeader = (title) => {
    return (
      <Text style={styles.listHeader}>{title}</Text>
    );
  }

  // 改变state通用方法
  commonInputFunc = (value, stateProperty) => {
    const state = this.state;
    state[stateProperty] = value;
    this.setState(state, () => console.log(this.state));
  }

  /**
   * 检查数据是否被修改
   * @memberof BaseDetailInfo
   */  
  checkEdited = () => {
    if (true) {
      this.showEditedModal()
    } else {
      const { navigation } = this.props;
        navigation && navigation.goBack();
    }
  }  

  // 弹框选择是否放弃修改
  showEditedModal = () => {
    const { navigation } = this.props;
    Modal.alert(
    <Text style={styles.modalTitle}>确定离开吗？</Text>, 
    <Text style={styles.modalContext}>您已经在当前页面进行数据修改，尚未保存，直接返回将丢失这些操作</Text>, 
    [{
        text: '确定返回',
        onPress: () => {
          navigation && navigation.goBack();
        },
        style: {
          textAlign: 'center',
          color: '#666'
        }
      },
      {
        text: '继续编辑',
        onPress: () => {},
        style: {
          textAlign: 'center',
          color: '#5695D2'
        }
      },
    ]);
  };

  /**
   * 弹框选择是否通过
   * @memberof BaseDetailInfo
   */
  showModal = () => {
    // TODO 参数校验

    // 0 未通过；1 已通过
    Modal.alert(
    <Text style={styles.modalTitle}>环保外观检测结果</Text>, 
    <Text style={styles.modalContext}>环保外观检测是否已通过？</Text>, 
    [{
        text: '未通过',
        onPress: () => this.resultPress(0),
        style: {
          textAlign: 'center',
          color: '#666'
        }
      },
      {
        text: '已通过',
        onPress: () => this.resultPress(1),
        style: {
          textAlign: 'center',
          color: '#5695D2'
        }
      },
    ]);
  };

  // 选择弹框选项
  resultPress = result => {
    this.submitInfo(result);
  }

  // 提交信息
  submitInfo = (result) => {
    const state = Object.assign({}, this.state, {
      secResult: result
    });

    // mock
    Toast.loading('正在提交', 0.5, () => {
      // 将基本外观数据合并到 redux 中
      this.props.mergeApearanceInfo(state);

      Toast.success('提交成功', 0.5, ()=> {
        const { navigation } = this.props;
          navigation && navigation.goBack();
        }, true);
    }, true);
  }    
}

const mapStateToProps = state => {
  return {
    baseInfo: state.appearance.baseInfo,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    // 合并外观检测数据
    mergeApearanceInfo: params => {
      dispatch({
        type: MERGE_APPEARANCE_INFO,
        payload: params
      });
    },
  };
}

const styles = StyleSheet.create({
  listHeader: {
    padding: 10,
    fontSize: 18,
    color: '#999',
  },
  modalTitle: {
    fontSize: 20,
    color: '#5695d2',
    margin: 3,
  },
  modalContext: {
    fontSize: 16,
    color: '#666',
    margin: 3,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
    padding:5,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  sectionContainer: {
    marginHorizontal: 10,
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: cssConfig.textFontSize,
  },
  subItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subItemContainer1: {
    width: '75%',
  },
  subItemContent: {
    fontSize: cssConfig.textFontSize,
    marginVertical: 5,
  },
  line: {
    width: 1,
    backgroundColor: '#eee'
  },
  selectedItem: {
    borderColor: '#fff',
    backgroundColor: '#5695d2'
  },
  tagText: {
    fontSize: 16,
    color: '#222',
  },
  selectionItem: {
    overflow: 'hidden',
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 6,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderColor: '#999',
    marginRight: 0,
  },  
  switchContainer: {
    flexDirection: 'row',
    marginRight: 20,
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SecDetailInfo);
