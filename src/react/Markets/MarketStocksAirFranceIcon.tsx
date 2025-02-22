import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksAirFranceIcon = (
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
        fill='#F6F7F8'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
      />
      <path
        fill='url(#b)'
        d='m26.016 12.164-3.448 5.044c-.524.758-1.206 1.562-2.233 1.64v.12l2.706-.001c1.176 0 2.017-1.345 2.598-2.188l3.215-4.637-2.838.022Z'
      />
      <path
        fill='#002157'
        fillRule='evenodd'
        d='M10.993 18.167c.303.49.838.788 1.413.788H14l-4.72-6.813H7.408l-4.554 6.813h1.882l1.014-1.611 4.733-.002.51.825Zm-1.33-1.99h-3.18l1.638-2.399 1.543 2.398Z'
        clipRule='evenodd'
      />
      <path
        fill='#002157'
        d='m14.508 18.955.004-6.813h7.172l-.003 1.178h-5.17v2.06h5.064v1.265h-5.063v2.31h-2.004Z'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksAirFranceIcon);
export default ForwardRef;
