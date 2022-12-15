import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getApplication } from '../api/common_auth.api';

export default function Login() {
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
    getApplication(params.idApp).then(app => {
      sessionStorage.setItem('app', JSON.stringify(app.data));
      redirect('/login');
    });
  }, []);
}
