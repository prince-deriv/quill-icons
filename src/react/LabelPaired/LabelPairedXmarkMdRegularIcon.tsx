import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedXmarkMdRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M10.156 16.844 6 12.719l-4.125 4.125c-.25.187-.49.187-.719 0-.187-.23-.187-.459 0-.688L5.281 12 1.156 7.875c-.187-.25-.187-.49 0-.719.23-.187.469-.187.719 0L6 11.281l4.156-4.125c.23-.187.459-.187.688 0 .187.23.187.469 0 .719L6.719 12l4.125 4.156c.187.23.187.459 0 .688-.23.187-.459.187-.688 0Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkMdRegularIcon);
export default ForwardRef;
