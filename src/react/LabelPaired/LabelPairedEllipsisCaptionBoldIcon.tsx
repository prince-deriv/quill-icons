import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedEllipsisCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M10.375 9.5c-.016.422-.203.75-.563.984-.374.188-.75.188-1.124 0a1.168 1.168 0 0 1-.563-.984c.016-.422.203-.75.563-.984.374-.188.75-.188 1.124 0 .36.234.547.562.563.984Zm-3.75 0c-.016.422-.203.75-.563.984-.375.188-.75.188-1.125 0a1.168 1.168 0 0 1-.562-.984c.016-.422.203-.75.563-.984.375-.188.75-.188 1.125 0 .359.234.546.562.562.984ZM1.75 10.625a1.168 1.168 0 0 1-.984-.563 1.195 1.195 0 0 1 0-1.124c.234-.36.562-.547.984-.563.422.016.75.203.984.563.188.374.188.75 0 1.124-.234.36-.562.547-.984.563Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisCaptionBoldIcon);
export default ForwardRef;
