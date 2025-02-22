import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMinusCaptionRegularIcon = (
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
      <path d='M10.375 9.5c-.016.234-.14.36-.375.375H1C.766 9.859.64 9.735.625 9.5c.016-.234.14-.36.375-.375h9c.234.016.36.14.375.375Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMinusCaptionRegularIcon);
export default ForwardRef;
