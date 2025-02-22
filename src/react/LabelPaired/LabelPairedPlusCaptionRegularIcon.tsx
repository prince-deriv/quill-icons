import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlusCaptionRegularIcon = (
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
      <path d='M5.875 5v4.125H10c.234.016.36.14.375.375-.016.234-.14.36-.375.375H5.875V14c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V9.875H1C.766 9.859.64 9.735.625 9.5c.016-.234.14-.36.375-.375h4.125V5c.016-.234.14-.36.375-.375.234.016.36.14.375.375Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusCaptionRegularIcon);
export default ForwardRef;
