import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCalendarSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M4.531 4.406V5.5H8.47V4.406c.036-.4.255-.62.656-.656.401.036.62.255.656.656V5.5h1.094c.492.018.902.191 1.23.52.329.328.502.738.52 1.23V16c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52h-8.75c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23V7.25c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h1.094V4.406c.036-.4.255-.62.656-.656.401.036.62.255.656.656ZM1.688 9v7c.018.273.164.42.437.438h8.75c.273-.019.42-.165.438-.438V9H1.687Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarSmBoldIcon);
export default ForwardRef;
