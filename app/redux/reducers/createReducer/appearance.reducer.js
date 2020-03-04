import update from 'immutability-helper';
import { 
  FETCH_APPEARANCE_LIST_SUCCESS,
  FETCH_APPEARANCE_LIST_FAIL,
  ADD_APPEARANCE_SUCCESS,
  ADD_APPEARANCE_FAIL,
} from "../../actions/appearance.action";

const list = [
  {
    ID: '京AU0001',
    result: 1,
  },
  {
    ID: '京AU0002',
    result: 1,
  },
  {
    ID: '京AU0003',
    result: 0,
  },
  {
    ID: '京AU0004',
    result: 2,
  },      
  {
    ID: '京AU0005',
    result: 0,
  },  
];

// 初始化用户权限数据
const initialState = {
  list: list,
};

export const appearance = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APPEARANCE_LIST_SUCCESS:
      return update(state, {
        list: {
          $set: action.payload
        }
      });

    case FETCH_APPEARANCE_LIST_FAIL:
      return update(state, {
        list: {
          $set: []
        }
      });

    case ADD_APPEARANCE_SUCCESS:
      return update(state, {
        list: {
          $unshift: [action.payload]
        }
      });

    case ADD_APPEARANCE_FAIL:
      return state;

    default:
      return state;
  }
}