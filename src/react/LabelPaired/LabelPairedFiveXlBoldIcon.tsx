import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedFiveXlBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M1.5 8.438c.156-.594.531-.907 1.125-.938h9.75c.688.063 1.063.438 1.125 1.125-.063.688-.438 1.063-1.125 1.125H3.562l-1.078 6.375h6.329c1.75.031 3.203.64 4.359 1.828 1.187 1.156 1.797 2.61 1.828 4.36-.031 1.75-.64 3.203-1.828 4.359-1.156 1.187-2.61 1.797-4.36 1.828H4.36a4.51 4.51 0 0 1-2.39-.656 4.234 4.234 0 0 1-1.64-1.828l-.235-.375c-.219-.657-.047-1.172.515-1.547.657-.219 1.157-.047 1.5.515l.235.375c.437.813 1.11 1.235 2.015 1.266h4.454c1.124-.031 2.046-.422 2.765-1.172.75-.719 1.14-1.64 1.172-2.765-.031-1.125-.422-2.047-1.172-2.766-.719-.75-1.64-1.14-2.765-1.172H1.125c-.344 0-.625-.14-.844-.422a1.14 1.14 0 0 1-.281-.89l1.5-8.625Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveXlBoldIcon);
export default ForwardRef;
