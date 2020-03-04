// 获取外观数据
export const FETCH_APPEARANCE_LIST_SUCCESS = 'fetch_appearance_list_success';
export const FETCH_APPEARANCE_LIST_FAIL = 'fetch_appearance_list_fail';
export const FETCH_APPEARANCE_LIST_CANCEL = 'fetch_appearance_list_cancel';

export const fetchAppearanceListSuccessAC = opts => ({
  type: FETCH_APPEARANCE_LIST_SUCCESS,
  payload: opts
})

export const fetchAppearanceListFailAC = opts => ({
  type: FETCH_APPEARANCE_LIST_SUCCESS,
  payload: opts
})

export const fetchAppearanceListCancelAc = opts => ({
  type: FETCH_APPEARANCE_LIST_CANCEL,
  payload: opts
})