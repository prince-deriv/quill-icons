import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTrashXlBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M8.297 8.25c-.125 0-.219.063-.281.188L7.125 9.75h6.797l-.89-1.313c-.095-.124-.204-.187-.329-.187H8.297Zm8.297 1.5h3.281c.688.063 1.063.438 1.125 1.125-.063.688-.438 1.063-1.125 1.125h-.563l-1.125 15.234a2.94 2.94 0 0 1-.937 1.97c-.563.5-1.234.765-2.016.796H5.766c-.782-.031-1.454-.297-2.016-.797a2.94 2.94 0 0 1-.938-1.969L1.688 12h-.563C.437 11.937.062 11.562 0 10.875c.063-.688.438-1.063 1.125-1.125h3.281l1.735-2.578c.53-.75 1.25-1.14 2.156-1.172h4.406c.906.031 1.64.422 2.203 1.172l1.688 2.578Zm.468 2.25H3.938l1.079 15.047c.093.437.343.672.75.703h9.468c.407-.031.657-.266.75-.703L17.063 12Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashXlBoldIcon);
export default ForwardRef;
