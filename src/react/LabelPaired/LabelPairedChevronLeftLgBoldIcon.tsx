import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronLeftLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='m.836 14.836 7.5-7.5c.443-.365.885-.365 1.328 0 .365.443.365.885 0 1.328L2.828 15.5l6.836 6.836c.365.443.365.885 0 1.328-.443.365-.885.365-1.328 0l-7.5-7.5c-.365-.443-.365-.885 0-1.328Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftLgBoldIcon);
export default ForwardRef;
