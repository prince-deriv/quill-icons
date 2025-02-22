import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlayCaptionRegularIcon = (
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
      <path d='M1.313 5.047a.398.398 0 0 0-.375 0 .367.367 0 0 0-.188.328v8.25c0 .14.063.25.188.328.125.063.25.063.375 0l6.75-4.125A.367.367 0 0 0 8.25 9.5c0-.14-.063-.25-.188-.328l-6.75-4.125ZM.586 4.39c.375-.204.75-.196 1.125.023L8.46 8.54c.344.219.523.54.539.961-.016.422-.195.742-.54.96l-6.75 4.126c-.374.219-.75.226-1.124.023A1.119 1.119 0 0 1 0 13.625v-8.25c.016-.438.21-.766.586-.984Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayCaptionRegularIcon);
export default ForwardRef;
