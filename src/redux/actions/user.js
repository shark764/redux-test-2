import { CHANGE_AGE, CHANGE_USERNAME } from '../actionTypes/user';

export const changeUsersAge = (age) => ({
  type: CHANGE_AGE,
  payload: age,
});

export const changeUsersName = (name) => ({
  type: CHANGE_USERNAME,
  payload: name,
});
