import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartTrendSidewayLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.625 15.5c0-.313.273-.625.625-.625h22.5c.313 0 .625.313.625.625a.642.642 0 0 1-.625.625H1.25a.617.617 0 0 1-.625-.625Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendSidewayLgRegularIcon);
export default ForwardRef;
