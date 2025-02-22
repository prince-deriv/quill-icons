import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlayXlBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M2.25 26.25 15.75 18 2.25 9.75v16.5ZM1.172 7.781c.75-.406 1.5-.39 2.25.047l13.5 8.25c.687.438 1.047 1.078 1.078 1.922-.031.844-.39 1.484-1.078 1.922l-13.5 8.25c-.75.437-1.5.453-2.25.047C.422 27.78.032 27.125 0 26.25V9.75c.031-.875.422-1.531 1.172-1.969Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayXlBoldIcon);
export default ForwardRef;
