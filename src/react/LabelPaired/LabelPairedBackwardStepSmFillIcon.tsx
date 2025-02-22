import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBackwardStepSmFillIcon = (
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
      <path d='m7.453 15.809-5.25-4.375-.328-.274v3.965a.852.852 0 0 1-.246.629A.852.852 0 0 1 1 16a.852.852 0 0 1-.629-.246.852.852 0 0 1-.246-.629v-8.75c0-.255.082-.465.246-.629A.852.852 0 0 1 1 5.5c.255 0 .465.082.629.246a.852.852 0 0 1 .246.629v3.965l.328-.274 5.25-4.375c.274-.218.583-.255.93-.109.31.164.474.428.492.793v8.75c-.018.365-.182.629-.492.793-.347.146-.656.11-.93-.11Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepSmFillIcon);
export default ForwardRef;
