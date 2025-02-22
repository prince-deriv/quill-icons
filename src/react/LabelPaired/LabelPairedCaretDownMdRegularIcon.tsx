import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCaretDownMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='m5.188 14.938 3.75-3.563A.212.212 0 0 0 9 11.219.244.244 0 0 0 8.781 11H1.22a.244.244 0 0 0-.219.219c0 .062.02.114.063.156l3.75 3.563A.336.336 0 0 0 5 15c.063 0 .125-.02.188-.063Zm.687.718c-.25.23-.542.344-.875.344-.333 0-.625-.115-.875-.344l-3.75-3.531A1.235 1.235 0 0 1 0 11.219c0-.354.115-.646.344-.875.229-.23.52-.344.875-.344H8.78c.354.02.646.146.875.375.23.23.344.51.344.844 0 .354-.125.656-.375.906l-3.75 3.531Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownMdRegularIcon);
export default ForwardRef;
