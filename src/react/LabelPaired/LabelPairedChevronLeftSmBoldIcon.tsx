import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronLeftSmBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      <path d='m.535 10.285 5.25-5.25c.31-.255.62-.255.93 0 .255.31.255.62 0 .93L1.93 10.75l4.785 4.785c.255.31.255.62 0 .93-.31.255-.62.255-.93 0l-5.25-5.25c-.255-.31-.255-.62 0-.93Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftSmBoldIcon);
export default ForwardRef;
