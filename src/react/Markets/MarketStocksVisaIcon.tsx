import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksVisaIcon = (
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
        fill='#1A1F71'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
      />
      <path
        fill='#fff'
        d='M19.705 12a4.77 4.77 0 0 1 1.74.322l-.27 1.636-.172-.09a3.451 3.451 0 0 0-1.456-.278c-.75 0-1.102.293-1.11.652-.007.36.413.585 1.088.938 1.125.54 1.635 1.192 1.635 2.055 0 1.567-1.335 2.588-3.375 2.588a5.903 5.903 0 0 1-2.16-.405l.277-1.695.248.12c.568.28 1.197.416 1.83.397.563 0 1.162-.232 1.162-.75 0-.337-.27-.585-1.005-.945-.735-.36-1.702-.968-1.702-2.055-.008-1.463 1.35-2.49 3.27-2.49Zm4.2.75a.96.96 0 0 1 1.02-.592h1.5L28 19.703h-1.8l-.113-.518v-.105c-.044-.202-.082-.397-.104-.502H23.5c-.075.195-.405 1.125-.405 1.125h-2.07l2.88-6.953Zm-8.295-.592-1.215 7.545H12.46l1.215-7.545h1.935Zm-8.453 0a.818.818 0 0 1 .886.637l.682 3.472v.038l.203 1.05 1.897-5.197h2.063l-3.075 7.537H7.75l-1.725-6.57A7.704 7.704 0 0 0 4 12.293v-.135h3.157Zm17.903 2.024c-.052.158-.127.375-.188.525v.068l-.044.127-.75 2.115h1.612c-.038-.165-.128-.614-.218-1.057v-.143l-.202-.982-.21-.653Z'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksVisaIcon);
export default ForwardRef;
