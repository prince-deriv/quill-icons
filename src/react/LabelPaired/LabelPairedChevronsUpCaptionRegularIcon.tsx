import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronsUpCaptionRegularIcon = (
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
      <path d='m6.258 4.742 4.5 4.5c.156.172.156.344 0 .516-.172.156-.344.156-.516 0L6 5.539 1.758 9.758c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516l4.5-4.5c.172-.156.344-.156.516 0Zm4.5 9c.156.172.156.344 0 .516-.172.156-.344.156-.516 0L6 10.039l-4.242 4.219c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516l4.5-4.5c.172-.156.344-.156.516 0l4.5 4.5Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpCaptionRegularIcon);
export default ForwardRef;
