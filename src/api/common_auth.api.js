import axios from 'axios';

const API = axios.create({
  baseURL: 'https://mdncommon-auth-server-production.up.railway.app/api/v1/auth'
});

export const getApplication = async idApp => await API.get(`/app/${idApp}`);

export const postUser = async user => await API.post(`/user/new/`, user);

export const verifyExistUser = async (idApp, email) =>
  await API.get(`/user/verify/exist/${idApp}/${email}`);

export const verifyCredentialsUser = async (idApp, email, password) =>
  await API.get(`/user/verify/credentials/${idApp}/${email}/${password}`);

export const getTokenUser = async (idApp, email) =>
  await API.get(`/user/token/${idApp}/${email}`);
