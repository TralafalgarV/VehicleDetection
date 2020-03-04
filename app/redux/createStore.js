import {
  compose,
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import {
  createLogger,
} from 'redux-logger';
import rootReducer from './reducers';

const middlewares = [thunk];
const logger = createLogger(/* args */)
if(__DEV__){
  middlewares.push(logger)
}


function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers/index').default;
      store.replaceReducer(nextRootReducer);
    })
  }

  return store;
}

export default configureStore();