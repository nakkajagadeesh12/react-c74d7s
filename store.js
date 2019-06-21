import { createStore, applyMiddleware } from 'redux';
import storeReducer from './reducer';
import sagaMethod from './saga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(storeReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagaMethod);

export default store;