import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagBelarusIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='#E54252'
      d='M22 0H4v3.001L3.332 4 4 4.999v2.002L3.333 8 4 8.999V11H24V2a2 2 0 0 0-2-2Z'
    />
    <path
      fill='#E54252'
      d='m2.667 11 .666-1L2 8l1.333-2L2 4l1.333-2L2 0 .667 2 2 4 .667 6 2 8 .667 10l.666 1h1.334ZM0 2.999v2L.667 4 0 2.999ZM0 6.999v2L.667 8 0 6.999Z'
    />
    <path
      fill='#5CBE6B'
      d='M1.333 11h1.334L2 12l-.667-1ZM0 10.999v2L.667 12 0 10.999ZM2 16 .667 14 2 12l1.333 2L2 16Z'
    />
    <path
      fill='#5CBE6B'
      d='M3.333 16H22a2 2 0 0 0 2-2v-3H4v.001L3.332 12l.666.999v2.002L3.333 16Z'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M4 3.001V0H2a2 2 0 0 0-2 2v.999L.667 4 0 4.999v2L.667 8 0 8.999v2L.667 12 0 12.999V14a2 2 0 0 0 2 2h1.333L4 15.001v-2.002L3.333 12 4 11.001V8.999L3.333 8 4 7.001V4.999L3.333 4 4 3.001ZM2 12l1.333 2L2 16 .667 14 2 12Zm0-4 1.333 2L2 12 .667 10 2 8Zm0-4 1.333 2L2 8 .667 6 2 4Zm0 0L.667 2 2 0l1.333 2L2 4Z'
      clipRule='evenodd'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagBelarusIcon);
export default ForwardRef;
