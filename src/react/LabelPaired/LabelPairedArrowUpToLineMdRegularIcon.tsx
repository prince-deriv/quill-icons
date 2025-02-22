import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpToLineMdRegularIcon = (
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
      <path d='M.5 5h11c.313.02.48.188.5.5-.02.313-.188.48-.5.5H.5c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5Zm5.844 3.156 4 4c.208.23.208.459 0 .688-.23.208-.459.208-.688 0L6.5 9.719V18.5c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5V9.719l-3.156 3.125c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688l4-4c.23-.208.459-.208.688 0Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineMdRegularIcon);
export default ForwardRef;
