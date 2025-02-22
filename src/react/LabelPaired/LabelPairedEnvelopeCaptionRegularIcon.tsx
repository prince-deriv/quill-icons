import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedEnvelopeCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M1.5 5.75a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v.938l4.594 3.351c.437.297.875.297 1.312 0l4.594-3.351V6.5a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21h-9ZM.75 8.375V12.5c0 .219.07.398.21.54.142.14.321.21.54.21h9a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54V8.375l-4.148 3.023c-.329.25-.696.375-1.102.375-.406 0-.773-.125-1.102-.375L.75 8.375ZM0 6.5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h9c.422.016.773.164 1.055.445.28.282.43.633.445 1.055v6a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-9a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 0 12.5v-6Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeCaptionRegularIcon);
export default ForwardRef;
