import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedWindowMinimizeLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.625 23h18.75c.39.026.599.234.625.625-.026.39-.234.599-.625.625H.625c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMinimizeLgRegularIcon);
export default ForwardRef;
