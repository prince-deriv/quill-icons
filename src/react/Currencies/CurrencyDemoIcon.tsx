import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const CurrencyDemoIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='#85ACB0'
      d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
    />
    <path
      fill='#fff'
      d='M17.535 6C22.665 6 27 10.743 27 16s-4.336 10-9.465 10H9a1 1 0 1 1 0-2h2v-4H9a1 1 0 0 1-.993-.883L8 19a1 1 0 0 1 1-1h2v-4H9a1 1 0 0 1-.993-.883L8 13a1 1 0 0 1 1-1h2V8H9a1 1 0 0 1-.993-.883L8 7a1 1 0 0 1 1-1h8.535Zm0 2H13v4h4a1 1 0 0 1 .993.883L18 13a1 1 0 0 1-1 1h-4v4h4a1 1 0 0 1 .993.883L18 19a1 1 0 0 1-1 1h-4v4h4.535c3.906 0 7.33-3.665 7.461-7.759L25 16c0-4.19-3.483-8-7.465-8Z'
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyDemoIcon);
export default ForwardRef;
