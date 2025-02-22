import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartTrendSidewayLgBoldIcon = (
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
      <path d='M.313 15.5c0-.508.39-.938.937-.938h22.5a.95.95 0 0 1 .938.938c0 .547-.43.938-.938.938H1.25c-.547 0-.938-.391-.938-.938Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendSidewayLgBoldIcon);
export default ForwardRef;
