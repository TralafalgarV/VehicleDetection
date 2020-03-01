import { reducer } from "./reducer";

export const createStore = () => {
  let currentState={}; // 公共状态
  let observers = []   //观察者队列

  // getter
  function getState() {
    return currentState;
  }

  // setter
  function dispatch(action) {
    currentState = reducer(currentState, action);
    observers.forEach(fn => fn());
  } 

  // 发布订阅
  function subscribe(fn) {
    observers.push(fn);
  }
  
  //初始化store数据
  dispatch({ type: '@@REDUX_INIT' });       

  return { getState, dispatch, subscribe };
}