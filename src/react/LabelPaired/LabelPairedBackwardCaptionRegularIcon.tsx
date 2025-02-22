import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBackwardCaptionRegularIcon = (
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
      <path d='M.89 9.5 6 13.203V5.797L.89 9.5ZM6.048 5c.203 0 .367.07.492.21.14.126.211.29.211.493v2.414l4.125-2.976A.686.686 0 0 1 11.297 5c.203 0 .367.07.492.21.14.126.211.29.211.493v7.594c0 .203-.07.367-.21.492a.627.627 0 0 1-.493.211.686.686 0 0 1-.422-.14L6.75 10.882v2.414c0 .203-.07.367-.21.492a.627.627 0 0 1-.493.211.686.686 0 0 1-.422-.14L.235 9.944A.516.516 0 0 1 0 9.5c0-.188.078-.336.234-.445L5.625 5.14A.686.686 0 0 1 6.047 5Zm.703 4.945 4.5 3.258V5.797l-4.5 3.258v.89Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardCaptionRegularIcon);
export default ForwardRef;
