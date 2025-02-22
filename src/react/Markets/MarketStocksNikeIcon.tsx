import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksNikeIcon = (
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
        fill='#000'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M7.077 12.382c-1.575 1.837-3.074 4.11-3.074 5.811a2.002 2.002 0 0 0 .69 1.62 3.329 3.329 0 0 0 2.25.825 8.728 8.728 0 0 0 3.133-.81c1.5-.585 17.824-7.686 17.824-7.686.157-.082.127-.18-.075-.127L10 16.836c-.334.095-.68.143-1.027.143-1.365 0-2.572-.75-2.564-2.34a5.25 5.25 0 0 1 .637-2.25l.03-.007Z'
        clipRule='evenodd'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksNikeIcon);
export default ForwardRef;
