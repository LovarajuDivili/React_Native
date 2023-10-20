import HomePage from '../Screens/HomePage';
import AuthPage from '../Authentications/AuthPage';
import { authenticated } from '../../configStore/selector';
import { useSelector } from 'react-redux';

const LayoutPage = () => {
  const isAuth = useSelector(authenticated);

  return <>{isAuth ? <HomePage /> : <AuthPage />}</>;
};


export default LayoutPage;
