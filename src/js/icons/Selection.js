import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Selection = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Selection' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M5 18h3V6H5v12zm7-16v20V2zM1 22h22V2H1v20z' />
    </StyledIcon>
  );
});
