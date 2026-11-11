import burgeImage from '../assets/burgeImage.png';
import burgeLogo from '../assets/burgeLogo.png';
import SignInForm from './SignInForm';

const SignInWrapper = ({ formSubmit }) => {

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

      <SignInForm key={formSubmit} />

    </main>
  )};

export default SignInWrapper
