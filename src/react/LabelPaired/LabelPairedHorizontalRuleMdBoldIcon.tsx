import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedHorizontalRuleMdBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M0 12c.042-.458.292-.708.75-.75h18.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75H.75C.292 12.708.042 12.458 0 12Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleMdBoldIcon);
export default ForwardRef;
