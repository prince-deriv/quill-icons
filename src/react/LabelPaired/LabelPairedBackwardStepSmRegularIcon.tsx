import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBackwardStepSmRegularIcon = (
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
      <path d='M1.875 5.938v3.718L6.77 5.664a.69.69 0 0 1 .464-.164c.22 0 .401.073.547.219A.742.742 0 0 1 8 6.266v8.968a.742.742 0 0 1-.219.547.742.742 0 0 1-.547.219.69.69 0 0 1-.464-.164l-4.895-3.992v3.719c-.018.273-.164.419-.438.437-.273-.018-.419-.164-.437-.438V5.938c.018-.273.164-.419.438-.437.273.018.419.164.437.438Zm5.25.574L1.902 10.75l5.223 4.238V6.512Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepSmRegularIcon);
export default ForwardRef;
