import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCaretDownLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='m6.5 18.352 3.477-3.477H3.023L6.5 18.352Zm.898 1.796c-.26.235-.56.352-.898.352-.339 0-.638-.117-.898-.352l-5-5c-.365-.416-.456-.872-.274-1.367.234-.495.625-.755 1.172-.781h10c.547.026.938.287 1.172.781.182.495.091.95-.274 1.367l-5 5Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownLgBoldIcon);
export default ForwardRef;
