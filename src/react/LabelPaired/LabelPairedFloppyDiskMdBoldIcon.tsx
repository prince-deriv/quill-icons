import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedFloppyDiskMdBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M1.5 7v10c.02.313.188.48.5.5h10c.313-.02.48-.188.5-.5V9.344a.512.512 0 0 0-.156-.375l1.062-1.063c.396.396.594.875.594 1.438V17c-.02.563-.219 1.031-.594 1.406S12.562 18.98 12 19H2c-.563-.02-1.031-.219-1.406-.594S.02 17.563 0 17V7c.02-.563.219-1.031.594-1.406S1.438 5.02 2 5h7.688c.541 0 1.01.198 1.406.594l2.312 2.312-1.062 1.063-2.313-2.313L10 6.625V9.75c-.042.458-.292.708-.75.75h-6c-.458-.042-.708-.292-.75-.75V6.5H2c-.313.02-.48.188-.5.5ZM4 6.5V9h4.5V6.5H4ZM5 14c.02-.75.354-1.323 1-1.719.667-.375 1.333-.375 2 0 .646.396.98.969 1 1.719-.02.75-.354 1.323-1 1.719-.667.375-1.333.375-2 0-.646-.396-.98-.969-1-1.719Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskMdBoldIcon);
export default ForwardRef;
