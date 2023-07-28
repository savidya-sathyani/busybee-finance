import OnboardingBackground from '@/components/OnboardingBackground';
import Image from 'next/image';

export const metadata = {
  title: 'BusyBee | Login',
};

const OnboardingLayout = ({ children }) => {
  return (
    <section className="grid-1-row-center onboarding">
      <div className="grid-2-row-center canvas">
        <div className="form">
          <div className="logo">
            <Image
              className="ml-8"
              src={'/assets/icons/logo-white.png'}
              alt="Busy Bee"
              width={200}
              height={100}
            />
          </div>
          <div className="ob-content">{children}</div>
        </div>
        <OnboardingBackground />
      </div>
    </section>
  );
};

export default OnboardingLayout;
