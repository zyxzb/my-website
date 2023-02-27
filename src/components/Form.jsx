import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { formSchema } from 'utils/form-schema';
import { FormText, Loader } from 'components';

const Form = () => {
  const [activeLoader, setActiveLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitForm = async (data) => {
    // EmailJs Start
    setActiveLoader(true);
    try {
      const result = await emailjs.send(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        data,
        `${process.env.REACT_APP_PUBLIC_KEY}`,
      );
      console.log(result.text);
      setActiveLoader(false);
      alert('Thank You, the form has been successfully sent!');
      reset();
    } catch (error) {
      console.log(error);
      setActiveLoader(false);
      alert(`Something went wrong :( \n Error: ${error.text} \n Try again!`);
    }
  };
  // EmailJs End

  return (
    <>
      <div className='form flex flex-col text-center w-full max-w-[800px] mx-auto'>
        <FormText />
        <form
          onSubmit={handleSubmit(submitForm)}
          className='flex flex-col gap-2 w-full max-w-[600px] mx-auto mt-10'
        >
          <div className='flex flex-col sm:flex-row gap-2'>
            <div className='w-full'>
              <input
                type='text'
                placeholder='First Name'
                {...register('firstName')}
                name='firstName'
                className='w-full'
              />
              <span>{errors.firstName?.message}</span>
            </div>
            <div className='w-full'>
              <input
                type='text'
                placeholder='Last Name (optional)'
                {...register('lastName')}
                name='lastName'
                className='w-full'
              />
              <span>{errors.lastName?.message}</span>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-2'>
            <div className='w-full'>
              <input
                type='email'
                placeholder='Email'
                {...register('email')}
                name='email'
                className='w-full'
              />
              <span>{errors.email?.message}</span>
            </div>
            <div className='w-full'>
              <input
                type='text'
                placeholder='Phone number (optional)'
                {...register('phone')}
                name='phone'
                className='w-full'
              />
              <span>{errors.number?.message}</span>
            </div>
          </div>
          <textarea
            rows='7'
            placeholder='Your message...'
            {...register('message')}
            name='message'
          ></textarea>
          <span>{errors.message?.message}</span>
          <button
            type='submit'
            className='bg-textDarkBlue hover:bg-textLightBlue p-2 mb-10 transition hover:text-bgDarkBlue'
          >
            Submit
          </button>
        </form>
      </div>
      {activeLoader ? <Loader /> : null}
    </>
  );
};

export default Form;
