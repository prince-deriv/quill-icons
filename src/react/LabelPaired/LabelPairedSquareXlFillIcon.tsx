import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSquareXlFillIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M0 10.5c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89h15c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v15c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89-.562-.563-.859-1.266-.89-2.11v-15Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareXlFillIcon);
export default ForwardRef;
