import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Channel = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Channel' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M2 9h20v13H2V9zm19-7-8 7h-2L3 2' />
    </StyledIcon>
  );
});
