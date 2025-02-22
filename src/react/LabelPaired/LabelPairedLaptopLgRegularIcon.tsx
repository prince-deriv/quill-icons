import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedLaptopLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      <path d='M20 8H5c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v10H2.5v-10c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h15c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v10h-1.25v-10c0-.365-.117-.664-.352-.898C20.664 8.117 20.365 8 20 8ZM3.008 23h18.984c.86-.052 1.42-.469 1.68-1.25H1.328c.26.781.82 1.198 1.68 1.25ZM0 21.242c.052-.443.3-.69.742-.742h23.516c.443.052.69.3.742.742-.026.86-.313 1.576-.86 2.149-.572.547-1.288.833-2.148.859H3.008c-.86-.026-1.563-.313-2.11-.86-.572-.572-.872-1.288-.898-2.148Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopLgRegularIcon);
export default ForwardRef;
