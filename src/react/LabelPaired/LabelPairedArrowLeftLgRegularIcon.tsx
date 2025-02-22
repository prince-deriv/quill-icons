import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowLeftLgRegularIcon = (
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
      <path d='M.445 15.07 7.32 8.195c.287-.26.573-.26.86 0 .26.287.26.573 0 .86l-5.782 5.82h14.727c.39.026.599.234.625.625-.026.39-.234.599-.625.625H2.398l5.782 5.82c.26.287.26.573 0 .86-.287.26-.573.26-.86 0L.445 15.93c-.26-.287-.26-.573 0-.86Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftLgRegularIcon);
export default ForwardRef;
