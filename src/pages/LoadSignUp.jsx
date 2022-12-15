import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTokenUser, postUser } from '../api/common_auth.api';
import Input from '../components/Input';
import {
  validateEmail,
  validatePassword,
  verifyExist
} from '../utils/validation';

export default function LoadSignUp() {
  const [app, setApp] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState('/assets/addImage.png');
  const [user, setUser] = useState({});

  const imageRef = useRef();

  useEffect(() => {
    setApp({
      ...JSON.parse(localStorage.getItem('app')),
      id: localStorage.getItem('id')
    });
    setUser({
      email,
      password,
      user_image: image,
      id_role: app.id_default_user
    });
  }, [email, password, image]);

  const changeImage = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    }
  };

  const focusImage = _e => {
    imageRef.current.click();
  };

  const signUpUser = e => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert('Email is not valid');
      return;
    }
    verifyExist(app.id, email).then(res => {
      if (res) {
        alert('Email already exists');
        return;
      }
      if (!validatePassword(password)) {
        alert('Password is not valid');
        return;
      }
      if (confirmPassword !== password) {
        alert('Passwords do not match');
        return;
      }
      postUser(user).then(_user => {
        getTokenUser(app.id, email).then(token => {
          window.open(`${app.redirect_url + token.data.token}`, '_self');
        });
      });
    });
  };

  return app === null ? (
    <div
      className='grid bg-white p-10 
      rounded-[24px] shadow-2xl m-auto text-black font-bold
      text-4xl'
    >
      Please Login or Register on a valid application first
    </div>
  ) : (
    <div
      className='grid grid-cols-10 gap-10 bg-white p-10 
      rounded-[24px] shadow-2xl m-auto'
    >
      <div className='col-span-3 flex flex-col justify-center w-full'>
        <img className='flex w-[350px] shadow-lg my-5' src={app.image_url} />
        <label
          className='flex justify-center font-semibold text-[26px]
                  font-sans break-words text-center'
        >
          {app.name}
        </label>
      </div>
      <form
        onSubmit={signUpUser}
        className='col-span-7 m-auto flex flex-col justify-center w-full'
      >
        <div className='flex flex-col'>
          <img
            className='flex justify-center w-[200px] m-auto cursor-pointer 
            mb-[-15px] rounded-full active:transform active:scale-95 
            transition duration-100'
            onClick={focusImage}
            width='300'
            src={image}
          />

          <input
            ref={imageRef}
            className='hidden absolute'
            type='file'
            onChange={changeImage}
            accept='image/*'
          />
        </div>
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
        <Input
          type='password'
          value={confirmPassword}
          setValue={setConfirmPassword}
          placeholder='Please confirm your password'
          isRequired
        >
          Confirm Password
        </Input>
        <button
          type='submit'
          className='w-full rounded-3xl border-transparent border py-1 my-3 
          bg-[#276471] text-[32px] font-aclonica text-white shadow-lg 
          hover:bg-[#276471]/90 active:bg-[#249898] transition duration-100 
          active:ring-2 active:ring-[#276471] active:ring-offset-2
          active:transform active:scale-95'
        >
          SignUp
        </button>
        <div className='flex justify-end'>
          <Link
            to='/login'
            className='mt-2 font-semibold text-[20px] hover:underline 
            active:transform active:scale-95 transition duration-100'
          >
            Ya tienes una cuenta?
          </Link>
        </div>
      </form>
    </div>
  );
}
