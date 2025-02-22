import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedHorizontalRuleSmBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.25 10.75c.036-.401.255-.62.656-.656h16.188c.4.036.62.255.656.656-.037.401-.255.62-.656.656H.906c-.4-.036-.62-.255-.656-.656Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleSmBoldIcon);
export default ForwardRef;
