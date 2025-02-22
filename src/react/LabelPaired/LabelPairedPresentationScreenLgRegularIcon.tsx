import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPresentationScreenLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.875 5.5h21.25c.39.026.599.234.625.625-.026.39-.234.599-.625.625H.875c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625ZM1.5 8h1.25v8.75c0 .365.117.664.352.898.234.235.533.352.898.352h15c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898V8h1.25v8.75c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-6.875v1.602l3.555 3.593c.26.287.26.573 0 .86-.287.26-.573.26-.86 0l-3.32-3.282-3.32 3.282c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l3.555-3.593V19.25H4c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V8Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenLgRegularIcon);
export default ForwardRef;
