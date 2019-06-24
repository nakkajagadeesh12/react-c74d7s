import { GET_TABLE_DATA, GOT_TABLE_DATA, ERR_TABLE } from './constants';

const initialState = {
  data: '',
  loading: false,
  error: false,
}

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TABLE_DATA':
      return {
        data: '',
        loading: true,
        error: false
      }
    case 'GET_SECOND_TABLE':
      return {
        data: '',
        loading: true,
        error: false
      }
    case 'GOT_TABLE_DATA':
      return {
        data: action.response,
        loading: false,
        error: false
      }
    case 'ERR_TABLE':
      return {
        data: '',
        loading: false,
        error: true
      }
    default:
      return state;
  }
}

export default storeReducer;