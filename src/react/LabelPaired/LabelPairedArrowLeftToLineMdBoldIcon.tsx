import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowLeftToLineMdBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M0 17.25V6.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75v10.5c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75Zm4.25-5.781 4.25-4c.354-.292.698-.282 1.031.031.292.354.281.708-.031 1.063L6.656 11.25H13.25c.458.042.708.292.75.75-.042.458-.292.708-.75.75H6.656l2.875 2.719c.292.333.302.687.031 1.062-.354.292-.708.302-1.062.032l-4.25-4A.777.777 0 0 1 4 12a.68.68 0 0 1 .25-.531Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineMdBoldIcon);
export default ForwardRef;
