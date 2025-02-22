import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlusXlRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M11.25 9v8.25h8.25c.469.031.719.281.75.75-.031.469-.281.719-.75.75h-8.25V27c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-8.25H1.5c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75h8.25V9c.031-.469.281-.719.75-.75.469.031.719.281.75.75Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusXlRegularIcon);
export default ForwardRef;
