import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSquareLgRegularIcon = (
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
      <path d='M15.25 8H2.75c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v12.5c0 .365.117.664.352.898.234.235.533.352.898.352h12.5c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898V9.25c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352ZM2.75 6.75h12.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v12.5c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H2.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V9.25c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareLgRegularIcon);
export default ForwardRef;
