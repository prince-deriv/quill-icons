import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCalendarLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M6.188 6.438V8h5.625V6.437c.052-.572.364-.885.937-.937.573.052.885.365.938.938V8h1.562c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758V23c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H2.75c-.703-.026-1.29-.273-1.758-.742C.523 24.289.276 23.703.25 23V10.5c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h1.563V6.437c.052-.572.364-.885.937-.937.573.052.885.365.938.938ZM2.125 13v10c.026.39.234.599.625.625h12.5c.39-.026.599-.234.625-.625V13H2.125Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarLgBoldIcon);
export default ForwardRef;
