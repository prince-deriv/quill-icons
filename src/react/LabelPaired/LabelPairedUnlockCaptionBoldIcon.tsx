import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedUnlockCaptionBoldIcon = (
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
      <path d='M3.625 6.5V8H9.25c.422.016.773.164 1.055.445.28.282.43.633.445 1.055V14a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-7.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 14V9.5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h.75V6.5c.016-.844.305-1.555.867-2.133.578-.562 1.29-.851 2.133-.867.672.016 1.266.21 1.781.586a2.92 2.92 0 0 1 1.078 1.5c.079.328-.046.562-.375.703-.328.078-.562-.047-.703-.375A1.845 1.845 0 0 0 6.625 5 1.807 1.807 0 0 0 5.5 4.625c-.531.016-.977.195-1.336.54-.344.358-.523.804-.539 1.335Zm-2.25 3V14c.016.234.14.36.375.375h7.5c.234-.016.36-.14.375-.375V9.5c-.016-.234-.14-.36-.375-.375h-7.5c-.234.016-.36.14-.375.375Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockCaptionBoldIcon);
export default ForwardRef;
