import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlusLgRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M9.625 8v6.875H16.5c.39.026.599.234.625.625-.026.39-.234.599-.625.625H9.625V23c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-6.875H1.5c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h6.875V8c.026-.39.234-.599.625-.625.39.026.599.234.625.625Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusLgRegularIcon);
export default ForwardRef;
