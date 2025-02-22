import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTiktokMdIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M14 10.563a6.49 6.49 0 0 1-3.844-1.22v5.563c0 1.084-.302 2.052-.906 2.906-.583.855-1.375 1.48-2.375 1.875-1.02.355-2.031.407-3.031.157-1-.25-1.865-.782-2.594-1.594a5.176 5.176 0 0 1-1.219-2.781c-.104-1.021.094-2.01.594-2.969.52-.938 1.24-1.646 2.156-2.125a5.285 5.285 0 0 1 3-.5v2.813c-.5-.146-.979-.136-1.437.03a2.297 2.297 0 0 0-1.157.845 2.346 2.346 0 0 0-.437 1.374c0 .48.146.938.438 1.376.312.395.708.666 1.187.812.458.167.938.167 1.438 0 .479-.167.864-.448 1.156-.844.291-.396.437-.854.437-1.375V4h2.75c0 .23.021.458.063.688.229 1.062.791 1.895 1.687 2.5A4.002 4.002 0 0 0 14 7.843v2.718Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTiktokMdIcon);
export default ForwardRef;
