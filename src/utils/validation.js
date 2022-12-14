import { verifyCredentialsUser, verifyExistUser } from '../api/common_auth.api';

const emailRegex = /^[a-zA-Z0-9_.]+@(hotmail|gmail|yahoo|outlook)\.com?$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*\W)([a-zA-Z\d\W]){6,15}$/;

export const validateEmail = email => {
  return Boolean(email.match(emailRegex));
};

export const validatePassword = password => {
  return Boolean(password.match(passwordRegex));
};

export const verifyExist = async (idApp, email) => {
  try {
    const response = await verifyExistUser(idApp, email);
    return response.data.message === 'User already registered';
  } catch (error) {
    throw new Error(error);
  }
};

export const verifyCredentials = async (idApp, email, password) => {
  password = window.btoa(password);
  try {
    const response = await verifyCredentialsUser(idApp, email, password);
    return (
      response.data.message === 'Invalid Password' ||
      response.data.message === 'User not found'
    );
  } catch (error) {
    throw new Error(error);
  }
};
