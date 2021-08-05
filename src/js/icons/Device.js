import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Device = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Device' {...props}>
      <path fill='none' stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M2 7h20v14h-6l-4-4-4 4H2V7zm4-5 5 5h2l5-5' />
    </StyledIcon>
  );
});
