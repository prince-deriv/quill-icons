import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksBankOfAmericaIcon = (
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
        fill='#EE2A24'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
      />
      <path
        fill='#fff'
        d='M21.032 12.025A40.676 40.676 0 0 0 15.318 10c-.63.12-1.245.262-1.86.42a37.493 37.493 0 0 1 5.655 2.152c.637-.194 1.29-.39 1.92-.547ZM18.085 12.895a40.921 40.921 0 0 0-5.618-2.197c-.69.194-1.365.412-2.017.63a40.5 40.5 0 0 1 5.775 2.25c.615-.233 1.23-.45 1.86-.668v-.015ZM12.842 20.192a49.8 49.8 0 0 1 12.946-6.585c.75.39 1.462.81 2.212 1.26a52.276 52.276 0 0 0-12.285 7.268 39.334 39.334 0 0 0-2.873-1.943ZM22.578 12.1a44.677 44.677 0 0 0-13.455 6.053c.915.457 1.822.93 2.715 1.447a47.249 47.249 0 0 1 13.215-6.375l-.205-.098c-.742-.358-1.487-.718-2.27-1.027ZM10.63 12.063A37.985 37.985 0 0 0 4 14.89c.675.255 1.343.518 1.995.795a36.4 36.4 0 0 1 6.435-3 28.213 28.213 0 0 0-1.8-.615v-.008ZM13.277 12.992c.75.278 1.426.57 2.123.908a44.775 44.775 0 0 0-6.412 3.187 39.192 39.192 0 0 0-2.115-1.027 44.409 44.409 0 0 1 6.404-3.067Z'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksBankOfAmericaIcon);
export default ForwardRef;
