import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlayXlRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M2.625 9.094a.797.797 0 0 0-.75 0c-.25.156-.375.375-.375.656v16.5c0 .281.125.5.375.656.25.125.5.125.75 0l13.5-8.25c.25-.156.375-.375.375-.656s-.125-.5-.375-.656l-13.5-8.25ZM1.172 7.78c.75-.406 1.5-.39 2.25.047l13.5 8.25c.687.438 1.047 1.078 1.078 1.922-.031.844-.39 1.484-1.078 1.922l-13.5 8.25c-.75.437-1.5.453-2.25.047C.422 27.78.032 27.125 0 26.25V9.75c.031-.875.422-1.531 1.172-1.969Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayXlRegularIcon);
export default ForwardRef;
