import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedEllipsisMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M13 12a.974.974 0 0 1-.281.719A.974.974 0 0 1 12 13a.974.974 0 0 1-.719-.281A.974.974 0 0 1 11 12c0-.292.094-.531.281-.719A.974.974 0 0 1 12 11c.292 0 .531.094.719.281A.974.974 0 0 1 13 12Zm-5 0a.974.974 0 0 1-.281.719A.974.974 0 0 1 7 13a.974.974 0 0 1-.719-.281A.974.974 0 0 1 6 12c0-.292.094-.531.281-.719A.974.974 0 0 1 7 11c.292 0 .531.094.719.281A.974.974 0 0 1 8 12Zm-6 1a.974.974 0 0 1-.719-.281A.974.974 0 0 1 1 12c0-.292.094-.531.281-.719A.974.974 0 0 1 2 11c.292 0 .531.094.719.281A.974.974 0 0 1 3 12a.974.974 0 0 1-.281.719A.974.974 0 0 1 2 13Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisMdRegularIcon);
export default ForwardRef;
