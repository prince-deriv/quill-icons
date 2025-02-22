import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedWindowMinimizeMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.5 18h15c.313.02.48.188.5.5-.02.313-.188.48-.5.5H.5c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMinimizeMdRegularIcon);
export default ForwardRef;
