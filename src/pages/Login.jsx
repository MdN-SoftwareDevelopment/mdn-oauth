import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getApplication, getUser } from '../api/common_auth.api';
import Input from '../components/Input';
import {
  validateEmail,
  validatePassword,
  verifyCredentials
} from '../utils/validation';

export default function SignUp() {
  const [app, setApp] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const params = useParams();

  useEffect(() => {
    loadApp().then(res => {
      setApp(res.data);
    });
  }, []);

  const loadApp = async () => {
    try {
      return await getApplication(params.idApp);
    } catch (error) {
      throw new Error(error);
    }
  };

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
    if (await verifyCredentials(params.idApp, email, password)) {
      alert('Email or Password is not correct');
      return;
    }
    const token = await getUser(params.idApp, email);
    window.open(`${app.redirect_url + token.data.token}`, '_self');
  };

  return (
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
            to={`/signup/${params.idApp}`}
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
