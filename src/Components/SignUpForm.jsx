import { useState } from 'react';
import { Link } from 'react-router';
import google from '../assets/google.png';
import Loader from './Loader';
import './SignUpForm.css';

const FieldIcon = ({ children }) => (
  <svg
    viewBox="0 0 20 20"
    className="sign-up-form__field-icon"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.35"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const LockIcon = () => (
  <FieldIcon>
    <path d="M6 9V6a4 4 0 0 1 8 0v3" />
    <rect x="3.5" y="9" width="13" height="8" rx="2" />
    <path d="M10 12v2" />
  </FieldIcon>
);

const EyeIcon = ({ visible }) => (
  <FieldIcon>
    <path d="M2 10s2.9-5 8-5 8 5 8 5-2.9 5-8 5-8-5-8-5Z" />
    <circle cx="10" cy="10" r="2" />
    {visible && <path d="m4 4 12 12" />}
  </FieldIcon>
);

const InputShell = ({ children }) => (
  <div className="sign-up-form__input-shell">{children}</div>
);

const SignUpForm = ({ formSubmit }) => {
  const [values, setValues] = useState({
    firstName: 'Ademu',
    lastName: 'Zainab',
    username: '@zeinabadamu1',
    mobile: '08181766509',
    email: 'Zainabadamu@gmail.com',
    password: 'password',
    confirmPassword: 'password',
  });
  const [visiblePasswords, setVisiblePasswords] = useState({
    password: false,
    confirmPassword: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const updateValue = (event) => {
    const { name, value } = event.target;
    if (name === 'password' || name === 'confirmPassword') {
      event.currentTarget.form.elements.confirmPassword.setCustomValidity('');
    }
    setValues((currentValues) => ({ ...currentValues, [name]: value }));
  };

  const togglePassword = (name) => {
    setVisiblePasswords((currentVisibility) => ({
      ...currentVisibility,
      [name]: !currentVisibility[name],
    }));
  };

  const submit = async (event) => {
    event.preventDefault();
    if (values.password !== values.confirmPassword) {
      event.currentTarget.elements.confirmPassword.setCustomValidity(
        'Passwords do not match',
      );
      event.currentTarget.reportValidity();
      return;
    }

    setIsLoading(true);
    try {
      await formSubmit();
    } finally {
      setIsLoading(false);
    }
  };

  const renderPasswordField = (name, label) => (
    <div key={name}>
      <label htmlFor={name} className="sign-up-form__label">
        {label}
      </label>
      <InputShell>
        <LockIcon />
        <input
          id={name}
          name={name}
          type={visiblePasswords[name] ? 'text' : 'password'}
          value={values[name]}
          onChange={(event) => {
            event.currentTarget.setCustomValidity('');
            updateValue(event);
          }}
          autoComplete="new-password"
          required
          className="sign-up-form__input"
        />
        <button
          type="button"
          onClick={() => togglePassword(name)}
          aria-label={`${visiblePasswords[name] ? 'Hide' : 'Show'} ${label.toLowerCase()}`}
          className="sign-up-form__password-toggle"
        >
          <EyeIcon visible={visiblePasswords[name]} />
        </button>
      </InputShell>
    </div>
  );

  return (
    <section className="sign-up-form">
      <p className="sign-up-form__signin-prompt">
        Already have an account?
        <Link to="/" className="sign-up-form__link">
          Sign In
        </Link>
      </p>

      <form
        className="sign-up-form__fields"
        onSubmit={submit}
      >
        <h1 className="sign-up-form__title">
          Sign up
        </h1>
        <p className="sign-up-form__subtitle">
          Information provided should be the same as your nin or bvn
        </p>

        <div className="sign-up-form__name-fields">
          {[
            ['firstName', 'First Name', 'given-name'],
            ['lastName', 'Last Name', 'family-name'],
          ].map(([name, label, autoComplete]) => (
            <div key={name}>
              <label htmlFor={name} className="sign-up-form__label">
                {label}
              </label>
              <InputShell>
                <input
                  id={name}
                  name={name}
                  value={values[name]}
                  onChange={updateValue}
                  autoComplete={autoComplete}
                  required
                  className="sign-up-form__input"
                />
              </InputShell>
            </div>
          ))}
        </div>

        <div className="sign-up-form__field sign-up-form__field--username">
          <label htmlFor="username" className="sign-up-form__label">
            Username
          </label>
          <InputShell>
            <input
              id="username"
              name="username"
              value={values.username}
              onChange={updateValue}
              autoComplete="username"
              required
              className="sign-up-form__input"
            />
          </InputShell>
        </div>

        <div className="sign-up-form__field sign-up-form__field--mobile">
          <label htmlFor="mobile" className="sign-up-form__label">
            Mobile Number
          </label>
          <InputShell>
            <svg
              viewBox="0 0 18 12"
              className="sign-up-form__country-flag"
              aria-label="Nigeria"
              role="img"
            >
              <rect width="6" height="12" fill="#008751" />
              <rect x="6" width="6" height="12" fill="#fff" />
              <rect x="12" width="6" height="12" fill="#008751" />
            </svg>
            <span className="sign-up-form__country-code">+234</span>
            <svg
              viewBox="0 0 12 12"
              className="sign-up-form__country-chevron"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              aria-hidden="true"
            >
              <path d="m3 4.5 3 3 3-3" />
            </svg>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              value={values.mobile}
              onChange={updateValue}
              autoComplete="tel-national"
              required
              className="sign-up-form__input"
            />
          </InputShell>
        </div>

        <div className="sign-up-form__field sign-up-form__field--email">
          <label htmlFor="email" className="sign-up-form__label">
            Email
          </label>
          <InputShell>
            <FieldIcon>
              <rect x="2.5" y="4" width="15" height="12" rx="1" />
              <path d="m3 5 7 5.5L17 5" />
            </FieldIcon>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={updateValue}
              autoComplete="email"
              required
              className="sign-up-form__input"
            />
          </InputShell>
        </div>

        <div className="sign-up-form__password-fields">
          {renderPasswordField('password', 'Password')}
          {renderPasswordField('confirmPassword', 'Confirm Password')}
        </div>

        <label className="sign-up-form__remember">
          <input
            type="checkbox"
            name="remember"
            defaultChecked
          />
          Remember me
        </label>

        <div className="sign-up-form__actions">
          <button
            type="submit"
            disabled={isLoading}
            className="sign-up-form__submit"
          >
            {isLoading ? <Loader label="Creating account" /> : 'Create Account'}
          </button>

          <div className="sign-up-form__divider">
            <span />
            <span>Or continue with</span>
            <span />
          </div>

          <button
            type="button"
            className="sign-up-form__google"
          >
            <img src={google} alt="" />
            Sign up with Google
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUpForm