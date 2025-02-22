import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronLeftSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.7 11.05c-.183-.2-.183-.4 0-.6L5.95 5.2c.2-.183.4-.183.6 0 .183.2.183.4 0 .6L1.63 10.75 6.55 15.7c.182.2.182.4 0 .6-.2.183-.401.183-.602 0L.7 11.05Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftSmRegularIcon);
export default ForwardRef;
