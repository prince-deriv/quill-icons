import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedWindowMaximizeLgRegularIcon = (
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
      <path d='M2.5 8c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898V13h17.5V9.25c0-.365-.117-.664-.352-.898C18.164 8.117 17.865 8 17.5 8h-15Zm-1.25 6.25v7.5c0 .365.117.664.352.898.234.235.533.352.898.352h15c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-7.5H1.25ZM0 9.25c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h15c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v12.5c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-15c-.703-.026-1.29-.273-1.758-.742C.273 23.039.026 22.453 0 21.75V9.25Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMaximizeLgRegularIcon);
export default ForwardRef;
