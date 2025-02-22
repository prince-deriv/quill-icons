import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBackwardCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M6.75 5.703v2.32l4.148-2.906A.668.668 0 0 1 11.297 5c.203 0 .367.07.492.21.14.126.211.29.211.493v7.594c0 .203-.07.367-.21.492a.627.627 0 0 1-.493.211.74.74 0 0 1-.399-.117L6.75 10.977v2.32c0 .203-.07.367-.21.492a.627.627 0 0 1-.493.211.686.686 0 0 1-.422-.14L.235 9.944A.516.516 0 0 1 0 9.5c0-.188.078-.336.234-.445L5.625 5.14A.686.686 0 0 1 6.047 5c.203 0 .367.07.492.21.14.126.211.29.211.493Zm0 3.703v.188l4.125 2.906V6.523L6.75 9.406ZM1.523 9.5l4.102 2.977V6.523L1.523 9.5Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardCaptionBoldIcon);
export default ForwardRef;
