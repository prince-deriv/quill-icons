import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlayCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M1.125 13.625 7.875 9.5l-6.75-4.125v8.25Zm-.54-9.234c.376-.204.75-.196 1.126.023L8.46 8.54c.344.219.523.54.539.961-.016.422-.195.742-.54.96l-6.75 4.126c-.374.219-.75.226-1.124.023A1.119 1.119 0 0 1 0 13.625v-8.25c.016-.438.21-.766.586-.984Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayCaptionBoldIcon);
export default ForwardRef;
