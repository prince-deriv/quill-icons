import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSquareCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M9.25 5.375h-7.5c-.234.016-.36.14-.375.375v7.5c.016.234.14.36.375.375h7.5c.234-.016.36-.14.375-.375v-7.5c-.016-.234-.14-.36-.375-.375ZM1.75 4.25h7.5c.422.016.773.164 1.055.445.28.282.43.633.445 1.055v7.5a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-7.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 13.25v-7.5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCaptionBoldIcon);
export default ForwardRef;
