import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M6.836 23.977.273 17.102c-.364-.47-.351-.912.04-1.329.442-.364.872-.364 1.289 0l4.96 5.196V7.687c.053-.572.365-.885.938-.937.573.052.885.365.938.938v13.28l4.96-5.155c.417-.391.86-.404 1.329-.04.364.417.364.86 0 1.329l-6.563 6.875a.904.904 0 0 1-.664.273.904.904 0 0 1-.664-.273Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLgBoldIcon);
export default ForwardRef;
