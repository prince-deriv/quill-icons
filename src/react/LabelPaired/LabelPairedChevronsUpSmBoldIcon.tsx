import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronsUpSmBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      <path d='m7.465 5.035 5.25 5.25c.255.31.255.62 0 .93-.31.255-.62.255-.93 0L7 6.43l-4.785 4.785c-.31.255-.62.255-.93 0-.255-.31-.255-.62 0-.93l5.25-5.25c.31-.255.62-.255.93 0Zm5.25 10.5c.255.31.255.62 0 .93-.31.255-.62.255-.93 0L7 11.68l-4.785 4.785c-.31.255-.62.255-.93 0-.255-.31-.255-.62 0-.93l5.25-5.25c.31-.255.62-.255.93 0l5.25 5.25Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpSmBoldIcon);
export default ForwardRef;
