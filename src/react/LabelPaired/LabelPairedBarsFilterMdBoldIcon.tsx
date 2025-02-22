import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBarsFilterMdBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      <path d='M0 6.75c.042-.458.292-.708.75-.75h12.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75H.75C.292 7.458.042 7.208 0 6.75Zm2 5c.042-.458.292-.708.75-.75h8.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-8.5c-.458-.042-.708-.292-.75-.75Zm7 5c-.042.458-.292.708-.75.75h-2.5c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h2.5c.458.042.708.292.75.75Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterMdBoldIcon);
export default ForwardRef;
