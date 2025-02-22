import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlusCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M6.063 5.188v3.75h3.75c.343.03.53.218.562.562-.031.344-.219.531-.563.563h-3.75v3.75c-.03.343-.218.53-.562.562-.344-.031-.531-.219-.563-.563v-3.75h-3.75c-.343-.03-.53-.218-.562-.562.031-.344.219-.531.563-.563h3.75v-3.75c.03-.343.218-.53.562-.562.344.031.531.219.563.563Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusCaptionBoldIcon);
export default ForwardRef;
