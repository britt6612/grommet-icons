import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const FormFilter = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='FormFilter' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='m6 8 5.667 4.667V18h.666v-5.333L18 8V6H6z' />
    </StyledIcon>
  );
});
