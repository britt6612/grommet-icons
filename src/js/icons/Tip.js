import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Tip = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Tip' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M16.007 18H22V2H2v16h6.243l3.882 4 3.882-4z' />
    </StyledIcon>
  );
});
