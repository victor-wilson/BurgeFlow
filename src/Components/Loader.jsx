import { CircleLoader } from 'react-spinners';

const Loader = () => {
  return (
    <span className="mx-auto block w-fit">
      <CircleLoader size={20} color="#ffffff" aria-label="Signing in" />
    </span>
  )
}

export default Loader