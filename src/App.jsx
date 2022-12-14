import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';

export default function App() {
  return (
    <div className='bg-[#b8bec3] flex flex-col h-screen items-center'>
      <Routes>
        <Route path='/login/:idApp' element={<Login />} />
        <Route path='/signup/:idApp' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
