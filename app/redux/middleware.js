// 中间件只是逐级增强 dispatch
export const logger1 = store => next => action => {
  console.log('logger1');
  next(action);
}

export const thunk = store => next => action => {
  console.log('thunk');
  typeof action === 'function' ? action(store.dispatch) : next(action)
}

export const logger2 = store => next => action => {
  console.log('logger2');
  next(action);
}