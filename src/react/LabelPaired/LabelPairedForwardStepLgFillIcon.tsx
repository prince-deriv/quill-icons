import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedForwardStepLgFillIcon = (
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
      <path d='M2.32 22.727c-.416.312-.872.364-1.367.156C.51 22.648.276 22.27.25 21.75V9.25c.026-.52.26-.898.703-1.133.495-.208.95-.156 1.367.156l7.5 6.25.43.391V9.25c0-.365.117-.664.352-.898.234-.235.533-.352.898-.352s.664.117.898.352c.235.234.352.533.352.898v12.5c0 .365-.117.664-.352.898-.234.235-.533.352-.898.352s-.664-.117-.898-.352c-.235-.234-.352-.533-.352-.898v-5.664l-.43.39-7.5 6.25Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepLgFillIcon);
export default ForwardRef;
