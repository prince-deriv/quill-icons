import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedDerivLgIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='m16.563 6.164 3.906-.664-2.735 15.625C17.304 23.547 15 25.5 12.54 25.5H9.57c-3.36 0-5.586-2.695-5-6.016l.274-1.445c.586-3.32 3.75-6.055 7.11-6.055h3.554l1.055-5.82Zm-2.54 14.414.86-5h-3.125c-1.524 0-2.93 1.25-3.203 2.735l-.157.898c-.273 1.484.743 2.695 2.227 2.695h1.836c.742 0 1.406-.586 1.562-1.328Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDerivLgIcon);
export default ForwardRef;
