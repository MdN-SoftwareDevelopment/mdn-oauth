import axios from 'axios';

export const getApplication = async idApp =>
  await axios.get(
    `https://mdncommon-auth-server-production.up.railway.app/api/v1/auth/application/${idApp}`
  );

export const postUser = async user =>
  await axios.post(
    `https://mdncommon-auth-server-production.up.railway.app/api/v1/auth/user/new/`,
    user
  );

export const getUser = async (idApp, email) =>
  await axios.get(
    `https://mdncommon-auth-server-production.up.railway.app/api/v1/auth/user/verify/${idApp}/${email}`
  );

export const getUserToken = async (idApp, email) =>
  await axios.get(
    `https://mdncommon-auth-server-production.up.railway.app/api/v1/auth/user/token/${idApp}/${email}`
  );
