import { useState } from 'react';
import './ValidateEmailForm.css';

const ValidateEmailForm = ({ onComplete }) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');

  const resendCode = () => {
    setCode(['', '', '', '', '', '']);
    setError('');
  };

  const updateDigit = (index, value) => {
    const digit = value.replace(/\D/g, '').slice(0, 1);
    const updatedCode = [...code];
    updatedCode[index] = digit;
    setCode(updatedCode);
    setError('');
  };

  const submit = (event) => {
    event.preventDefault();

    if (code.some((digit) => digit === '')) {
      setError('Enter the 6-digit code to continue.');
      return;
    }

    onComplete();
  };

  const isCodeComplete = code.every((digit) => digit !== '');

  return (
    <section className="validate-email-form">
      <form className="validate-email-form__fields" onSubmit={submit}>
        <h1 className="validate-email-form__title">Validate email</h1>
        <p className="validate-email-form__subtitle">
          Enter the 6 digit code sent to your email address to verify your
          account
        </p>

        <div
          className="validate-email-form__code-inputs"
          role="group"
          aria-label="6-digit email verification code"
        >
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              pattern="[0-9]"
              maxLength={1}
              value={digit}
              onChange={(event) => updateDigit(index, event.currentTarget.value)}
              aria-label={`Digit ${index + 1} of 6`}
              required
            />
          ))}
        </div>

        {error && (
          <p className="validate-email-form__error" role="alert">
            {error}
          </p>
        )}

        <button
          className="validate-email-form__continue"
          type="submit"
          disabled={!isCodeComplete}
        >
          Continue
        </button>

        <p className="validate-email-form__resend">
          Didn&apos;t receive the code?{' '}
          <button type="button" onClick={resendCode}>
            Re-send OTP Code
          </button>
        </p>
      </form>
    </section>
  );
};

export default ValidateEmailForm;
