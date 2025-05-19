import React from 'react';
import { Spin, SpinnerSection } from './SpinnerLoadingStyle'
import {faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons'

export const SpinnerLoading = () => {

  return (
    <SpinnerSection>
      <Spin icon={faScrewdriverWrench} />
    </SpinnerSection>
  );
}
