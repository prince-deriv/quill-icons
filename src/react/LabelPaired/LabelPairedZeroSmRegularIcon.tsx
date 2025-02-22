import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedZeroSmRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.125 9C.161 7.76.59 6.73 1.41 5.91c.82-.82 1.85-1.249 3.09-1.285 1.24.036 2.27.465 3.09 1.285.82.82 1.249 1.85 1.285 3.09v3.5c-.036 1.24-.465 2.27-1.285 3.09-.82.82-1.85 1.248-3.09 1.285-1.24-.037-2.27-.465-3.09-1.285C.59 14.77.161 13.74.125 12.5V9ZM4.5 5.5c-.984.018-1.814.355-2.488 1.012C1.355 7.186 1.018 8.016 1 9v3.5c.018.984.355 1.814 1.012 2.488.674.657 1.504.994 2.488 1.012.984-.018 1.814-.355 2.488-1.012.657-.674.994-1.504 1.012-2.488V9c-.018-.984-.355-1.814-1.012-2.488C6.314 5.855 5.484 5.518 4.5 5.5Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroSmRegularIcon);
export default ForwardRef;
