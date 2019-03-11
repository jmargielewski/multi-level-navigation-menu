import axios from 'axios';
import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './types';

const fetchDataSuccess = response => ({
  type: FETCH_DATA_SUCCESS,
  payload: response,
});

const fetchDataFailure = err => ({
  type: FETCH_DATA_FAILURE,
  payload: err,
});

export const fetchData = () => async (dispatch) => {
  dispatch({ type: FETCH_DATA });
  try {
    const response = await axios.get('/data/db.json');
    if (response.status === 200) {
      dispatch(fetchDataSuccess(response.data));
    } else {
      // ignore for now
      console.error('ERROR');
    }
  } catch (err) {
    dispatch(fetchDataFailure(err));
  }
};
