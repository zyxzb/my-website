import { Form } from 'components';

const ContactPage = ({ title }) => {
  return (
    <div>
      <small>{title}</small>
      <h1 className='text-bold text-5xl text-center my-10'>Contact Me 📨</h1>
      <Form />
    </div>
  );
};

export default ContactPage;
