import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCaretDownXlRegularIcon = (
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
      <path d='m7.781 22.406 5.625-5.343a.318.318 0 0 0 .094-.235.366.366 0 0 0-.328-.328H1.828a.366.366 0 0 0-.328.328c0 .094.031.172.094.235l5.625 5.343a.503.503 0 0 0 .281.094.503.503 0 0 0 .281-.094Zm1.032 1.078A1.881 1.881 0 0 1 7.5 24c-.5 0-.938-.172-1.313-.516L.563 18.187A1.852 1.852 0 0 1 0 16.828c0-.531.172-.969.516-1.312.343-.344.78-.516 1.312-.516h11.344c.531.031.969.219 1.312.563.344.343.516.765.516 1.265 0 .531-.188.985-.563 1.36l-5.624 5.296Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownXlRegularIcon);
export default ForwardRef;
