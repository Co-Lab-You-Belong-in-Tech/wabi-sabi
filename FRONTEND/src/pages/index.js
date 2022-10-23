import React, { useState, useEffect } from 'react';
import MobileOnboardingPage from '../components/MobileOnboardingPage';
import DesktopOnboardingPage from '../components/DesktopOnboardingPage';
function Onboarding() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [])


  return (
    <>
      {isMobile ? <MobileOnboardingPage /> : <DesktopOnboardingPage />}
    </>
  );
};

export default Onboarding;
