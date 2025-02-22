import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSevenSmRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.125 5.063c.018-.274.164-.42.438-.438h7.875c.164 0 .291.073.382.219a.465.465 0 0 1 0 .437l-7 11.375c-.164.219-.364.274-.601.164-.219-.164-.265-.364-.137-.601L7.645 5.5H.563c-.274-.018-.42-.164-.438-.438Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenSmRegularIcon);
export default ForwardRef;
