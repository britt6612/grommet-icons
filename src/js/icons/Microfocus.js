import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';
import { useForwardedRef } from '../utils';

export const Microfocus = forwardRef((props, ref) => {
  const iconRef = useForwardedRef(ref);
  return (
    <StyledIcon ref={iconRef} viewBox='0 0 24 24' a11yTitle='Microfocus' {...props}>
      <path fill='#0078EF' fillRule='evenodd' d='M1 5h4v14h14v4H1V5zm4-4h18v18h-4V5H5V1z' />
    </StyledIcon>
  );
});
