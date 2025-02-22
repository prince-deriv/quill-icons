import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCloneMdRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M2 19h7a.974.974 0 0 0 .719-.281A.974.974 0 0 0 10 18v-2h1v2c-.02.563-.219 1.031-.594 1.406S9.562 19.98 9 20H2c-.563-.02-1.031-.219-1.406-.594S.02 18.563 0 18v-7c.02-.563.219-1.031.594-1.406S1.438 9.02 2 9h2v1H2a.974.974 0 0 0-.719.281A.974.974 0 0 0 1 11v7c0 .292.094.531.281.719A.974.974 0 0 0 2 19Zm5-5h7a.974.974 0 0 0 .719-.281A.974.974 0 0 0 15 13V6a.974.974 0 0 0-.281-.719A.974.974 0 0 0 14 5H7a.973.973 0 0 0-.719.281A.973.973 0 0 0 6 6v7c0 .292.094.531.281.719A.974.974 0 0 0 7 14Zm-2-1V6c.02-.563.219-1.031.594-1.406S6.437 4.02 7 4h7c.563.02 1.031.219 1.406.594S15.98 5.437 16 6v7c-.02.563-.219 1.031-.594 1.406S14.562 14.98 14 15H7c-.563-.02-1.031-.219-1.406-.594S5.02 13.562 5 13Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneMdRegularIcon);
export default ForwardRef;
