import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCheckCaptionBoldIcon = (
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
      <path d='M10.586 5.914c.219.266.219.531 0 .797l-6.188 6.187c-.265.22-.53.22-.796 0L.414 9.711c-.219-.266-.219-.531 0-.797.266-.219.531-.219.797 0L4 11.704l5.79-5.79c.265-.219.53-.219.796 0Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckCaptionBoldIcon);
export default ForwardRef;
