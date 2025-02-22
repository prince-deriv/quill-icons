import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedZeroCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.25 8c.031-1.063.398-1.945 1.102-2.648C2.055 4.648 2.937 4.282 4 4.25c1.063.031 1.945.398 2.648 1.102.704.703 1.07 1.585 1.102 2.648v3c-.031 1.063-.398 1.945-1.102 2.648-.703.704-1.585 1.07-2.648 1.102-1.063-.031-1.945-.398-2.648-1.102C.648 12.945.282 12.063.25 11V8ZM4 5.375c-.75.016-1.367.273-1.852.773-.5.485-.757 1.102-.773 1.852v3c.016.75.273 1.367.773 1.852.485.5 1.102.757 1.852.773.75-.016 1.367-.273 1.852-.773.5-.485.757-1.102.773-1.852V8c-.016-.75-.273-1.367-.773-1.852-.485-.5-1.102-.757-1.852-.773Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroCaptionBoldIcon);
export default ForwardRef;
