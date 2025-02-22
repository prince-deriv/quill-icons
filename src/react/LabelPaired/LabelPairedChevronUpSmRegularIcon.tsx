import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronUpSmRegularIcon = (
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
      <path d='M6.7 6.95c.2-.183.4-.183.6 0l5.25 5.25c.183.2.183.4 0 .6-.2.183-.4.183-.6 0L7 7.88 2.05 12.8c-.2.182-.4.182-.6 0-.183-.2-.183-.401 0-.602L6.7 6.95Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpSmRegularIcon);
export default ForwardRef;
