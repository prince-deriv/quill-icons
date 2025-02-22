import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBarsLgRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M.25 8.625c.026-.39.234-.599.625-.625h16.25c.39.026.599.234.625.625-.026.39-.234.599-.625.625H.875c-.39-.026-.599-.234-.625-.625Zm0 6.25c.026-.39.234-.599.625-.625h16.25c.39.026.599.234.625.625-.026.39-.234.599-.625.625H.875c-.39-.026-.599-.234-.625-.625Zm17.5 6.25c-.026.39-.234.599-.625.625H.875c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h16.25c.39.026.599.234.625.625Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsLgRegularIcon);
export default ForwardRef;
