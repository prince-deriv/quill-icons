import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowRightLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='m17.555 15.93-6.875 6.875c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l5.782-5.82H.875c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h14.727L9.82 9.055c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0l6.875 6.875c.26.287.26.573 0 .86Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightLgRegularIcon);
export default ForwardRef;
