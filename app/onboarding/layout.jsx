import LoginBackground from '@/components/LoginBackground';

export const metadata = {
  title: 'BusyBee | Login',
};

const OnboardingLayout = ({ children }) => {
  return (
    <section className="grid-1-row-center onboarding">
      <div className="grid-2-row-center canvas">
        <div className="form">{children}</div>
        <LoginBackground />
      </div>
    </section>
  );
};

export default OnboardingLayout;
