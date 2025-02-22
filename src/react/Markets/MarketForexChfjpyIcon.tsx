import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketForexChfjpyIcon = (
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
      fill='#F44336'
      fillRule='evenodd'
      d='M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm11.655 6.319h2.897c.228 0 .414.188.414.42v2.522c0 .232-.186.42-.414.42h-2.897v2.943c0 .232-.185.42-.414.42H10.76a.417.417 0 0 1-.414-.42v-2.942H7.448a.417.417 0 0 1-.414-.42v-2.523c0-.232.186-.42.414-.42h2.897V7.376c0-.232.185-.42.413-.42h2.483c.229 0 .414.188.414.42v2.943Z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M16.552 10.319h-2.897V7.376a.417.417 0 0 0-.414-.42H10.76a.417.417 0 0 0-.414.42v2.943H7.448a.417.417 0 0 0-.414.42v2.522c0 .232.186.42.414.42h2.897v2.943c0 .232.185.42.413.42h2.483a.417.417 0 0 0 .414-.42v-2.943h2.897a.417.417 0 0 0 .414-.42v-2.522a.417.417 0 0 0-.414-.42Z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 5H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM2 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M8 14a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V14Z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M30 13H10a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1Zm-20-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2H10Z'
      clipRule='evenodd'
    />
    <path fill='#ED293F' d='M24.5 20a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z' />
  </svg>
);
const ForwardRef = forwardRef(MarketForexChfjpyIcon);
export default ForwardRef;
