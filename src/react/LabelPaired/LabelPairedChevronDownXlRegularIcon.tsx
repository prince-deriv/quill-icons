import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronDownXlRegularIcon = (
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
      <path d='M12.516 24.516c-.344.312-.688.312-1.032 0l-9-9c-.312-.344-.312-.688 0-1.032.344-.312.688-.312 1.032 0L12 22.922l8.484-8.438c.344-.312.688-.312 1.032 0 .312.344.312.688 0 1.032l-9 9Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronDownXlRegularIcon);
export default ForwardRef;
