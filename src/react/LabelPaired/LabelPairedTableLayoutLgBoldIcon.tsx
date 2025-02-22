import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTableLayoutLgBoldIcon = (
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
      <path d='M17.5 8.625h-15c-.39.026-.599.234-.625.625v2.5h16.25v-2.5c-.026-.39-.234-.599-.625-.625ZM1.875 21.75c.026.39.234.599.625.625h3.125v-8.75h-3.75v8.125Zm5.625.625h10c.39-.026.599-.234.625-.625v-8.125H7.5v8.75ZM2.5 6.75h15c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v12.5c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-15c-.703-.026-1.29-.273-1.758-.742C.273 23.039.026 22.453 0 21.75V9.25c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTableLayoutLgBoldIcon);
export default ForwardRef;
