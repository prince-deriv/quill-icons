import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSortUpCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M4 5.54 1.914 7.624h4.172L4 5.539Zm-.54-1.08A.782.782 0 0 1 4 4.25c.203 0 .383.07.54.21l3 3c.218.25.272.524.163.821A.768.768 0 0 1 7 8.75H1a.768.768 0 0 1-.703-.469c-.11-.297-.055-.57.164-.82l3-3Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpCaptionBoldIcon);
export default ForwardRef;
