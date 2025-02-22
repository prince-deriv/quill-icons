import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBarsFilterMdRegularIcon = (
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
      <path d='M0 6.5c.02-.313.188-.48.5-.5h13c.313.02.48.188.5.5-.02.313-.188.48-.5.5H.5c-.313-.02-.48-.188-.5-.5Zm2 5c.02-.313.188-.48.5-.5h9c.313.02.48.188.5.5-.02.313-.188.48-.5.5h-9c-.313-.02-.48-.188-.5-.5Zm7 5c-.02.313-.188.48-.5.5h-3c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5h3c.313.02.48.188.5.5Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterMdRegularIcon);
export default ForwardRef;
