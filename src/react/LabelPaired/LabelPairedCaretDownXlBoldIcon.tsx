import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCaretDownXlBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      <path d='m7.5 21.422 4.172-4.172H3.328L7.5 21.422Zm1.078 2.156A1.564 1.564 0 0 1 7.5 24c-.406 0-.766-.14-1.078-.422l-6-6c-.438-.5-.547-1.047-.328-1.64.281-.594.75-.907 1.406-.938h12c.656.031 1.125.344 1.406.938.219.593.11 1.14-.328 1.64l-6 6Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownXlBoldIcon);
export default ForwardRef;
