import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMoneyBillMdBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M3.5 7.5c-.02.563-.219 1.031-.594 1.406S2.062 9.48 1.5 9.5v5c.563.02 1.031.219 1.406.594s.573.844.594 1.406h11c.02-.563.219-1.031.594-1.406s.844-.573 1.406-.594v-5c-.563-.02-1.031-.219-1.406-.594S14.52 8.062 14.5 7.5h-11ZM0 8c.02-.563.219-1.031.594-1.406S1.438 6.02 2 6h14c.563.02 1.031.219 1.406.594S17.98 7.437 18 8v8c-.02.563-.219 1.031-.594 1.406S16.563 17.98 16 18H2c-.563-.02-1.031-.219-1.406-.594S.02 16.563 0 16V8Zm9 1c.542 0 1.042.135 1.5.406A3.007 3.007 0 0 1 12 12a3.007 3.007 0 0 1-1.5 2.594c-.458.27-.958.406-1.5.406a2.896 2.896 0 0 1-1.5-.406A3.007 3.007 0 0 1 6 12a3.007 3.007 0 0 1 1.5-2.594C7.958 9.136 8.458 9 9 9Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillMdBoldIcon);
export default ForwardRef;
