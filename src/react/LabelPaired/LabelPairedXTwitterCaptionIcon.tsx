import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedXTwitterCaptionIcon = (
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
      <path d='M9.117 4.625h1.664L7.171 8.75l4.243 5.625H8.086l-2.602-3.398-2.976 3.398H.844L4.71 9.969.633 4.625H4.03l2.367 3.117 2.72-3.117Zm-.586 8.766h.938l-5.93-7.829h-.984l5.976 7.829Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXTwitterCaptionIcon);
export default ForwardRef;
