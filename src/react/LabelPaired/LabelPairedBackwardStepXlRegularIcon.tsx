import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBackwardStepXlRegularIcon = (
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
      <path d='M3 9.75v6.375l8.39-6.844c.22-.187.485-.281.797-.281.376 0 .688.125.938.375s.375.563.375.938v15.374c0 .375-.125.688-.375.938s-.563.375-.938.375c-.312 0-.578-.094-.796-.281L3 19.875v6.375c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75V9.75c.031-.469.281-.719.75-.75.469.031.719.281.75.75Zm9 .984L3.047 18 12 25.266V10.734Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepXlRegularIcon);
export default ForwardRef;
