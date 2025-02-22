import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronDownXlBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      <path d='m11.203 24.797-9-9c-.437-.531-.437-1.063 0-1.594.531-.437 1.063-.437 1.594 0L12 22.406l8.203-8.203c.531-.437 1.063-.437 1.594 0 .437.531.437 1.063 0 1.594l-9 9c-.531.437-1.063.437-1.594 0Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronDownXlBoldIcon);
export default ForwardRef;
