import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMinusMdRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M13.5 12c-.02.313-.188.48-.5.5H1c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5h12c.313.02.48.188.5.5Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMinusMdRegularIcon);
export default ForwardRef;
