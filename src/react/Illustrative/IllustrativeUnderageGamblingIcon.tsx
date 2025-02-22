import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeUnderageGamblingIcon = (
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
      <path d='M16 2.667C8.647 2.667 2.667 8.647 2.667 16S8.647 29.333 16 29.333 29.333 23.353 29.333 16 23.353 2.667 16 2.667ZM16 28C9.38 28 4 22.613 4 16S9.38 4 16 4s12 5.387 12 12-5.387 12-12 12Z' />
      <path d='M14.253 11.72a.659.659 0 0 0-.726.147L12.193 13.2a.664.664 0 1 0 .94.94l.194-.193v5.726c0 .367.3.667.666.667.367 0 .667-.3.667-.667V12.34a.658.658 0 0 0-.413-.613l.006-.007ZM20 11.667h-2.667c-.733 0-1.333.6-1.333 1.333v2.333c0 .32.113.607.3.834A1.3 1.3 0 0 0 16 17v2c0 .733.6 1.333 1.333 1.333H20c.733 0 1.333-.6 1.333-1.333v-2a1.3 1.3 0 0 0-.3-.833 1.3 1.3 0 0 0 .3-.834V13c0-.733-.6-1.333-1.333-1.333ZM17.333 13H20v2.333h-2.667V13Zm0 6v-2H20v2h-2.667ZM11.333 16h-.666v-.667c0-.366-.3-.666-.667-.666-.367 0-.667.3-.667.666V16h-.666C8.3 16 8 16.3 8 16.667c0 .366.3.666.667.666h.666V18c0 .367.3.667.667.667.367 0 .667-.3.667-.667v-.667h.666c.367 0 .667-.3.667-.666 0-.367-.3-.667-.667-.667Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeUnderageGamblingIcon);
export default ForwardRef;
