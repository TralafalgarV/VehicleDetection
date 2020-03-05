/**
 * 中间件只是通过柯里化逐级增强的 dispatch
 *
 * @param {*} store 
 * @param {*} next
 * @param {*} action
 */

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