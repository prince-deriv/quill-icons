import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedFileCircleCheckSmBoldIcon = (
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
      <path d='M2 16.438h7c.273-.019.42-.165.438-.438V8.125H7.25a.852.852 0 0 1-.629-.246.852.852 0 0 1-.246-.629V5.062H2c-.273.019-.42.165-.438.438V16c.019.273.165.42.438.438ZM2 3.75h4.54c.473 0 .883.173 1.23.52l2.46 2.46c.347.347.52.766.52 1.258V16c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H2c-.492-.018-.902-.191-1.23-.52C.44 16.902.268 16.492.25 16V5.5c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52Zm6.152 7.328-2.925 2.899a.633.633 0 0 1-.465.191.633.633 0 0 1-.465-.191l-1.45-1.45c-.255-.31-.255-.62 0-.93.31-.255.62-.255.93 0l.985.985 2.46-2.434c.31-.255.62-.255.93 0 .256.31.256.62 0 .93Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleCheckSmBoldIcon);
export default ForwardRef;
