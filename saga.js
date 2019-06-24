import { put, call, takeLatest } from 'redux-saga/effects';
import { gotTableData, tableError } from './actions';


function* getTable() {
  try {
    const response = yield call(() => fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json()));
    console.log(response, "response1")
    yield put(gotTableData(response))
  }
  catch (error) {
    yield put(tableError(error));
  }
}

function* getTab() {
  try {
    const response = yield call(() => fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()));
    console.log(response, "response2")
    yield put(gotTableData(response))
  }
  catch (error) {
    yield put(tableError(error))
  }
}

export default function* sagaMethod() {
  yield takeLatest('GET_TABLE_DATA', getTable);
  yield takeLatest('GET_SECOND_TABLE', getTab);
}
