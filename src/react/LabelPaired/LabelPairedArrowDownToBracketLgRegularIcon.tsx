import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownToBracketLgRegularIcon = (
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
      <path d='m14.43 14.055-5 5c-.287.26-.573.26-.86 0l-5-5c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0l3.945 3.907V6.125c.026-.39.234-.599.625-.625.39.026.599.234.625.625v10.977l3.945-3.907c.287-.26.573-.26.86 0 .26.287.26.573 0 .86ZM1.5 18.625v3.75c.026.52.208.963.547 1.328.364.339.807.521 1.328.547h11.25c.52-.026.963-.208 1.328-.547.339-.364.521-.807.547-1.328v-3.75c.026-.39.234-.599.625-.625.39.026.599.234.625.625v3.75c-.026.885-.326 1.628-.898 2.227-.6.572-1.342.872-2.227.898H3.375c-.885-.026-1.628-.326-2.227-.898-.572-.6-.872-1.342-.898-2.227v-3.75c.026-.39.234-.599.625-.625.39.026.599.234.625.625Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketLgRegularIcon);
export default ForwardRef;
