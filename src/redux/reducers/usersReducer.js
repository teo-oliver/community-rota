import _ from 'lodash';

import { FETCH_USER } from '../actions/types';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default usersReducer;
