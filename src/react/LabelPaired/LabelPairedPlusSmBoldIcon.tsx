import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlusSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M7.156 5.719v4.375h4.375c.401.036.62.255.656.656-.036.401-.255.62-.656.656H7.156v4.375c-.036.401-.255.62-.656.656-.401-.036-.62-.255-.656-.656v-4.375H1.469c-.401-.036-.62-.255-.657-.656.037-.401.256-.62.657-.656h4.375V5.719c.036-.401.255-.62.656-.657.401.037.62.256.656.657Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusSmBoldIcon);
export default ForwardRef;
