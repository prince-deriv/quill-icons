import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketDerivedStepIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g fill='#0AA0B0'>
      <path d='M32 30H0v2h32v-2ZM2.5 18.6h.3l1.8 3.2c-.3.4-.4.9-.4 1.4 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-.5-.1-.9-.4-1.3l2.1-3.3h.4c1.4 0 2.5-1.1 2.5-2.5 0-.5-.1-1-.4-1.3l2.1-3.2h.8l2.1 3.2c-.3.4-.4.9-.4 1.3 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-.5-.1-1-.4-1.3l2.1-3.2h.4c1.4 0 2.5-1.1 2.5-2.5 0-.5-.2-1-.4-1.4l2-2.7h.3C30.9 5 32 3.9 32 2.5S30.9 0 29.5 0 27 1.1 27 2.5c0 .5.2 1 .5 1.4l-1.7 2.7h-.4c-1.4 0-2.5 1.1-2.5 2.5 0 .5.1 1 .4 1.3l-2.1 3.2h-.8l-2.1-3.2c.3-.4.4-.9.4-1.3 0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5c0 .5.1 1 .4 1.3L12 13.6h-.4c-1.4 0-2.5 1.1-2.5 2.5 0 .5.2 1 .4 1.4l-2.1 3.2c-.2 0-.3-.1-.5-.1h-.4l-1.8-3.1c.1-.3.3-.8.3-1.4 0-1.4-1.1-2.5-2.5-2.5S0 14.7 0 16.1s1.1 2.5 2.5 2.5Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedStepIcon);
export default ForwardRef;
