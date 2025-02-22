import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBackwardSmRegularIcon = (
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
      <path d='M1.04 10.75 7 15.07V6.43l-5.96 4.32ZM7.054 5.5c.237 0 .428.082.574.246a.732.732 0 0 1 .246.574v2.817l4.813-3.473a.8.8 0 0 1 .492-.164c.237 0 .428.082.574.246A.731.731 0 0 1 14 6.32v8.86a.731.731 0 0 1-.246.574.731.731 0 0 1-.574.246.8.8 0 0 1-.492-.164l-4.813-3.473v2.817a.731.731 0 0 1-.246.574.731.731 0 0 1-.574.246.8.8 0 0 1-.492-.164L.272 11.27A.602.602 0 0 1 0 10.75c0-.219.091-.392.273-.52l6.29-4.566a.8.8 0 0 1 .492-.164Zm.82 5.77 5.25 3.8V6.43l-5.25 3.8v1.04Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardSmRegularIcon);
export default ForwardRef;
