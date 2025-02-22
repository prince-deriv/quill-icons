import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCopyMdRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M12 15a.974.974 0 0 0 .719-.281A.974.974 0 0 0 13 14V7.625a.416.416 0 0 0-.156-.344l-2.125-2.125A.416.416 0 0 0 10.375 5H7a.973.973 0 0 0-.719.281A.973.973 0 0 0 6 6v8c0 .292.094.531.281.719A.974.974 0 0 0 7 15h5Zm1.563-8.438c.291.292.437.646.437 1.063V14c-.02.563-.219 1.031-.594 1.406S12.562 15.98 12 16H7c-.563-.02-1.031-.219-1.406-.594S5.02 14.562 5 14V6c.02-.563.219-1.031.594-1.406S6.437 4.02 7 4h3.375c.417 0 .77.146 1.063.438l2.124 2.125ZM2 8h2v1H2a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 10v8c0 .292.094.531.281.719A.974.974 0 0 0 2 19h5a.974.974 0 0 0 .719-.281A.974.974 0 0 0 8 18v-1h1v1c-.02.563-.219 1.031-.594 1.406S7.562 19.98 7 20H2c-.563-.02-1.031-.219-1.406-.594S.02 18.563 0 18v-8c.02-.563.219-1.031.594-1.406S1.438 8.02 2 8Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyMdRegularIcon);
export default ForwardRef;
