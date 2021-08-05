import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const FormPreviousLink = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='FormPreviousLink' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M18 12.4H6M11.4 7 6 12.4l5.4 5.4' />
    </StyledIcon>
  );
});
