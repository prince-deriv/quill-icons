import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownLeftSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M1.563 15.125c-.274-.018-.42-.164-.438-.438V8.564c.018-.274.164-.42.438-.438.273.018.419.164.437.438v5.058l7.137-7.11c.2-.182.4-.182.601 0 .183.201.183.402 0 .602l-7.11 7.137h5.06c.273.018.419.164.437.438-.018.273-.164.419-.438.437H1.563Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftSmRegularIcon);
export default ForwardRef;
