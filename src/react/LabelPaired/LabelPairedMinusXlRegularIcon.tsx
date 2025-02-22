import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMinusXlRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M20.25 18c-.031.469-.281.719-.75.75h-18c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75h18c.469.031.719.281.75.75Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMinusXlRegularIcon);
export default ForwardRef;
