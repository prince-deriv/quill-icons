import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksAppleIcon = (
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
        fill='#000'
        d='M23.665 20.803a10.327 10.327 0 0 1-1.021 1.836c-.537.766-.977 1.296-1.316 1.59-.525.483-1.088.73-1.69.745-.434 0-.955-.123-1.563-.373-.609-.249-1.169-.372-1.681-.372-.537 0-1.113.123-1.729.372-.617.25-1.114.38-1.494.393-.578.024-1.154-.23-1.729-.765-.367-.32-.826-.869-1.376-1.646-.59-.83-1.075-1.793-1.455-2.89C8.204 18.507 8 17.359 8 16.248c0-1.273.275-2.37.826-3.29a4.846 4.846 0 0 1 1.73-1.75 4.653 4.653 0 0 1 2.339-.66c.459 0 1.061.141 1.809.42.746.28 1.225.422 1.435.422.157 0 .689-.166 1.591-.497.853-.307 1.573-.434 2.163-.384 1.598.13 2.799.76 3.597 1.894-1.43.866-2.136 2.08-2.122 3.635.013 1.212.452 2.22 1.317 3.022.391.371.828.659 1.315.863-.105.306-.217.599-.335.88ZM20 6.38c0 .95-.348 1.837-1.04 2.658-.834.976-1.844 1.54-2.939 1.451a2.968 2.968 0 0 1-.022-.36c0-.912.397-1.888 1.102-2.686.352-.404.8-.74 1.343-1.008.541-.264 1.054-.41 1.536-.435.014.127.02.254.02.38Z'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksAppleIcon);
export default ForwardRef;
