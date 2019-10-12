import _ from 'lodash';

import { FETCH_TIMECARDS } from '../actions/types';

const timecardsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TIMECARDS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default timecardsReducer;
