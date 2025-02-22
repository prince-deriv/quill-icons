import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBackwardStepXlFillIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='m12.563 26.672-9-7.5L3 18.703V25.5c0 .438-.14.797-.422 1.078-.281.281-.64.422-1.078.422-.438 0-.797-.14-1.078-.422C.14 26.297 0 25.938 0 25.5v-15c0-.438.14-.797.422-1.078C.703 9.14 1.062 9 1.5 9c.438 0 .797.14 1.078.422.281.281.422.64.422 1.078v6.797l.563-.469 9-7.5c.468-.375 1-.437 1.593-.187.531.28.813.734.844 1.359v15c-.031.625-.313 1.078-.844 1.36-.594.25-1.125.187-1.594-.188Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepXlFillIcon);
export default ForwardRef;
