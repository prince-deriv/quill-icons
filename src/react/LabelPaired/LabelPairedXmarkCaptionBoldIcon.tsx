import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedXmarkCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M8.086 6.71 5.296 9.5l2.79 2.79c.219.265.219.53 0 .796-.266.219-.531.219-.797 0L4.5 10.296l-2.79 2.79c-.265.219-.53.219-.796 0-.219-.266-.219-.531 0-.797L3.704 9.5.913 6.71c-.219-.265-.219-.53 0-.796.266-.219.531-.219.797 0L4.5 8.704l2.79-2.79c.265-.219.53-.219.796 0 .219.266.219.531 0 .797Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkCaptionBoldIcon);
export default ForwardRef;
