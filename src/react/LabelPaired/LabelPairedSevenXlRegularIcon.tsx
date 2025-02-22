import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSevenXlRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M0 8.25c.031-.469.281-.719.75-.75h13.5c.281 0 .5.125.656.375.125.25.125.5 0 .75l-12 19.5c-.281.375-.625.469-1.031.281-.375-.281-.453-.625-.234-1.031L12.89 9H.75C.281 8.969.031 8.719 0 8.25Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenXlRegularIcon);
export default ForwardRef;
