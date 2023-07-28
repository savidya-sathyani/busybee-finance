'use client';

import { useEffect, useState } from 'react';

import { getBackgroundContent } from '@/utils/onboardingHelpers';
import DotSpan from './common/DotSpan';

const INITIAL_VALUES = {
  contentNo: 1,
};

const OnboardingBackground = () => {
  const [contentNo, setContentNo] = useState(INITIAL_VALUES.contentNo);
  const [backgroundContent, setBackgroundContent] = useState(null);

  const handleIndex = () => {
    if (contentNo === 3) {
      setContentNo(1);
    } else {
      setContentNo(contentNo + 1);
    }
  };

  useEffect(() => {
    setBackgroundContent(getBackgroundContent(contentNo));
  }, [contentNo]);

  return (
    <div
      className="grid-2-3-col-center deco"
      onMouseEnter={() => handleIndex()}
      onClick={() => handleIndex()}
    >
      {backgroundContent && (
        <>
          <div
            className="background"
            style={{
              backgroundImage: `url('/assets/images/background/login${backgroundContent.key}.svg')`,
            }}
          />
          <div className="computer">
            <figure
              style={{
                backgroundImage: `url('/assets/images/background/login${backgroundContent.key}.svg')`,
              }}
              className="content"
            />
          </div>
          <article
            className="text"
            style={{
              backgroundColor: backgroundContent.color,
            }}
          >
            <h2 className="heading-2">{backgroundContent.heading}</h2>
            <p className="title-p">{backgroundContent.text}</p>
            <DotSpan amount={3} active={backgroundContent.key} />
          </article>
        </>
      )}
    </div>
  );
};

export default OnboardingBackground;
