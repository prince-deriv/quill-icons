import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleDotCaptionFillIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M6 15.5a6.142 6.142 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.075 6.075 0 0 1 0 9.5c0-1.047.266-2.047.797-3A6.2 6.2 0 0 1 3 4.297 6.143 6.143 0 0 1 6 3.5a6.143 6.143 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5c.531.953.797 1.953.797 3a6.074 6.074 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.142 6.142 0 0 1-3 .797Zm0-8.25c-.406 0-.781.102-1.125.305A2.255 2.255 0 0 0 3.75 9.5a2.255 2.255 0 0 0 1.125 1.945c.344.203.719.305 1.125.305s.781-.102 1.125-.305.617-.476.82-.82c.203-.36.305-.734.305-1.125a2.255 2.255 0 0 0-1.125-1.945A2.172 2.172 0 0 0 6 7.25Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDotCaptionFillIcon);
export default ForwardRef;
