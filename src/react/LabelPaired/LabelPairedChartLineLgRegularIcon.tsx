import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartLineLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M1.25 7.375v13.75c.026.52.208.963.547 1.328.364.339.807.521 1.328.547h16.25c.39.026.599.234.625.625-.026.39-.234.599-.625.625H3.125c-.885-.026-1.628-.326-2.227-.898-.572-.6-.872-1.342-.898-2.227V7.375c.026-.39.234-.599.625-.625.39.026.599.234.625.625Zm17.305 4.18L12.93 17.18c-.287.26-.573.26-.86 0l-3.32-3.282-3.945 3.907c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86L8.32 12.57c.287-.26.573-.26.86 0l3.32 3.282 5.195-5.157c.287-.26.573-.26.86 0 .26.287.26.573 0 .86Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineLgRegularIcon);
export default ForwardRef;
