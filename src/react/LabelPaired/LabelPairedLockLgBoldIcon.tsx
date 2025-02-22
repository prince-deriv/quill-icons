import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedLockLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M5.875 10.5V13h6.25v-2.5c-.026-.885-.325-1.628-.898-2.227-.6-.572-1.342-.872-2.227-.898-.885.026-1.628.326-2.227.898-.572.6-.872 1.342-.898 2.227ZM4 13v-2.5c.026-1.406.508-2.591 1.445-3.555C6.41 6.008 7.594 5.526 9 5.5c1.406.026 2.591.508 3.555 1.445.937.964 1.419 2.149 1.445 3.555V13h1.25c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758V23c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H2.75c-.703-.026-1.29-.273-1.758-.742C.523 24.289.276 23.703.25 23v-7.5c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742H4Zm-1.875 2.5V23c.026.39.234.599.625.625h12.5c.39-.026.599-.234.625-.625v-7.5c-.026-.39-.234-.599-.625-.625H2.75c-.39.026-.599.234-.625.625Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockLgBoldIcon);
export default ForwardRef;
