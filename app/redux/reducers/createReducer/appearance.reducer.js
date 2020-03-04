import { 
  FETCH_APPEARANCE_LIST_SUCCESS,
  FETCH_APPEARANCE_LIST_FAIL,
  FETCH_APPEARANCE_LIST_CANCEL,
} from "../../actions/appearance.action";

// 初始化用户权限数据
const initialState = {
  appearanceList: {
    status: 'init',
    list: [],
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