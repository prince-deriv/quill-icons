import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCalendarLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      <path d='M4.625 5.5c.39.026.599.234.625.625V8h7.5V6.125c.026-.39.234-.599.625-.625.39.026.599.234.625.625V8h1.25c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758V23c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H2.75c-.703-.026-1.29-.273-1.758-.742C.523 24.289.276 23.703.25 23V10.5c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742H4V6.125c.026-.39.234-.599.625-.625ZM16.5 13h-15v10c0 .365.117.664.352.898.234.235.533.352.898.352h12.5c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898V13Zm-1.25-3.75H2.75c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v1.25h15V10.5c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarLgRegularIcon);
export default ForwardRef;
