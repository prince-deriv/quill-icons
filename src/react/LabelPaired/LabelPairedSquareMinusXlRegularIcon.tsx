import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSquareMinusXlRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      <path d='M3 9c-.438 0-.797.14-1.078.422-.281.281-.422.64-.422 1.078v15c0 .438.14.797.422 1.078.281.281.64.422 1.078.422h15c.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078v-15c0-.438-.14-.797-.422-1.078C18.797 9.14 18.438 9 18 9H3Zm-3 1.5c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89h15c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v15c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89-.562-.563-.859-1.266-.89-2.11v-15Zm6 6.75h9c.469.031.719.281.75.75-.031.469-.281.719-.75.75H6c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareMinusXlRegularIcon);
export default ForwardRef;
