import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTwoCaptionRegularIcon = (
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
      <path d='M3.719 5a2.588 2.588 0 0 0-1.805.75l-.656.633c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516l.633-.656a3.37 3.37 0 0 1 2.344-.961c.922.016 1.695.336 2.32.96.61.61.93 1.376.961 2.298-.016.937-.36 1.726-1.031 2.367L1.586 14h5.789c.234.016.36.14.375.375-.016.234-.14.36-.375.375H.625c-.172 0-.29-.078-.352-.234a.42.42 0 0 1 .094-.422l5.086-4.758c.516-.5.781-1.11.797-1.828a2.506 2.506 0 0 0-.75-1.781c-.469-.47-1.063-.711-1.781-.727Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoCaptionRegularIcon);
export default ForwardRef;
