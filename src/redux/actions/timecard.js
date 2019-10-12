import axios from 'axios';
import { FETCH_TIMECARDS } from './types';

export const fetchTimeCard = num => async dispatch => {
  const res = await axios.get(
    `http://localhost:3004/employess/${num}/timecards`
  );

  dispatch({
    type: FETCH_TIMECARDS,
    payload: res.data
  });
};
