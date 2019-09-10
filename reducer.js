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
        ...state,
        loading: true,
      }
    case 'GET_SECOND_TABLE':
      return {
        ...state,
        loading: true,
      }
    case 'GOT_TABLE_DATA':
      return {
        ...state,
        data: action.response,
      }
    case 'ERR_TABLE':
      return {
        ...state,
        error: true
      }
    default:
      return state;
  }
}

export default storeReducer;