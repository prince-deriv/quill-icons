import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMinusSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12.188 10.75c-.037.401-.256.62-.657.656H1.47c-.401-.036-.62-.255-.657-.656.037-.401.256-.62.657-.656H11.53c.401.036.62.255.656.656Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMinusSmBoldIcon);
export default ForwardRef;
