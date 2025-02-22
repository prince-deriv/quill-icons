import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownRightSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M9.438 15.125H3.311c-.273-.018-.419-.164-.437-.438.018-.273.164-.419.438-.437H8.37l-7.11-7.137c-.182-.2-.182-.4 0-.601.201-.183.402-.183.602 0L9 13.622v-5.06c.018-.273.164-.419.438-.437.273.018.419.164.437.438v6.124c-.018.274-.164.42-.438.438Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightSmRegularIcon);
export default ForwardRef;
