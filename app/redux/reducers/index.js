import { combineReducers } from 'redux'

import { appearance } from "./createReducer/appearance.reducer";

export default combineReducers({
  appearance, // 外观检测数据
});