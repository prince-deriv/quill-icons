import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSquareCheckLgFillIcon = (
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
      <path d='M2.75 6.75h12.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v12.5c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H2.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V9.25c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742Zm10.664 6.914c.365-.443.365-.885 0-1.328-.443-.365-.885-.365-1.328 0L7.75 16.672l-1.836-1.836c-.443-.365-.885-.365-1.328 0-.365.443-.365.885 0 1.328l2.5 2.5c.443.365.885.365 1.328 0l5-5Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckLgFillIcon);
export default ForwardRef;
