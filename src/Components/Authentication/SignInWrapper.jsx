import ImageAndLogo from './ImageAndLogo';
import SignInForm from './SignInForm';
import './SignInWrapper.css';

const SignInWrapper = ({ formSubmit }) => {
  return (
    <main className="sign-in-wrapper">
      <div className="sign-in-wrapper__frame">
        <section className="sign-in-wrapper__artwork">
          <ImageAndLogo />
        </section>
        <SignInForm formSubmit={formSubmit} key={formSubmit} />
      </div>
    </main>
  );
};

export default SignInWrapper;
