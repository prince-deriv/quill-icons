import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpRightCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M7.875 5.75c.234.016.36.14.375.375v5.25c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V7.039l-6.117 6.094c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516L6.961 6.5H2.625c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375h5.25Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightCaptionRegularIcon);
export default ForwardRef;
