import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPenMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M1.125 15.281a2.66 2.66 0 0 1 .719-1.156l9.5-9.531c.416-.375.885-.563 1.406-.563.542 0 1.01.188 1.406.563l1.25 1.25.25.312a2 2 0 0 1 .313 1.282c-.042.458-.23.864-.563 1.218l-9.5 9.5-.125.125a2.97 2.97 0 0 1-1.062.594l-2.438.719-1.312.375a.714.714 0 0 1-.75-.188.714.714 0 0 1-.188-.75l.375-1.312.719-2.438Zm1.438.406-.188.75-.531 1.72 1.718-.5.75-.22c.188-.062.365-.166.532-.312l7.125-7.156L10.03 8.03l-7.125 7.125-.031.031-.031.032a1.56 1.56 0 0 0-.281.469Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenMdBoldIcon);
export default ForwardRef;
