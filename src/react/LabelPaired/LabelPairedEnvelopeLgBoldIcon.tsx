import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedEnvelopeLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M2.5 9.875c-.39.026-.599.234-.625.625v.86l6.758 5.546c.416.313.872.469 1.367.469.52 0 .99-.156 1.406-.469l6.719-5.547V10.5c-.026-.39-.234-.599-.625-.625h-15Zm-.625 3.906V20.5c.026.39.234.599.625.625h15c.39-.026.599-.234.625-.625v-6.719l-5.547 4.57c-.781.6-1.64.899-2.578.899s-1.797-.3-2.578-.898l-5.547-4.57ZM0 10.5c.026-.703.273-1.29.742-1.758C1.211 8.273 1.797 8.026 2.5 8h15c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v10c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-15c-.703-.026-1.29-.273-1.758-.742C.273 21.789.026 21.203 0 20.5v-10Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeLgBoldIcon);
export default ForwardRef;
