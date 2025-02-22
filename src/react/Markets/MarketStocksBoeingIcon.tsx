import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksBoeingIcon = (
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
        fill='#0033A1'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
      />
      <path
        fill='#fff'
        d='M17.155 18.008a6.904 6.904 0 0 0-2.442-8.668A52.178 52.178 0 0 1 18.282 6a31.102 31.102 0 0 0-4.186 2.983 6.904 6.904 0 0 0-8.429 10.62c-1.32 2.86-1.53 5.155-.387 5.93 1.25.831 3.962-.678 5.609-3.13 0 0-2.52 2.269-3.901 1.748-.851-.32-.851-1.626-.153-3.492a6.904 6.904 0 0 0 8.933-.653l.245.46C19.02 20.22 28 19.98 28 19.98c-.02-.423-5.966-.016-10.845-1.973ZM4.826 15.096a6.078 6.078 0 0 1 8.591-5.527 33.103 33.103 0 0 0-7.347 9.214 6.047 6.047 0 0 1-1.244-3.687ZM10.9 21.17a6.047 6.047 0 0 1-3.758-1.3c1.203-2.713 3.65-6.353 6.99-9.912a6.073 6.073 0 0 1 2.26 7.724 11.091 11.091 0 0 1-2.887-1.881l1.83 3.436A6.052 6.052 0 0 1 10.9 21.17Z'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksBoeingIcon);
export default ForwardRef;
