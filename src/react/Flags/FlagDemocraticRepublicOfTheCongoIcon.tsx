import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagDemocraticRepublicOfTheCongoIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='#007BFF'
      fillRule='evenodd'
      d='M2 0h15.99L0 10.387V2a2 2 0 0 1 2-2Zm1.308 4.366-.28 1.637 1.47-.773 1.469.772-.282-1.636 1.19-1.16-1.643-.237-.734-1.49-.735 1.49-1.643.237 1.188 1.16Z'
      clipRule='evenodd'
    />
    <path fill='#007BFF' d='M22 16H6.277L24 5.768V14a2 2 0 0 1-2 2Z' />
    <path
      fill='#F8D800'
      d='M0 10.387 17.99 0h2L0 11.541v-1.154ZM6.277 16h-2L24 4.613v1.155L6.277 16Z'
    />
    <path
      fill='#D00817'
      d='M0 11.541 19.99 0H22a2 2 0 0 1 2 2v2.613L4.277 16H2a2 2 0 0 1-2-2v-2.459Z'
    />
    <path
      fill='#FFE000'
      fillRule='evenodd'
      d='m4.498 5.23-1.47.773.28-1.637-1.188-1.16 1.643-.237.735-1.49.734 1.49 1.643.237-1.19 1.16.282 1.636'
      clipRule='evenodd'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagDemocraticRepublicOfTheCongoIcon);
export default ForwardRef;
