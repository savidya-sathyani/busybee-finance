import { onboardingBackgroundData } from '@/data/onboardingData';

export const getBackgroundContent = (index) => {
  return onboardingBackgroundData[index - 1];
};
