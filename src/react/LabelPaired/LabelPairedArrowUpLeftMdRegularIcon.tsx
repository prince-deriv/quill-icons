import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpLeftMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M1.5 7h7c.313.02.48.188.5.5-.02.313-.188.48-.5.5H2.719l8.125 8.156c.208.23.208.459 0 .688-.23.208-.459.208-.688 0L2 8.719V14.5c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-7c.02-.313.188-.48.5-.5Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftMdRegularIcon);
export default ForwardRef;
