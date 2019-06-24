import { put, call, takeLatest } from 'redux-saga/effects';
import { gotTableData, tableError } from './actions';


function* getTable() {
  try {
    const response = yield call(() => fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json()));
    yield put(gotTableData(response))
  }
  catch (error) {
    yield put(tableError(error));
  }
}

function* getTab() {
  console.log("enter1")
  try {
    const response1 = yield call(() => fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.join()));
    console.log("23")
    yield put(gotTableData(response1))
    console.log("enter2")
  }
  catch (error) {
    yield put(tableError(error))
  }
}

export default function* sagaMethod() {
  yield takeLatest('GET_TABLE_DATA', getTable);
  yield takeLatest('GET_SECOND_TABLE', getTab);
}
