import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedStarXlFillIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='m14.86 6.844 3 6.187 6.75 1.031c.593.094 1 .422 1.218.985.156.594.031 1.11-.375 1.547l-4.875 4.828 1.125 6.844c.094.593-.11 1.078-.61 1.453-.5.343-1.015.375-1.546.093L13.5 26.625l-6 3.188c-.563.28-1.094.25-1.594-.094-.468-.375-.672-.86-.61-1.453l1.173-6.844-4.875-4.828c-.438-.438-.563-.953-.375-1.547.187-.563.578-.89 1.172-.985l6.75-1.03 3-6.188c.312-.532.765-.813 1.359-.844.625.031 1.078.313 1.36.844Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarXlFillIcon);
export default ForwardRef;
