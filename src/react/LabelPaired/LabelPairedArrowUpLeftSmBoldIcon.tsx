import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpLeftSmBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M1.781 6.375h6.563c.4.036.62.255.656.656-.036.401-.255.62-.656.657H3.367l6.317 6.316c.255.31.255.62 0 .93-.31.255-.62.255-.93 0L2.438 8.617v4.977c-.037.4-.256.62-.657.656-.4-.037-.62-.255-.656-.656V7.03c.036-.4.255-.62.656-.656Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftSmBoldIcon);
export default ForwardRef;
