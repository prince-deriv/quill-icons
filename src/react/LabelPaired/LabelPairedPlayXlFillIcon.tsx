import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlayXlFillIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='m3.422 7.828 13.5 8.25c.687.469 1.047 1.11 1.078 1.922-.031.844-.39 1.484-1.078 1.922l-13.5 8.25c-.75.437-1.5.453-2.25.047C.422 27.78.032 27.125 0 26.25V9.75c.031-.875.422-1.531 1.172-1.969.75-.406 1.5-.39 2.25.047Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayXlFillIcon);
export default ForwardRef;
