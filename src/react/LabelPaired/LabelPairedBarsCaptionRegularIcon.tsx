import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBarsCaptionRegularIcon = (
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
      <path d='M.25 5.375c.016-.234.14-.36.375-.375h9.75c.234.016.36.14.375.375-.016.234-.14.36-.375.375H.625c-.234-.016-.36-.14-.375-.375Zm0 3.75c.016-.234.14-.36.375-.375h9.75c.234.016.36.14.375.375-.016.234-.14.36-.375.375H.625c-.234-.016-.36-.14-.375-.375Zm10.5 3.75c-.016.234-.14.36-.375.375H.625c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375h9.75c.234.016.36.14.375.375Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsCaptionRegularIcon);
export default ForwardRef;
