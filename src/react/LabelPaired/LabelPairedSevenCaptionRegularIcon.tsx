import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSevenCaptionRegularIcon = (
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
      <path d='M.25 4.625c.016-.234.14-.36.375-.375h6.75c.14 0 .25.063.328.188a.398.398 0 0 1 0 .375l-6 9.75c-.14.187-.312.234-.516.14-.187-.14-.226-.312-.117-.515L6.695 5H.625c-.234-.016-.36-.14-.375-.375Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenCaptionRegularIcon);
export default ForwardRef;
