import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPenSmRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M10.828 4.844 9.324 6.32l2.106 2.106 1.476-1.504c.255-.31.255-.62 0-.93l-1.148-1.148c-.31-.255-.62-.255-.93 0ZM8.695 6.949 2.27 13.375c-.201.219-.347.474-.438.766l-.738 2.515 2.515-.738c.292-.091.547-.237.766-.438l6.426-6.425-2.106-2.106Zm3.664-2.734 1.176 1.176c.292.31.438.665.438 1.066 0 .42-.146.784-.438 1.094l-8.558 8.531c-.31.328-.675.556-1.094.684l-3.309.957c-.182.054-.328.018-.437-.11-.128-.11-.164-.246-.11-.41l.957-3.308c.128-.438.347-.812.657-1.122l8.558-8.558c.31-.292.675-.438 1.094-.438.401 0 .757.146 1.066.438Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenSmRegularIcon);
export default ForwardRef;
