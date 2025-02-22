import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedImageXlBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M21 9.75H3c-.469.031-.719.281-.75.75v15l.234-.281 3.75-5.25c.22-.313.516-.469.891-.469s.688.156.938.469l1.406 2.015 3.89-5.062c.22-.281.516-.422.891-.422s.672.14.89.422l6.376 8.25.234.328v-15c-.031-.469-.281-.719-.75-.75ZM3 7.5h18c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v15c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89-.562-.563-.859-1.266-.89-2.11v-15c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89Zm3.75 9c-.844-.031-1.5-.406-1.969-1.125-.375-.75-.375-1.5 0-2.25.469-.719 1.125-1.094 1.969-1.125.844.031 1.5.406 1.969 1.125.375.75.375 1.5 0 2.25-.469.719-1.125 1.094-1.969 1.125Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageXlBoldIcon);
export default ForwardRef;
