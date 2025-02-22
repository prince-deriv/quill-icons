import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMicrosoftXlIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M0 7.5h10.078v10.078H0V7.5Zm10.922 0H21v10.078H10.922V7.5ZM0 18.422h10.078V28.5H0V18.422Zm10.922 0H21V28.5H10.922V18.422Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrosoftXlIcon);
export default ForwardRef;
