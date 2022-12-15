import { Route, Routes } from 'react-router-dom';
import LoadLogin from './pages/LoadLogin';
import LoadSignUp from './pages/LoadSignUp';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';

export default function App() {
  return (
    <div className='bg-[#b8bec3] flex flex-col h-screen items-center'>
      <Routes>
        <Route path='/login/:idApp' element={<Login />} />
        <Route path='/signup/:idApp' element={<SignUp />} />
        <Route path='/login' element={<LoadLogin />} />
        <Route path='/signup' element={<LoadSignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
