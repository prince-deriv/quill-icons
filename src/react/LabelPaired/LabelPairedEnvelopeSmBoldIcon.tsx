import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedEnvelopeSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M1.75 6.813c-.273.018-.42.164-.438.437v.602l4.731 3.882a1.6 1.6 0 0 0 1.941 0l4.704-3.882V7.25c-.019-.273-.165-.42-.438-.438H1.75Zm-.438 2.734v4.703c.019.273.165.42.438.438h10.5c.273-.019.42-.165.438-.438V9.547l-3.883 3.2a2.9 2.9 0 0 1-3.61 0l-3.883-3.2ZM0 7.25c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h10.5c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v7c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H1.75c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23v-7Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeSmBoldIcon);
export default ForwardRef;
