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

export default function* sagaMethod() {
  yield takeLatest('GET_TABLE_DATA', getTable);
}
