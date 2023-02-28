import ReactLoading from 'react-loading';

const Loader = () => {
  return (
    <div className='loader bg-bgDarkBlue fixed top-0 left-0 right-0 bottom-0 z-20 grid place-items-center backdrop-blur-[6px] bg-opacity-40'>
      <div>
        <ReactLoading type='spin' color='#EEFBFB' width={150} />
      </div>
      <p>Sending...</p>
    </div>
  );
};

export default Loader;
