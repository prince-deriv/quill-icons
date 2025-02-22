import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPenCaptionRegularIcon = (
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
      <path d='M9.281 4.438 7.992 5.702l1.805 1.805 1.265-1.29c.22-.265.22-.53 0-.796l-.984-.984c-.265-.22-.531-.22-.797 0ZM7.453 6.242 1.945 11.75a1.715 1.715 0 0 0-.375.656l-.633 2.156 2.157-.632c.25-.078.469-.203.656-.375l5.508-5.508-1.805-1.805Zm3.14-2.344 1.009 1.008c.25.266.375.57.375.914 0 .36-.125.672-.375.938L4.266 14.07a2.12 2.12 0 0 1-.938.586l-2.836.82c-.156.047-.281.016-.375-.093-.11-.094-.14-.211-.094-.352l.82-2.836a2.21 2.21 0 0 1 .563-.96l7.336-7.337c.266-.25.578-.375.938-.375.343 0 .648.125.914.375Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCaptionRegularIcon);
export default ForwardRef;
