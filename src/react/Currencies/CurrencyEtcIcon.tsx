import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const CurrencyEtcIcon = (
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
    <g clipPath='url(#a)'>
      <path
        fill='#0B8311'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
      />
      <path
        fill='#fff'
        d='M8.591 17.073c2.611 1.386 5.335 2.837 7.44 3.96l7.378-3.96a3509.153 3509.153 0 0 1-7.378 10.93c-2.486-3.65-5.23-7.675-7.44-10.93Zm.284-1.095 7.164-3.823 7.07 3.795-7.066 3.827-7.168-3.8Zm7.155-5.047-7.439 3.916 7.407-10.845 7.41 10.87-7.378-3.941Z'
      />
      <path
        fill='#ADCDAD'
        d='m16.03 21.033 7.379-3.96c-2.672 3.968-7.378 10.93-7.378 10.93v-6.97Zm.009-8.878 7.07 3.795-7.066 3.827-.004-7.622Zm-.009-1.224-.032-6.929 7.41 10.87-7.378-3.941Z'
      />
      <path fill='#AECDAE' d='m8.875 15.978 7.164.588 7.07-.612-7.067 3.826-7.167-3.802Z' />
      <path fill='#5B9C5B' d='m16.039 16.566 7.07-.612-7.067 3.826-.003-3.214Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(CurrencyEtcIcon);
export default ForwardRef;
