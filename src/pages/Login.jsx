import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useApp } from '../context/AppProvider';

export default function Login() {
  const { loadApp } = useApp();

  const params = useParams();
  const navigate = useNavigate();

  const redirect = useCallback(
    direction =>
      navigate(direction, {
        replace: true
      }),
    [navigate]
  );

  useEffect(() => {
    loadApp(params.idApp).then(_user => {
      redirect('/login');
    });
  }, []);
}
