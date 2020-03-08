import update from 'immutability-helper';
import { 
  FETCH_APPEARANCE_LIST,
  FETCH_APPEARANCE_LIST_FAIL,
  ADD_APPEARANCE,
  ADD_APPEARANCE_FAIL,
} from "../../actions/appearance.action";

// 初始化用户权限数据
const initialState = {
  list: [],
};

export const appearance = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APPEARANCE_LIST:
      return update(state, {
        list: {
          $set: action.payload,
        }
      });

    case FETCH_APPEARANCE_LIST_FAIL:
      return update(state, {
        list: {
          $set: [],
        }
      });

    case ADD_APPEARANCE:
      const payload = action.payload;
      let newState = Object.assign({}, state);

      // 如果有相同ID，替换对应数据
      for (let index = 0; index < newState.list.length; index++) {
        const element = newState.list[index];
        
        if (element.ID == payload.ID) {
          newState = update(newState, {
            list: {
              $splice: [[index, 1]],
            }
          });
        }
      }

      return update(newState, {
        list: {
          $unshift: [action.payload],
        }
      });

    case ADD_APPEARANCE_FAIL:
      return state;

    default:
      return state;
  }
}