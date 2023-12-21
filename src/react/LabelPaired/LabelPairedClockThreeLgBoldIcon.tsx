import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedClockThreeLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M18.125 15.5c0-1.484-.365-2.838-1.094-4.063-.703-1.223-1.692-2.213-2.968-2.968A8.062 8.062 0 0 0 10 7.375a8.062 8.062 0 0 0-4.063 1.094c-1.276.755-2.265 1.745-2.968 2.969-.73 1.223-1.094 2.578-1.094 4.062 0 1.484.365 2.838 1.094 4.063.703 1.224 1.692 2.213 2.969 2.968A8.062 8.062 0 0 0 10 23.625a8.061 8.061 0 0 0 4.063-1.094c1.275-.755 2.265-1.744 2.968-2.968.73-1.224 1.094-2.579 1.094-4.063ZM0 15.5c.026-1.823.469-3.49 1.328-5C2.214 8.99 3.438 7.766 5 6.828 6.589 5.943 8.255 5.5 10 5.5s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.411-.443-5-1.328c-1.563-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5Zm9.063-5.313c.052-.572.364-.885.937-.937.573.052.885.365.938.938v4.374h3.124c.573.053.886.365.938.938-.052.573-.365.885-.938.938H10c-.573-.053-.885-.365-.938-.938v-5.313Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedClockThreeLgBoldIcon);
export default ForwardRef;
