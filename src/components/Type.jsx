import { TypeAnimation } from 'react-type-animation';

const Type = () => {
  return (
    <span className="text-2xl md:text-2xl lg:text-3xl block">
      <TypeAnimation
        sequence={[
          'Web Developer',
          1000,
          'Web Designer',
          1000,
          'Web Developer',
          1000,
          'Web Designer',
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </span>
  );
};

export default Type;
