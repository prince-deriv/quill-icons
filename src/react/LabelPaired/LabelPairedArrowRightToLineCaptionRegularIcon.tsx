import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowRightToLineCaptionRegularIcon = (
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
      <path d='M10.75 5.375v8.25c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-8.25c.016-.234.14-.36.375-.375.234.016.36.14.375.375ZM8.383 9.758l-3 3c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516l2.344-2.367H.625C.391 9.859.265 9.735.25 9.5c.016-.234.14-.36.375-.375H7.21L4.868 6.758c-.156-.172-.156-.344 0-.516.172-.156.344-.156.516 0l3 3c.156.172.156.344 0 .516Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineCaptionRegularIcon);
export default ForwardRef;
