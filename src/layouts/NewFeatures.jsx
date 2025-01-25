import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';

const NewFeatures = () => {
  return (
    <>
      <Container>
        <div className="bg-FeautureBg h-[465px] mb-20 relative">
          <h3 className="text-4xl font-Darker font-semibold absolute top-52 left-[470px]">
            Be aware of new features
          </h3>
          <p className="font-roboto absolute top-64 left-[470px] w-[438px]">
            Culpa non ex tempor qui nulla laborum. Laboris culpa ea ipsum tempor
            duis do ullamco eiusmod officia magna ad id.
          </p>
          <div className="flex space-x-5 absolute top-[330px] left-[470px]">
            <input
              type="text"
              placeholder="Email"
              className="w-[435px] text-gray rounded-full py-4 border px-5 outline-none"
            />
            <Button btnText={'Subscribe'} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default NewFeatures;
