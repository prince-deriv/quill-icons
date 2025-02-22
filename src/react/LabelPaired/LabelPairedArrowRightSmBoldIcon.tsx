import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowRightSmBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      <path d='M12.434 11.215 7.62 15.809c-.328.255-.638.255-.93 0-.255-.329-.255-.638 0-.93l3.637-3.473H1.031c-.4-.036-.62-.255-.656-.656.036-.401.255-.62.656-.656h9.297L6.718 6.62c-.273-.292-.282-.601-.027-.93.292-.255.602-.255.93 0l4.813 4.594a.633.633 0 0 1 .191.465.633.633 0 0 1-.191.465Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightSmBoldIcon);
export default ForwardRef;
