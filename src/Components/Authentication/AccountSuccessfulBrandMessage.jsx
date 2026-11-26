import { Link } from 'react-router';
import { Check } from 'lucide-react';
import ImageAndLogo from './ImageAndLogo';
import './AccountSuccessfulBrandMessage.css';

const AccountSuccessfulBrandMessage = () => (
  <div className="account-successful-brand-message">
    <section className="account-successful-brand-message__artwork">
      <ImageAndLogo variant="transaction-pin" />
    </section>

    <section
      className="account-successful-brand-message__message-frame"
      aria-labelledby="account-successful-title"
    >
      <div className="account-successful-brand-message__status-frame">
        <div className="account-successful-brand-message__icon" aria-hidden="true">
          <span className="account-successful-brand-message__icon-inner" />
          <Check size={39.3038} strokeWidth={3} />
        </div>

        <div className="account-successful-brand-message__copy-frame">
          <h1 id="account-successful-title">Account Created Successfully</h1>
          <p>
            Welcome to BudgeFlow. Your account number will be sent to your email
            shortly. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="account-successful-brand-message__action-frame">
        <Link className="account-successful-brand-message__login" to="/">
          Back to login
        </Link>
      </div>
    </section>
  </div>
);

export default AccountSuccessfulBrandMessage;
