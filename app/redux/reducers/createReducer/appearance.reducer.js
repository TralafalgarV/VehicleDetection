import { 
  FETCH_APPEARANCE_LIST_SUCCESS,
  FETCH_APPEARANCE_LIST_FAIL,
  FETCH_APPEARANCE_LIST_CANCEL,
} from "../../actions/appearance.action";

const list = [
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

// 初始化用户权限数据
const initialState = {
  appearanceList: {
    status: 'init',
    list,
  },
};

export const appearance = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APPEARANCE_LIST_SUCCESS:
      return Object.assign({}, state, {
        appearanceList: {
          status: 'success',
          list: action.payload,
        }
      });
    case FETCH_APPEARANCE_LIST_FAIL:
      return Object.assign({}, state, {
        appearanceList: {
          status: 'fail',
          list: [],
        }
      });
    case FETCH_APPEARANCE_LIST_CANCEL:
      return Object.assign({}, state, {
        appearanceList: {
          status: 'cancel',
          list: [],
        }
      });
    default:
      return state;
  }
}