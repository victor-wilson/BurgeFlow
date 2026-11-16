import { CircleLoader } from 'react-spinners';
import './Loader.css';

const Loader = ({ label = 'Signing in' }) => {
  return (
    <span className="loader">
      <CircleLoader size={20} color="#ffffff" aria-label={label} />
    </span>
  )
}

export default Loader