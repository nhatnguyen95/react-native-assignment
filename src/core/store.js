import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { all } from "redux-saga/effects";
import homeReducer from './home/reducer';
import { watchHome } from './home/saga'


const reducers = combineReducers({
  home: homeReducer,
})

function* sagas() {
  yield all([watchHome()])
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas)

export default store;