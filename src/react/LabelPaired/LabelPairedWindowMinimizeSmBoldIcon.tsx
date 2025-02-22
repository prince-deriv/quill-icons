import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedWindowMinimizeSmBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.656 15.563h12.688c.4.036.62.255.656.656-.037.4-.255.62-.656.656H.656c-.4-.037-.62-.255-.656-.656.036-.401.255-.62.656-.657Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMinimizeSmBoldIcon);
export default ForwardRef;
