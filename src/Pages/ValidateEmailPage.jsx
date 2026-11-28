import { useNavigate } from 'react-router';
import ValidateEmail from '../Components/Authentication/ValidateEmail';

const ValidateEmailPage = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate('/create-transaction-pin');
  };

  return <ValidateEmail onComplete={handleComplete} />;
};

export default ValidateEmailPage;
