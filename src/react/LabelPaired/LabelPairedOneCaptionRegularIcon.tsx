import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedOneCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={18}
    viewBox='0 0 6 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M3.375 4.625V14h2.25c.234.016.36.14.375.375-.016.234-.14.36-.375.375H.375c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375h2.25V5.328L.961 6.43c-.203.11-.375.078-.516-.094-.11-.203-.078-.375.094-.516l2.25-1.5a.402.402 0 0 1 .398-.023.367.367 0 0 1 .188.328Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneCaptionRegularIcon);
export default ForwardRef;
