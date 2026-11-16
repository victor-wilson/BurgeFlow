import ImageAndLogo from './ImageAndLogo';
import SignUpForm from './SignUpForm';
import './SignUpLayout.css';

const SignUpLayout = ({ formSubmit }) => (
  <main className="sign-up-layout">
    <div className="sign-up-layout__card">
      <section className="sign-up-layout__artwork">
        <ImageAndLogo variant="signup" />
      </section>
      <div className="sign-up-layout__form-panel">
        <SignUpForm formSubmit={formSubmit} />
      </div>
    </div>
  </main>
);

export default SignUpLayout;

