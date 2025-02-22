import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowLeftToLineCaptionRegularIcon = (
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
      <path d='M.25 13.625v-8.25c.016-.234.14-.36.375-.375.234.016.36.14.375.375v8.25c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375Zm2.367-4.383 3-3c.172-.156.344-.156.516 0 .156.172.156.344 0 .516L3.789 9.125h6.586c.234.016.36.14.375.375-.016.234-.14.36-.375.375H3.79l2.343 2.367c.156.172.156.344 0 .516-.172.156-.344.156-.516 0l-3-3c-.156-.172-.156-.344 0-.516Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineCaptionRegularIcon);
export default ForwardRef;
