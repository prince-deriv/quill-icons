import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownRightCaptionRegularIcon = (
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
      <path d='M7.875 13.25h-5.25c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375h4.336L.867 6.383c-.156-.172-.156-.344 0-.516.172-.156.344-.156.516 0L7.5 11.961V7.625c.016-.234.14-.36.375-.375.234.016.36.14.375.375v5.25c-.016.234-.14.36-.375.375Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightCaptionRegularIcon);
export default ForwardRef;
