import ImageAndLogo from './ImageAndLogo';
import CreateTransactionPinForm from './CreateTransactionPinForm';
import './CreateTransactionPinLayout.css';

const CreateTransactionPinLayout = () => (
  <main className="transaction-pin-layout">
    <div className="transaction-pin-layout__card">
      <section className="transaction-pin-layout__artwork">
        <ImageAndLogo variant="transaction-pin" />
      </section>
      <div className="transaction-pin-layout__form-panel">
        <CreateTransactionPinForm />
      </div>
    </div>
  </main>
);

export default CreateTransactionPinLayout;
