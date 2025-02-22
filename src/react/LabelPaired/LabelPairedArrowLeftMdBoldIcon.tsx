import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowLeftMdBoldIcon = (
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
      <path d='M.219 12.531A.723.723 0 0 1 0 12c0-.208.073-.385.219-.531l5.5-5.25c.375-.292.729-.292 1.062 0 .292.375.282.729-.031 1.062L2.625 11.25H13.25c.458.042.708.292.75.75-.042.458-.292.708-.75.75H2.625l4.156 3.969c.292.333.292.687 0 1.062-.333.292-.677.292-1.031 0l-5.5-5.25H.219Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftMdBoldIcon);
export default ForwardRef;
