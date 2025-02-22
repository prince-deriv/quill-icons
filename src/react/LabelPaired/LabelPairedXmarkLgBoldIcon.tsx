import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedXmarkLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M13.477 10.852 8.828 15.5l4.649 4.648c.364.443.364.886 0 1.329-.443.364-.886.364-1.329 0L7.5 16.828l-4.648 4.649c-.443.364-.886.364-1.329 0-.364-.443-.364-.886 0-1.329L6.172 15.5l-4.649-4.648c-.364-.443-.364-.886 0-1.329.443-.364.886-.364 1.329 0L7.5 14.172l4.648-4.649c.443-.364.886-.364 1.329 0 .364.443.364.886 0 1.329Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkLgBoldIcon);
export default ForwardRef;
