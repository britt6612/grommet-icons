import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Unlock = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Unlock' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M23 23V11H9v12h14zm-9-6h4m-7-6V7c0-3 0-6-5-6S1 4 1 7v4' />
    </StyledIcon>
  );
});
