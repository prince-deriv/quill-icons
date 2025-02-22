import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedLaptopLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M20 8.625H5c-.39.026-.599.234-.625.625V18H2.5V9.25c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h15c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758V18h-1.875V9.25c-.026-.39-.234-.599-.625-.625ZM3.75 22.375h17.5c.86-.052 1.445-.469 1.758-1.25H1.992c.313.781.899 1.198 1.758 1.25ZM0 20.5c0-.365.117-.664.352-.898.234-.235.533-.352.898-.352h22.5c.365 0 .664.117.898.352.235.234.352.533.352.898-.026 1.068-.39 1.953-1.094 2.656-.703.703-1.588 1.068-2.656 1.094H3.75c-1.068-.026-1.953-.39-2.656-1.094C.39 22.453.026 21.568 0 20.5Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopLgBoldIcon);
export default ForwardRef;
