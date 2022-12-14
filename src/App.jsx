import { Route, Routes } from 'react-router-dom';
import { AppContextProvider } from './context/AppProvider';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import LoadLogin from './pages/LoadLogin';
import LoadSignUp from './pages/LoadSignUp';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className='bg-[#b8bec3] flex flex-col h-screen items-center'>
      <AppContextProvider>
        <Routes>
          <Route path='/login/:idApp' element={<Login />} />
          <Route path='/signup/:idApp' element={<SignUp />} />
          <Route path='/login' element={<LoadLogin />} />
          <Route path='/signup' element={<LoadSignUp />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AppContextProvider>
    </div>
  );
}
