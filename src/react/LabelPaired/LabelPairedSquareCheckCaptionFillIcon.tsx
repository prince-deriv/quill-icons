import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSquareCheckCaptionFillIcon = (
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
      <path d='M1.75 4.25h7.5c.422.016.773.164 1.055.445.28.282.43.633.445 1.055v7.5a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-7.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 13.25v-7.5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445Zm6.398 4.148c.22-.265.22-.53 0-.796-.265-.22-.53-.22-.796 0L4.75 10.203 3.648 9.102c-.265-.22-.53-.22-.796 0-.22.265-.22.53 0 .796l1.5 1.5c.265.22.53.22.796 0l3-3Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckCaptionFillIcon);
export default ForwardRef;
