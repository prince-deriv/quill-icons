import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedDerivXlIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M19.875 6.797 24.563 6 21.28 24.75C20.766 27.656 18 30 15.047 30h-3.563c-4.03 0-6.703-3.234-6-7.219l.329-1.734c.703-3.985 4.5-7.266 8.53-7.266h4.266l1.266-6.984Zm-3.047 17.297 1.031-6h-3.75c-1.828 0-3.515 1.5-3.843 3.281l-.188 1.078c-.328 1.781.89 3.235 2.672 3.235h2.203c.89 0 1.688-.704 1.875-1.594Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDerivXlIcon);
export default ForwardRef;
