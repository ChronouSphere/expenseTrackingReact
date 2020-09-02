import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer/index';
import rootSaga from '../saga/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

// Exports
export default store;
