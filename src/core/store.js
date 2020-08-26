import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { all } from "redux-saga/effects";
import listTripReducer from './listTrip/reducer';
import { watchListTrip } from './listTrip/saga';



const reducers = combineReducers({
  listTrip: listTripReducer,
})

function* sagas() {
  yield all([watchListTrip()])
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas)

export default store;