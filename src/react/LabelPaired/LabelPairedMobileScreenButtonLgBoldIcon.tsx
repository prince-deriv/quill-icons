import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMobileScreenButtonLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M2.5 23c.026.39.234.599.625.625h8.75c.39-.026.599-.234.625-.625v-3.125h-10V23Zm0-5h10V8c-.026-.39-.234-.599-.625-.625h-8.75c-.39.026-.599.234-.625.625v10ZM.625 8c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h8.75c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v15c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-8.75c-.703-.026-1.29-.273-1.758-.742C.898 24.289.651 23.703.625 23V8ZM6.25 21.125h2.5c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-2.5c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonLgBoldIcon);
export default ForwardRef;
