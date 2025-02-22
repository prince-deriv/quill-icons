import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBackwardStepCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M2.125 5.563v2.46l4.148-2.906A.667.667 0 0 1 6.672 5c.203 0 .367.07.492.21.14.126.211.29.211.493v7.594c0 .203-.07.367-.21.492a.627.627 0 0 1-.493.211.74.74 0 0 1-.399-.117l-4.148-2.906v2.46c-.031.344-.219.532-.563.563-.343-.031-.53-.219-.562-.563V5.563c.031-.343.219-.53.563-.562.343.031.53.219.562.563Zm0 4.03L6.25 12.5V6.523L2.125 9.406v.188Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepCaptionBoldIcon);
export default ForwardRef;
