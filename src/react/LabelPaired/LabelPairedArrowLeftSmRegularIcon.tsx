import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowLeftSmRegularIcon = (
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
      <path d='m.512 10.45 4.812-4.813c.2-.183.401-.183.602 0 .182.2.182.4 0 .601l-4.047 4.074h10.308c.274.019.42.165.438.438-.018.273-.164.42-.438.438H1.88l4.047 4.074c.182.2.182.4 0 .601-.2.183-.401.183-.602 0L.512 11.051c-.183-.2-.183-.401 0-.602Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftSmRegularIcon);
export default ForwardRef;
