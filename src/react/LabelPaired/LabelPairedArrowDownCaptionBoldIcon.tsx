import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownCaptionBoldIcon = (
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
      <path d='M4.102 14.586.164 10.46c-.219-.281-.21-.547.023-.797.266-.219.524-.219.774 0l2.976 3.117V4.812c.032-.343.22-.53.563-.562.344.031.531.219.563.563v7.968l2.976-3.094c.25-.234.516-.242.797-.023.219.25.219.516 0 .797l-3.938 4.125a.542.542 0 0 1-.398.164.542.542 0 0 1-.398-.164Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownCaptionBoldIcon);
export default ForwardRef;
