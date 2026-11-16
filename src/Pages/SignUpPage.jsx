import { useNavigate } from 'react-router';
import SignUpLayout from '../Components/SignUpLayout';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/dashboard');
  };

  return <SignUpLayout formSubmit={handleSignUp} />;
};

export default SignUpPage;
