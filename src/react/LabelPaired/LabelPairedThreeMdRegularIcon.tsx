import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedThreeMdRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M0 5.5c.02-.313.188-.48.5-.5H9c.23 0 .385.104.469.313a.56.56 0 0 1-.125.562L3.78 11H6c1.125.02 2.073.406 2.844 1.156.75.771 1.135 1.719 1.156 2.844-.02 1.125-.406 2.073-1.156 2.844C8.073 18.594 7.125 18.979 6 19H2.781a2.95 2.95 0 0 1-1.562-.438 2.823 2.823 0 0 1-1.094-1.218l-.063-.125c-.124-.292-.052-.51.22-.657.27-.125.489-.052.655.22l.063.124c.396.709.99 1.073 1.781 1.094H6c.854-.02 1.563-.313 2.125-.875.563-.563.854-1.27.875-2.125-.02-.854-.313-1.563-.875-2.125-.563-.563-1.27-.854-2.125-.875H2.5c-.23 0-.385-.104-.469-.313a.56.56 0 0 1 .125-.562L7.72 6H.5c-.313-.02-.48-.188-.5-.5Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeMdRegularIcon);
export default ForwardRef;
