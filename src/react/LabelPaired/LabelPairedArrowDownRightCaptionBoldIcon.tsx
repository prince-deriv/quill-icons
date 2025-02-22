import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownRightCaptionBoldIcon = (
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
      <path d='M7.688 13.25H2.063c-.344-.031-.532-.219-.563-.563.031-.343.219-.53.563-.562h4.265L.914 6.711c-.219-.266-.219-.531 0-.797.266-.219.531-.219.797 0l5.414 5.414V7.063c.031-.344.219-.532.563-.563.343.031.53.219.562.563v5.625c-.031.343-.219.53-.563.562Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightCaptionBoldIcon);
export default ForwardRef;
