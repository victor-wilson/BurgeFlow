import { useState } from 'react';
import { Link } from 'react-router';
import * as Switch from '@radix-ui/react-switch';
import './CreateTransactionPinForm.css';

const CreateTransactionPinForm = () => {
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');

  const updatePin = (event) => {
    const { name, value, form } = event.currentTarget;
    form.elements.pin.setCustomValidity('');
    form.elements.confirmPin.setCustomValidity('');

    if (name === 'pin') {
      setPin(value.replace(/\D/g, '').slice(0, 6));
      return;
    }

    setConfirmPin(value.replace(/\D/g, '').slice(0, 6));
  };
  const continueToEmailValidation = (event) => {
    const form = event.currentTarget.closest('form');

    if (!form) {
      event.preventDefault();
      return;
    }

    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      return;
    }

    if (!/^\d{6}$/.test(pin)) {
      event.preventDefault();
      form.elements.pin.setCustomValidity('PIN must contain exactly 6 digits');
      form.reportValidity();
      return;
    }

    if (!/^\d{6}$/.test(confirmPin)) {
      event.preventDefault();
      form.elements.confirmPin.setCustomValidity(
        'PIN must contain exactly 6 digits',
      );
      form.reportValidity();
      return;
    }

    if (pin !== confirmPin) {
      event.preventDefault();
      form.elements.confirmPin.setCustomValidity('PINs do not match');
      form.reportValidity();
      return;
    }

  };

  return (
    <section className="transaction-pin-form">
      <form
        className="transaction-pin-form__fields"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="transaction-pin-form__heading">
          <h1 className="transaction-pin-form__title">
            Create Transaction Pin
          </h1>
          <p className="transaction-pin-form__subtitle">
            Please set up your preferred transaction PIN
          </p>
        </div>

        <div className="transaction-pin-form__field">
          <label htmlFor="pin">Create Transaction PIN</label>
          <input
            id="pin"
            name="pin"
            type="password"
            inputMode="numeric"
            autoComplete="new-password"
            placeholder="******"
            value={pin}
            onChange={updatePin}
            required
            aria-describedby="pin-help"
          />
        </div>

        <div className="transaction-pin-form__field transaction-pin-form__field--confirm">
          <label htmlFor="confirmPin">Confirm Transaction PIN</label>
          <input
            id="confirmPin"
            name="confirmPin"
            type="password"
            inputMode="numeric"
            autoComplete="new-password"
            placeholder="******"
            value={confirmPin}
            onChange={updatePin}
            required
          />
        </div>

        <div className="transaction-pin-form__notice">
          <Switch.Root
            className="transaction-pin-form__switch"
            defaultChecked
            aria-labelledby="pin-help"
          >
            <Switch.Thumb className="transaction-pin-form__switch-thumb" />
          </Switch.Root>
          <span id="pin-help">
            Your transaction PIN will be required to authorize payments and
            transfers.
          </span>
        </div>

        <Link
          to="/validate-email"
          onClick={continueToEmailValidation}
          className="transaction-pin-form__submit"
        >
          Create Account
        </Link>
      </form>
    </section>
  );
};

export default CreateTransactionPinForm;
