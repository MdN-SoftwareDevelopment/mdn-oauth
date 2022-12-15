import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTokenUser } from '../api/common_auth.api';
import Input from '../components/Input';
import {
  validateEmail,
  validatePassword,
  verifyCredentials
} from '../utils/validation';

export default function LoadLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [app, setApp] = useState({});

  useEffect(() => {
    setApp(JSON.parse(sessionStorage.getItem('app')));
  }, []);

  const loginUser = async e => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert('Email is not valid');
      return;
    }
    if (!validatePassword(password)) {
      alert('Password is not valid');
      return;
    }
    if (await verifyCredentials(app.idApp, email, password)) {
      alert('Email or Password is not correct');
      return;
    }
    const token = await getTokenUser(app.idApp, email);
    window.open(`${app.redirect_url + token.data.token}`, '_self');
  };

  return app === null ? (
    <div
      className='grid bg-white p-10 
      rounded-[24px] shadow-2xl m-auto text-black font-bold
      text-4xl'
    >
      Please Login or Register on a valid application first.
    </div>
  ) : (
    <div
      className='grid grid-cols-6 gap-10 bg-white p-10 
      rounded-[24px] shadow-2xl m-auto'
    >
      <div className='col-span-2 flex flex-col justify-center w-full'>
        <img className='flex w-[350px] shadow-lg my-5' src={app.image_url} />
        <label
          className='flex justify-center font-semibold text-[26px]
                  font-sans break-words text-center'
        >
          {app.name}
        </label>
      </div>
      <form
        onSubmit={loginUser}
        className='col-span-4 m-auto flex flex-col justify-center w-full'
      >
        <Input
          type='email'
          value={email}
          setValue={setEmail}
          placeholder='Please enter your email'
          isRequired
        >
          Email
        </Input>
        <Input
          type='password'
          value={password}
          setValue={setPassword}
          placeholder='Please enter your password'
          isRequired
        >
          Password
        </Input>
        <button
          type='submit'
          className='w-full rounded-3xl border-transparent border py-1 my-3 
          bg-[#276471] text-[32px] font-aclonica text-white shadow-lg 
          hover:bg-[#276471]/90 active:bg-[#249898] transition duration-100 
          active:ring-2 active:ring-[#276471] active:ring-offset-2
          active:transform active:scale-95'
        >
          Login
        </button>
        <div className='flex justify-end'>
          <Link
            to='/signup'
            className='mt-2 font-semibold text-[20px] hover:underline 
            active:transform active:scale-95 transition duration-100'
          >
            No tienes una cuenta aun?
          </Link>
        </div>
      </form>
    </div>
  );
}
