import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronsUpLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='m10.664 7.336 7.5 7.5c.365.443.365.885 0 1.328-.443.365-.885.365-1.328 0L10 9.328l-6.836 6.836c-.443.365-.885.365-1.328 0-.365-.443-.365-.885 0-1.328l7.5-7.5c.443-.365.885-.365 1.328 0Zm7.5 15c.365.443.365.885 0 1.328-.443.365-.885.365-1.328 0L10 16.828l-6.836 6.836c-.443.365-.885.365-1.328 0-.365-.443-.365-.885 0-1.328l7.5-7.5c.443-.365.885-.365 1.328 0l7.5 7.5Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpLgBoldIcon);
export default ForwardRef;
