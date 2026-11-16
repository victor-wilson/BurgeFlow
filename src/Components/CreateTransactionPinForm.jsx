import { useState } from 'react';
import './CreateTransactionPinForm.css';

const CreateTransactionPinForm = ({ onComplete }) => {
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
const submit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!/^\d{6}$/.test(pin)) {
      form.elements.pin.setCustomValidity('PIN must contain exactly 6 digits');
      form.reportValidity();
      return;
    }

    if (!/^\d{6}$/.test(confirmPin)) {
      form.elements.confirmPin.setCustomValidity(
        'PIN must contain exactly 6 digits',
      );
      form.reportValidity();
      return;
    }

    if (pin !== confirmPin) {
      form.elements.confirmPin.setCustomValidity('PINs do not match');
      form.reportValidity();
      return;
    }

    onComplete();
  };

  return (
    <section className="transaction-pin-form">
      <form className="transaction-pin-form__fields" onSubmit={submit}>
        <h1 className="transaction-pin-form__title">Create Transaction Pin</h1>
        <p className="transaction-pin-form__subtitle">
          Please set up your preferred transaction PIN
        </p>

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

        <label className="transaction-pin-form__notice">
          <input type="checkbox" defaultChecked />
          <span id="pin-help">
            Your transaction PIN will be required to authorize payments and
            transfers.
          </span>
        </label>

        <button className="transaction-pin-form__submit" type="submit">
          Create Account
        </button>
      </form>
    </section>
  );
};

export default CreateTransactionPinForm;
