import google from '../assets/google.png';
import { useState } from 'react';
import Loader from './Loader';
import envelopIcon from '../assets/envelopIcon.png';
import { Link } from 'react-router';


const SignInForm = () => {

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
    <section className="relative flex min-h-[calc(100svh-24px)] items-center justify-center px-5 py-20 sm:px-10">
        <p className="absolute right-5 top-8 text-xs text-[#a3a3a3] sm:right-10 lg:right-[9%]">
          Don't have an account?{' '}<Link to="#sign-up" className="ml-1 font-medium text-[#621424]">
            Sign Up
          </Link>
        </p>

        <form
          className="w-full max-w-[350px] lg:translate-y-6"
          onSubmit={submit}
        >
          <h1 className="mb-2 text-[40px] font-bold leading-tight tracking-tight">
            Sign in
          </h1>
          <p className="mb-8 text-xs">start managing and tracking your funds</p>

          <label htmlFor="identity" className="mb-3 block text-xs font-medium">
            Email, username or mobile number
          </label>
          <div className="mb-4 flex h-12 items-center gap-3 rounded-[18px] border border-[#e9e9e9] bg-[#f7f7f7] px-4">
            <img 
              src={envelopIcon}
              alt="envelop-icon"
              aria-hidden="true"
              className="h-5 w-5 shrink-0"
            />
            <input
              id="identity"
              name="identity"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              autoComplete="username"
              placeholder="Email, username or mobile number"
              className="min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-[#777]"
            />
          </div>

          <label htmlFor="password" className="mb-3 block text-xs font-medium">
            Password
          </label>
          <div className="flex h-12 items-center gap-3 rounded-[18px] border border-[#e9e9e9] bg-[#f7f7f7] px-4">
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
              className="min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-[#777]"
            />
            <button type="button" 
            aria-label= { isPasswordVisible ? 'Hide password' : 'Show password'}
            onClick={ () => setIsPasswordVisible((visible) => !visible) }
            className="text-[#aaa]"
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

          <div className="mb-10 mt-4 flex items-center justify-between text-xs">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="remember" className="accent-[#621424]" />
              Remember me
            </label>
            <Link to="#forgot-password" className="text-[#ff4772]">
              Forgot password
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="h-12 w-full rounded-[16px] bg-[#621424] text-sm font-medium text-white hover:bg-[#7a1b30] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#621424]"
          >
            {isLoading ? (<Loader />) : ('Sign in')}
          </button>
          <div className="my-6 flex items-center gap-2 text-xs text-[#aaa]">
            <span className="h-px flex-1 bg-[#ededed]" />
            <span>Or continue with</span>
            <span className="h-px flex-1 bg-[#ededed]" />
          </div>

          <button
            type="button"
            className="flex h-12 w-full items-center justify-center gap-3 rounded-[16px] border border-[#e9e9e9] text-xs text-[#999] hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#621424]"
          >
            <img src={google} alt="" className="h-5 w-5 object-contain" />
            Sign in with Google
          </button>
        </form>
      </section>

  )
}

export default SignInForm