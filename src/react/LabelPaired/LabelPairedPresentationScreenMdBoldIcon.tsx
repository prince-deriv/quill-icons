import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPresentationScreenMdBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.75 4h16.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75H.75C.292 5.458.042 5.208 0 4.75c.042-.458.292-.708.75-.75ZM1 6.5h1.5v6.75c.02.146.104.23.25.25h12.5c.146-.02.23-.104.25-.25V6.5H17v6.75c-.02.5-.188.917-.5 1.25-.333.313-.75.48-1.25.5h-5.5v1.438l2.281 2.28c.292.355.292.71 0 1.063-.354.292-.708.292-1.062 0L9 17.813 7.031 19.78c-.354.292-.708.292-1.062 0-.292-.354-.292-.708 0-1.062l2.281-2.282V15h-5.5c-.5-.02-.917-.188-1.25-.5-.313-.333-.48-.75-.5-1.25V6.5Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenMdBoldIcon);
export default ForwardRef;
