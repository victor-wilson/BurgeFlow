import { useNavigate } from 'react-router';
import CreateTransactionPinLayout from '../Components/Authentication/CreateTransactionPinLayout';

const CreateTransactionPinPage = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate('/dashboard');
  };

  return <CreateTransactionPinLayout onComplete={handleComplete} />;
};

export default CreateTransactionPinPage;
