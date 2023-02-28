import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = ({ title }) => {
  return (
    <>
      <small className='absolute'>{title}</small>
      <div className='flex w-full h-full flex-col justify-center items-center'>
        <p className='text-3xl'>ERROR 404</p>
        <p className='py-6'>This's Not The Web Page You're Looking For</p>
        <Link to='/' className='bg-textDarkBlue p-4'>
          Home Page
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
