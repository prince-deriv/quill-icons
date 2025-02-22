import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMobileNotchSmRegularIcon = (
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
      <path d='M7.25 4.625v.438a.852.852 0 0 1-.246.628.852.852 0 0 1-.629.247h-1.75a.852.852 0 0 1-.629-.247.852.852 0 0 1-.246-.628v-.438h-.875a.852.852 0 0 0-.629.246A.852.852 0 0 0 2 5.5V16c0 .255.082.465.246.629a.852.852 0 0 0 .629.246h5.25a.852.852 0 0 0 .629-.246A.852.852 0 0 0 9 16V5.5a.852.852 0 0 0-.246-.629.852.852 0 0 0-.629-.246H7.25Zm-.875 0h-1.75v.438h1.75v-.438Zm-5.25.875c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h5.25c.492.018.902.191 1.23.52.329.328.502.738.52 1.23V16c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52h-5.25c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23V5.5Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchSmRegularIcon);
export default ForwardRef;
