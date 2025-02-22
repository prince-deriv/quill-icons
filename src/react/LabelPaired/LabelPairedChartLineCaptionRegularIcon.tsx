import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartLineCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.75 4.625v8.25c.016.313.125.578.328.797.219.203.484.312.797.328h9.75c.234.016.36.14.375.375-.016.234-.14.36-.375.375h-9.75c-.531-.016-.977-.195-1.336-.54-.344-.358-.523-.804-.539-1.335v-8.25c.016-.234.14-.36.375-.375.234.016.36.14.375.375Zm10.383 2.508-3.375 3.375c-.172.156-.344.156-.516 0L5.25 8.539l-2.367 2.344c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516l2.625-2.625c.172-.156.344-.156.516 0L7.5 9.711l3.117-3.094c.172-.156.344-.156.516 0 .156.172.156.344 0 .516Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineCaptionRegularIcon);
export default ForwardRef;
