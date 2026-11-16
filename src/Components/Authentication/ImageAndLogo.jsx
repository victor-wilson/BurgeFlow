import burgeImage from '../../assets/burgeImage.png';
import burgeLogo from '../../assets/burgeLogo.png';
import './ImageAndLogo.css';

const ImageAndLogo = ({ variant = 'signin' }) => (
  <div className={`image-and-logo image-and-logo--${variant}`}>
    <img src={burgeLogo} alt="BudgeFlow" className="image-and-logo__logo" />
    <img
      src={burgeImage}
      alt="A person managing time beside a pink piggy bank"
      className="image-and-logo__illustration"
    />
  </div>
);

export default ImageAndLogo;
