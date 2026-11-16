import ImageAndLogo from './ImageAndLogo';
import ValidateEmailForm from './ValidateEmailForm';
import './ValidateEmail.css';

const ValidateEmail = ({ onComplete }) => (
  <main className="validate-email">
    <div className="validate-email__card">
      <section className="validate-email__artwork">
        <ImageAndLogo variant="transaction-pin" />
      </section>
      <div className="validate-email__form-panel">
        <ValidateEmailForm onComplete={onComplete} />
      </div>
    </div>
  </main>
);

export default ValidateEmail;
