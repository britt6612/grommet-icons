import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Drawer = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Drawer' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='M1 14 6 2h12l5 12-2 8H3l-2-8zm0 0h22' />
    </StyledIcon>
  );
});
