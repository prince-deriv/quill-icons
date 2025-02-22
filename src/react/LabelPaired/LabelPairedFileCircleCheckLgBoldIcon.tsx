import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedFileCircleCheckLgBoldIcon = (
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
      <path d='M2.5 23.625h10c.39-.026.599-.234.625-.625V11.75H10c-.365 0-.664-.117-.898-.352-.235-.234-.352-.533-.352-.898V7.375H2.5c-.39.026-.599.234-.625.625v15c.026.39.234.599.625.625ZM2.5 5.5h6.484c.677 0 1.263.247 1.758.742l3.516 3.516c.495.495.742 1.094.742 1.797V23c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-10c-.703-.026-1.29-.273-1.758-.742C.273 24.289.026 23.703 0 23V8c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742Zm8.79 10.469-4.18 4.14a.904.904 0 0 1-.665.274.904.904 0 0 1-.664-.274l-2.07-2.07c-.365-.443-.365-.885 0-1.328.443-.365.885-.365 1.328 0l1.406 1.406 3.516-3.476c.443-.365.885-.365 1.328 0 .365.442.365.885 0 1.328Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleCheckLgBoldIcon);
export default ForwardRef;
