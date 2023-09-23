import React, { useState } from 'react';
import PersonalDetails from '../component/SellerRegistration/PersonalDetails';
import BusinessDetails from '../component/SellerRegistration/BusinessDetails';
import AccountDetails from '../component/SellerRegistration/AccountDetails';
import WhyEkaiv from '../component/SellerRegistration/WhyEkaiv';

function SellerRegistration() {
  const [step, setStep] = useState(1); // Track the current step of the registration process

  const handleNextStep = () => {
    // Logic to move to the next step
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const handlePreviousStep = () => {
    // Logic to move to the previous step
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {step === 1 && <PersonalDetails onNextStep={handleNextStep} />}
      {step === 2 && <BusinessDetails onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />}
      {step === 3 && <AccountDetails onPreviousStep={handlePreviousStep} />}
      <WhyEkaiv />
    </>
  );
}

export default SellerRegistration;
