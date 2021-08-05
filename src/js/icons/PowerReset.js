import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const PowerReset = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='PowerReset' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M20 8c-1.403-2.96-4.463-5-8-5a9 9 0 1 0 0 18 9 9 0 0 0 9-9m0-9v6h-6' />
    </StyledIcon>
  );
});
