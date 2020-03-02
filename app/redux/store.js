export const createStore = (reducer, heightener) => {
  // heightener是一个高阶函数,用于增强createStore
  // 如果存在heightener,则执行增强后的createStore

  if (heightener) {
    return heightener(createStore)(reducer);
  }

  let currentState={}; // 公共状态
  let observers = []   //观察者队列

  // getter
  function getState() {
    return currentState;
  }

  // setter
  function dispatch(action) {
    // 更新 store
    currentState = reducer(currentState, action);
    // 执行观察者监听函数（ react-redux中 fn 为 setState 或者 forceUpdate ）
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

export const applyMiddleware = (...middlewares) => createStore => reducer => {
  const store = createStore(reducer);
  let { getState, dispatch } = store;
  const params = {
    getState,
    dispatch: (action) => dispatch(action),
  };

  const middlewareArr = middlewares.map(middleware => middleware(params));

  dispatch = compose(...middlewareArr)(dispatch);
  return { ...store, dispatch };
}

//compose这一步对应了middlewares.reverse(),是函数式编程一种常见的组合方法
function compose(...fns) {
  if (fns.length === 0) return arg => arg;
  if (fns.length === 1) return fns[0];
  return fns.reduce((res, cur) => (...args) => res(cur(...args)));
}