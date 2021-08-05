import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const SearchAdvanced = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='SearchAdvanced' {...props}>
      <path fill='none' stroke='#000' strokeWidth='2' d='m15 16 6 6-6-6zm-5 2a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 1v6m-3-3h6' />
    </StyledIcon>
  );
});
