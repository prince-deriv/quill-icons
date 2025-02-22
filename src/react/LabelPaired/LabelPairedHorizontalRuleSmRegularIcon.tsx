import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedHorizontalRuleSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.25 10.75c.018-.273.164-.42.438-.438h16.625c.273.019.419.165.437.438-.018.273-.164.42-.438.438H.688c-.273-.019-.419-.165-.437-.438Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleSmRegularIcon);
export default ForwardRef;
