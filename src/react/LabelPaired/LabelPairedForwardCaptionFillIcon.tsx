import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedForwardCaptionFillIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M1.242 13.836c-.25.187-.523.219-.82.094-.266-.14-.406-.367-.422-.68v-7.5c.016-.313.156-.54.422-.68.297-.125.57-.093.82.094L5.25 8.516v1.968l-4.008 3.352ZM6 11.75v-6c.016-.313.156-.54.422-.68.297-.125.57-.093.82.094l4.5 3.75A.759.759 0 0 1 12 9.5c0 .234-.086.43-.258.586l-4.5 3.75c-.25.187-.523.219-.82.094-.266-.14-.406-.367-.422-.68v-1.5Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardCaptionFillIcon);
export default ForwardRef;
