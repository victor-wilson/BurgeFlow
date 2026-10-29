import { Link } from 'react-router';
import burgeImage from '../assets/Images/burgeImage.png';
import burgeLogo from '../assets/Images/burgeLogo.png';
import google from '../assets/Images/google.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLock,
  faEye,
} from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const SignInWrapper = () => {
  return (
    <main className="grid min-h-screen w-full grid-cols-1 bg-white p-3 font-sans text-[#202127] lg:grid-cols-[39%_1fr]">
      <section className="relative hidden min-h-[calc(100svh-24px)] flex-col rounded-[20px] bg-[#f7f8f9] p-10 lg:flex">
        <img src={burgeLogo} alt="BudgeFlow" className="w-[150px]" />
        <img
          src={burgeImage}
          alt="A person managing time beside a pink piggy bank"
          className="absolute left-1/2 top-1/2 w-full max-w-[500px] -translate-x-1/2 -translate-y-1/2"
        />
      </section>

      <section className="relative flex min-h-[calc(100svh-24px)] items-center justify-center px-5 py-20 sm:px-10">
        <p className="absolute right-5 top-8 text-xs text-[#a3a3a3] sm:right-10 lg:right-[9%]">
          Don’t have an account?{' '}
          <Link to="#sign-up" className="ml-1 font-medium text-[#621424]">
            Sign Up
          </Link>
        </p>

        <form
          className="w-full max-w-[350px] lg:translate-y-6"
          onSubmit={(event) => event.preventDefault()}
        >
          <h1 className="mb-2 text-[40px] font-bold leading-tight tracking-tight">
            Sign in
          </h1>
          <p className="mb-8 text-xs">start managing and tracking your funds</p>

          <label htmlFor="identity" className="mb-3 block text-xs font-medium">
            Email/ username/ mobile number
          </label>
          <div className="mb-4 flex h-12 items-center gap-3 rounded-[18px] border border-[#e9e9e9] bg-[#f7f7f7] px-4">
            <FontAwesomeIcon
              icon={faEnvelope}
              aria-hidden="true"
              className="h-5 w-5 shrink-0"
            />
            <input
              id="identity"
              name="identity"
              autoComplete="username"
              placeholder="Email, username or mobile number"
              className="min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-[#777]"
            />
          </div>

          <label htmlFor="password" className="mb-3 block text-xs font-medium">
            Password
          </label>
          <div className="flex h-12 items-center gap-3 rounded-[18px] border border-[#e9e9e9] bg-[#f7f7f7] px-4">
            <FontAwesomeIcon
              icon={faLock}
              aria-hidden="true"
              className="h-5 w-5 shrink-0"
            />
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              className="min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-[#777]"
            />
            <button type="button" aria-label="Show password" className="text-[#aaa]">
              <FontAwesomeIcon
                icon={faEye}
                aria-hidden="true"
                className="h-5 w-5"
              />
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
            className="h-12 w-full rounded-[16px] bg-[#621424] text-sm font-medium text-white hover:bg-[#7a1b30] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#621424]"
          >
            Sign in
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
            <img src={googleIcon} alt="" className="h-5 w-5 object-contain" />
            Sign in with Google
          </button>
        </form>
      </section>
    </main>
  )
}

export default SignInWrapper
