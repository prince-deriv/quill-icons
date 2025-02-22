import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartLineXlRegularIcon = (
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
      <path d='M1.5 8.25v16.5c.031.625.25 1.156.656 1.594.438.406.969.625 1.594.656h19.5c.469.031.719.281.75.75-.031.469-.281.719-.75.75H3.75c-1.063-.031-1.953-.39-2.672-1.078C.391 26.703.031 25.812 0 24.75V8.25c.031-.469.281-.719.75-.75.469.031.719.281.75.75Zm20.766 5.016-6.75 6.75c-.344.312-.688.312-1.032 0L10.5 16.078l-4.734 4.688c-.344.312-.688.312-1.032 0-.312-.344-.312-.688 0-1.032l5.25-5.25c.344-.312.688-.312 1.032 0L15 18.422l6.234-6.188c.344-.312.688-.312 1.032 0 .312.344.312.688 0 1.032Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineXlRegularIcon);
export default ForwardRef;
