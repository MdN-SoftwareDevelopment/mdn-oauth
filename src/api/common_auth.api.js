import axios from 'axios';

export const getApplication = async idApp =>
  await axios.get(`http://localhost:4000/api/v1/auth/application/${idApp}`);

export const postUser = async user =>
  await axios.post(`http://localhost:4000/api/v1/auth/user/new/`, user);

export const getUser = async (idApp, email) =>
  await axios.get(
    `http://localhost:4000/api/v1/auth/user/verify/${idApp}/${email}`
  );

export const getUserToken = async (idApp, email) =>
  await axios.get(
    `http://localhost:4000/api/v1/auth/user/token/${idApp}/${email}`
  );
