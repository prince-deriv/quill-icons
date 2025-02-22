import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMinusLgRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M17.125 15.5c-.026.39-.234.599-.625.625h-15c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h15c.39.026.599.234.625.625Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMinusLgRegularIcon);
export default ForwardRef;
