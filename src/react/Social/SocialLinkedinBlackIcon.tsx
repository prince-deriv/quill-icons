import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const SocialLinkedinBlackIcon = (
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
      fill='#000'
      fillRule='evenodd'
      d='M2.412 0h27.27A2.294 2.294 0 0 1 32 2.302v27.394C32 30.968 30.607 32 29.301 32H2.031C.727 32 0 30.968 0 29.696V2.302C0 1.032 1.108 0 2.412 0Zm17.744 16c-2.299 0-3.394 1.556-3.394 4.11v7.318H12.19V12.19h4.307v2.197h.048C17.203 13.202 19.142 12 21.54 12c4.604 0 5.888 2.444 5.888 6.971v8.457h-4.57v-7.623c0-2.026-.81-3.805-2.702-3.805ZM9.714 6.857a2.865 2.865 0 0 1-.836 2.02 2.866 2.866 0 0 1-2.02.838A2.862 2.862 0 0 1 4.22 7.952a2.849 2.849 0 0 1 .619-3.113 2.856 2.856 0 0 1 4.876 2.018Zm-.571 20.571H4.572V12.19h4.57v15.238Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(SocialLinkedinBlackIcon);
export default ForwardRef;
