import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSquareCaptionRegularIcon = (
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
      <path d='M9.25 5h-7.5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v7.5c0 .219.07.398.21.54.142.14.321.21.54.21h7.5a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-7.5a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21Zm-7.5-.75h7.5c.422.016.773.164 1.055.445.28.282.43.633.445 1.055v7.5a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-7.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 13.25v-7.5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCaptionRegularIcon);
export default ForwardRef;
