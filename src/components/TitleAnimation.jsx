import { TypeAnimation } from 'react-type-animation';

const TitleAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        1000,
        "I'm Bartek..",
        2000,
        'Frontend/React developer..',
        2000,
        "Let's Work Together",
        2000,
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        },
      ]}
      wrapper='h1'
      cursor={true}
      repeat={0}
      className='text-bold text-3xl sm:text-5xl my-14 font-bold'
    />
  );
};

export default TitleAnimation;
