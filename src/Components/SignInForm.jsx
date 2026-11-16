import google from '../assets/google.png';
import { useState } from 'react';
import Loader from './Loader';
import envelopIcon from '../assets/envelopIcon.png';
import { Link } from 'react-router';
import './SignInForm.css';


const SignInForm = ({ formSubmit }) => {

  const [userName, setUserName] = useState('Zainabadamu@gmail.com');
  const [password, setPassword] = useState('Iceberg29');
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await formSubmit({ userName, password });
    } finally {
      setIsLoading(false);
    }};


  return (
    <section className="sign-in-form">
        <p className="sign-in-form__signup-prompt">
          Don't have an account?{' '}<Link to="/signup" className="sign-in-form__link sign-in-form__link--signup">
            Sign Up
          </Link>
        </p>

        <form
          className="sign-in-form__fields"
          onSubmit={submit}
        >
          <h1 className="sign-in-form__title">
            Sign in
          </h1>
          <p className="sign-in-form__subtitle">start managing and tracking your funds</p>

          <label htmlFor="identity" className="sign-in-form__label">
            Email, username or mobile number
          </label>
          <div className="sign-in-form__input-shell sign-in-form__input-shell--identity">
            <img 
              src={envelopIcon}
              alt="envelop-icon"
              aria-hidden="true"
              className="sign-in-form__envelope-icon"
            />
            <input
              id="identity"
              name="identity"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              autoComplete="username"
              placeholder="Email, username or mobile number"
              className="sign-in-form__input"
            />
          </div>

          <label htmlFor="password" className="sign-in-form__label">
            Password
          </label>
          <div className="sign-in-form__input-shell">
            <svg
              viewBox="0 0 20 20"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M6 9V6a4 4 0 0 1 8 0v3" />
              <rect x="3.5" y="9" width="13" height="8" rx="2" />
              <circle cx="7" cy="13" r=".5" fill="currentColor" />
              <circle cx="10" cy="13" r=".5" fill="currentColor" />
              <circle cx="13" cy="13" r=".5" fill="currentColor" />
            </svg>

            <input
              id="password"
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              type={isPasswordVisible? 'text' : 'password'}
              autoComplete="current-password"
              placeholder="Password"
              value={password}
              className="sign-in-form__input"
            />
            <button type="button" 
            aria-label= { isPasswordVisible ? 'Hide password' : 'Show password'}
            onClick={ () => setIsPasswordVisible((visible) => !visible) }
            className="sign-in-form__password-toggle"
            >

              <svg
                viewBox="0 0 20 20"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                >
                <path d="M2 10s2.9-5 8-5 8 5 8 5-2.9 5-8 5-8-5-8-5Z" />
                <circle cx="10" cy="10" r="2" />
              </svg>
            </button>
          </div>

          <div className="sign-in-form__options">
            <label className="sign-in-form__remember">
              <input type="checkbox" name="remember" />
              Remember me
            </label>
            <Link to="#forgot-password" className="sign-in-form__link sign-in-form__link--forgot">
              Forgot password
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="sign-in-form__submit"
          >
            {isLoading ? (<Loader />) : ('Sign in')}
          </button>
          <div className="sign-in-form__divider">
            <span />
            <span>Or continue with</span>
            <span />
          </div>

          <button
            type="button"
            className="sign-in-form__google"
          >
            <img src={google} alt="" />
            Sign in with Google
          </button>
        </form>
      </section>

  )
}

export default SignInForm