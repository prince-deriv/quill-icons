import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksMetaIcon = (
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
        fill='#F2F5F8'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
      />
      <path
        fill='url(#b)'
        d='M20.353 9.355c-1.64 0-2.921 1.235-4.083 2.804-1.594-2.03-2.927-2.804-4.523-2.804C8.493 9.355 6 13.589 6 18.072c0 2.804 1.357 4.573 3.63 4.573 1.635 0 2.812-.77 4.903-4.427l1.472-2.6c.21.34.432.705.664 1.097l.98 1.65c1.91 3.196 2.975 4.28 4.905 4.28 2.214 0 3.446-1.793 3.446-4.655-.001-4.693-2.55-8.635-5.647-8.635Zm-7.416 7.873c-1.695 2.658-2.281 3.253-3.226 3.253-.972 0-1.55-.853-1.55-2.373 0-3.254 1.623-6.581 3.556-6.581 1.048 0 1.923.604 3.263 2.523-1.27 1.954-2.043 3.178-2.043 3.178Zm6.4-.335-1.171-1.955a40.855 40.855 0 0 0-.915-1.425c1.057-1.63 1.929-2.444 2.965-2.444 2.154 0 3.877 3.171 3.877 7.067 0 1.484-.486 2.347-1.494 2.347-.966-.002-1.427-.638-3.261-3.59Z'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksMetaIcon);
export default ForwardRef;
