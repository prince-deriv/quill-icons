import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpLeftCaptionBoldIcon = (
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
      <path d='M1.313 5.75h5.625c.343.031.53.219.562.563-.031.343-.219.53-.563.562H2.673l5.414 5.414c.219.266.219.531 0 .797-.266.219-.531.219-.797 0L1.875 7.672v4.266c-.031.343-.219.53-.563.562-.343-.031-.53-.219-.562-.563V6.314c.031-.344.219-.532.563-.563Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftCaptionBoldIcon);
export default ForwardRef;
