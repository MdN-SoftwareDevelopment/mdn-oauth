import { getUser } from '../api/common_auth.api';

const emailRegex = /^[a-zA-Z0-9_.]+@(hotmail|gmail|yahoo|outlook)\.com?$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W])([a-zA-Z\d\W]){6,15}$/;

export const validateEmail = email => {
  return Boolean(email.match(emailRegex));
};

export const validatePassword = password => {
  return Boolean(password.match(passwordRegex));
};

export const verifyExistUser = async (idApp, email) => {
  try {
    const response = await getUser(idApp, email);
    return response.data.message !== 'User can be registered';
  } catch (error) {
    throw new Error(error);
  }
};

export const verifyCredentials = async (idApp, email, password) => {
  try {
    const response = await getUser(idApp, email);
    return response.data.message === 'User can be registered'
      ? false
      : response.data.password === password;
  } catch (error) {
    throw new Error(error);
  }
};
