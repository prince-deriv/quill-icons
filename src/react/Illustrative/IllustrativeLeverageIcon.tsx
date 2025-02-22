import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeLeverageIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M29.333 6.667a3.335 3.335 0 0 0-6.666 0 3.335 3.335 0 0 0 6.667 0Zm-3.333 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2ZM12 8a4.672 4.672 0 0 0-4.667-4.667A4.672 4.672 0 0 0 2.667 8a4.672 4.672 0 0 0 4.666 4.667A4.672 4.672 0 0 0 12 8Zm-4.667 3.333a3.335 3.335 0 0 1 0-6.666 3.335 3.335 0 0 1 0 6.666ZM14.667 11.613v2.394c0 .366.3.666.666.666.367 0 .667-.3.667-.666v-4a.658.658 0 0 0-.413-.614.658.658 0 0 0-.727.147l-1.333 1.333a.664.664 0 1 0 .94.94l.2-.2ZM17.747 14.613a.664.664 0 0 0 .726-.14l1.334-1.333a.664.664 0 1 0-.94-.94l-.194.193V10c0-.367-.3-.667-.666-.667-.367 0-.667.3-.667.667v4c0 .267.16.513.413.613h-.006Z' />
      <path d='M28.667 10h-5.334C22.6 10 22 10.6 22 11.333V12c0 1.1.9 2 2 2h1.333v4c0 .367-.3.667-.666.667H19.24c-.3-1.147-1.333-2-2.573-2s-2.274.853-2.574 2H8.667A.669.669 0 0 1 8 18v-1.333h1.333c1.1 0 2-.9 2-2V14c0-.733-.6-1.333-1.333-1.333H4.667c-.734 0-1.334.6-1.334 1.333v.667c0 1.1.9 2 2 2h1.334V18c0 1.1.9 2 2 2h5.426c.24.933.974 1.66 1.907 1.907v1.426h-3.333c-1.1 0-2 .9-2 2V28c0 .367.3.667.666.667H22c.367 0 .667-.3.667-.667v-2.667c0-1.1-.9-2-2-2h-3.334v-1.426A2.667 2.667 0 0 0 19.24 20h5.427c1.1 0 2-.9 2-2v-4H28c1.1 0 2-.9 2-2v-.667C30 10.6 29.4 10 28.667 10Zm-24 4.667V14H10v.667c0 .366-.3.666-.667.666h-4a.669.669 0 0 1-.666-.666Zm16.666 10.666v2H12v-2c0-.366.3-.666.667-.666h8c.366 0 .666.3.666.666Zm-4.666-4.666c-.734 0-1.334-.6-1.334-1.334 0-.733.6-1.333 1.334-1.333.733 0 1.333.6 1.333 1.333 0 .734-.6 1.334-1.333 1.334Zm12-8.667c0 .367-.3.667-.667.667h-4a.669.669 0 0 1-.667-.667v-.667h5.334V12Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeLeverageIcon);
export default ForwardRef;
