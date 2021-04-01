import types from '../types';

const initial_state = {
  userData: {},
};

export default function counterReducer(state = initial_state, action) {
  switch (action.type) {
    case types.ONLOGOUT:
      return {
        ...state,
        userData: {},
      };
    case types.ONOTPVERIFY:
      const userData = {...action.payload};

      return {
        ...state,
        userData,
      };

    default: {
      return {
        ...state,
      };
    }
  }
}
