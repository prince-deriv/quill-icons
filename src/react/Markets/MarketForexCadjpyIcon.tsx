import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketForexCadjpyIcon = (
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
      fill='#fff'
      fillRule='evenodd'
      d='M6 4h12v16H6V4Zm6.673 4.34-.672-1.279V7.06v.002l-.673 1.28a.411.411 0 0 1-.474.207l-.638-.177.417 2.462c.035.209-.223.332-.358.171l-.976-1.16-.1.457a.413.413 0 0 1-.52.313l-1.04-.308.184 1.397a.422.422 0 0 1-.225.431l-.563.286 2.455 1.426c.255.147.366.46.263.74l-.21.57 2.105-.183a.197.197 0 0 1 .212.204l-.067 2.288h.414l-.066-2.288a.197.197 0 0 1 .212-.204l2.105.182-.21-.57a.612.612 0 0 1 .263-.74l2.456-1.425-.564-.286a.422.422 0 0 1-.225-.431l.183-1.397-1.04.307a.414.414 0 0 1-.519-.312l-.1-.458-.975 1.161c-.136.16-.393.038-.358-.17l.417-2.463-.638.177a.411.411 0 0 1-.475-.207Z'
      clipRule='evenodd'
    />
    <path
      fill='#F44336'
      d='M18 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4V4ZM2 4h4v16H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM12.001 7.06v.001l.672 1.28c.091.173.288.26.475.207l.638-.177-.417 2.462c-.035.209.222.332.358.171l.976-1.16.1.457c.05.237.29.38.519.312l1.04-.307-.184 1.397a.422.422 0 0 0 .225.431l.564.286-2.456 1.426a.612.612 0 0 0-.263.74l.21.57-2.105-.183a.197.197 0 0 0-.212.204l.066 2.288h-.414l.067-2.288a.197.197 0 0 0-.212-.204l-2.105.182.21-.57a.611.611 0 0 0-.263-.74L7.035 12.42l.563-.286a.422.422 0 0 0 .225-.431l-.183-1.397 1.04.308a.413.413 0 0 0 .519-.313l.1-.457.976 1.16c.135.16.393.038.358-.17l-.417-2.463.638.177a.411.411 0 0 0 .474-.207L12 7.06l.001-.002Z'
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
const ForwardRef = forwardRef(MarketForexCadjpyIcon);
export default ForwardRef;
