import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksUberIcon = (
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
        fill='#0E0E0E'
        fillRule='evenodd'
        d='M12.6 14.83v-3l-1.18-.03V20h1.22v-.72c.274.273.596.493.95.65.373.16.774.243 1.18.24a3.16 3.16 0 0 0 2.9-1.9 3 3 0 0 0 .24-1.21 3.07 3.07 0 0 0-.24-1.21 3 3 0 0 0-.67-1 3.26 3.26 0 0 0-1-.67 3.14 3.14 0 0 0-1.23-.24 2.851 2.851 0 0 0-1.17.24 3.15 3.15 0 0 0-1 .65Zm.57 3.66a2.13 2.13 0 0 1-.43-2.28c.107-.246.26-.47.45-.66a2 2 0 0 1 1.45-.6c.272-.003.54.051.79.16a2 2 0 0 1 .65.44c.187.19.336.414.44.66a2.13 2.13 0 0 1 0 1.62 2.002 2.002 0 0 1-1.09 1.1 1.92 1.92 0 0 1-.79.16 2 2 0 0 1-.81-.16 2.31 2.31 0 0 1-.66-.44Z'
        clipRule='evenodd'
      />
      <path
        fill='#0E0E0E'
        d='M5.8 18.47a2 2 0 0 1-.42-.69 2.48 2.48 0 0 1-.15-.89v-5.06H4V17c-.014.428.05.855.19 1.26.152.374.376.714.66 1a2.76 2.76 0 0 0 1 .65 3.27 3.27 0 0 0 1.22.23 3 3 0 0 0 1.2-.24 2.82 2.82 0 0 0 1-.67V20h1.18v-8.17H9.22v5.06a2.52 2.52 0 0 1-.15.89 1.92 1.92 0 0 1-.43.68 2 2 0 0 1-.64.45c-.24.101-.499.155-.76.16a1.94 1.94 0 0 1-.8-.16 1.67 1.67 0 0 1-.64-.44Z'
      />
      <path
        fill='#0E0E0E'
        fillRule='evenodd'
        d='M18.52 15.85a3 3 0 0 1 .65-1 2.76 2.76 0 0 1 1-.67 2.88 2.88 0 0 1 1.21-.25c.411-.002.819.076 1.2.23a2.92 2.92 0 0 1 1.57 1.64c.132.386.197.792.19 1.2v.39h-4.86a2 2 0 0 0 .24.67 1.9 1.9 0 0 0 .43.54c.18.15.383.272.6.36a2.14 2.14 0 0 0 2.43-.75l.85.63a3.001 3.001 0 0 1-1.1.93 3.09 3.09 0 0 1-1.47.34 3.23 3.23 0 0 1-1.25-.23 3 3 0 0 1-1-.66 3.189 3.189 0 0 1-.68-1 3.26 3.26 0 0 1 0-2.43l-.01.06Zm1.65-.46a1.93 1.93 0 0 0-.67 1.1h3.64a1.85 1.85 0 0 0-.65-1.1 1.81 1.81 0 0 0-2.32 0Z'
        clipRule='evenodd'
      />
      <path
        fill='#0E0E0E'
        d='M26.17 16.63a1.57 1.57 0 0 1 .38-1.11 1.25 1.25 0 0 1 .96-.42H28V14h-.41a1.6 1.6 0 0 0-1.42.73V14H25v6h1.17v-3.37Z'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksUberIcon);
export default ForwardRef;
