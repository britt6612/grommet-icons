import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const FormCalendar = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='FormCalendar' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M6 19h12V8H6v11zm9-11V5v3zM9 8V5v3zm-3 3.5h12H6z' />
    </StyledIcon>
  );
});
