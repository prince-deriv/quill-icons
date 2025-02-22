import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedWindowMaximizeLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M0 9.016c.052-.339.156-.651.313-.938a2.26 2.26 0 0 1 .937-.976c.313-.183.651-.3 1.016-.352H17.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v12.5c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-15c-.703-.026-1.29-.273-1.758-.742C.273 23.039.026 22.453 0 21.75V9.016Zm1.875 5.234v7.5c.026.39.234.599.625.625h15c.39-.026.599-.234.625-.625v-7.5H1.875Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMaximizeLgBoldIcon);
export default ForwardRef;
