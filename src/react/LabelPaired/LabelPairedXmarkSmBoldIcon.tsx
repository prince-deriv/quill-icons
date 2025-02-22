import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedXmarkSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M9.684 7.496 6.43 10.75l3.254 3.254c.255.31.255.62 0 .93-.31.255-.62.255-.93 0L5.5 11.68l-3.254 3.254c-.31.255-.62.255-.93 0-.255-.31-.255-.62 0-.93L4.57 10.75 1.316 7.496c-.255-.31-.255-.62 0-.93.31-.255.62-.255.93 0L5.5 9.82l3.254-3.254c.31-.255.62-.255.93 0 .255.31.255.62 0 .93Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkSmBoldIcon);
export default ForwardRef;
