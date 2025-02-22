import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSortDownSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M4.336 15.945c.055.037.11.055.164.055.055 0 .11-.018.164-.055l3.281-3.117A.185.185 0 0 0 8 12.691a.214.214 0 0 0-.191-.191H1.19a.214.214 0 0 0-.191.191c0 .055.018.1.055.137l3.28 3.117Zm-.602.63-3.28-3.09a1.08 1.08 0 0 1-.329-.794c0-.31.1-.565.3-.765.201-.2.457-.301.766-.301H7.81c.31 0 .565.1.765.3.2.201.301.457.301.766 0 .31-.11.575-.328.793l-3.281 3.09c-.22.2-.474.301-.766.301-.292 0-.547-.1-.766-.3Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownSmRegularIcon);
export default ForwardRef;
