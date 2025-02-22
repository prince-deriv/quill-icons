import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedAndroidSmIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M11.637 12.008c.383-.037.601-.255.656-.656-.055-.402-.273-.62-.656-.657-.401.037-.62.255-.657.657.037.4.256.62.657.656Zm-7.274 0c.401-.037.62-.255.657-.656-.037-.402-.256-.62-.657-.657-.383.037-.601.255-.656.657.055.4.273.62.656.656Zm7.492-3.965a7.64 7.64 0 0 1 2.762 2.57c.711 1.058 1.13 2.27 1.258 3.637H.125c.128-1.367.547-2.58 1.258-3.637a7.64 7.64 0 0 1 2.762-2.57l-1.313-2.27a.294.294 0 0 1-.027-.273.269.269 0 0 1 .246-.137c.11 0 .191.046.246.137l1.34 2.324A7.994 7.994 0 0 1 8 7.086c1.167 0 2.288.246 3.363.738l1.34-2.324a.269.269 0 0 1 .246-.137c.11 0 .192.046.246.137a.294.294 0 0 1-.027.273l-1.313 2.27Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAndroidSmIcon);
export default ForwardRef;
