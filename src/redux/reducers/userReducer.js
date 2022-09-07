import { CHANGE_AGE, CHANGE_USERNAME } from '../actionTypes/user';

const initialState = {
  name: 'User 1',
  age: 23,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USERNAME: {
      return { ...state, name: action.payload };
    }
    case CHANGE_AGE: {
      return { ...state, age: action.payload };
    }
    default:
      return state;
  }
};

export default userReducer;
