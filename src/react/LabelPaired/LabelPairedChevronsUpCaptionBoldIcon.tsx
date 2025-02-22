import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronsUpCaptionBoldIcon = (
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
      <path d='m6.398 4.602 4.5 4.5c.22.265.22.53 0 .796-.265.22-.53.22-.796 0L6 5.797 1.898 9.898c-.265.22-.53.22-.796 0-.22-.265-.22-.53 0-.796l4.5-4.5c.265-.22.53-.22.796 0Zm4.5 9c.22.265.22.53 0 .796-.265.22-.53.22-.796 0L6 10.297l-4.102 4.101c-.265.22-.53.22-.796 0-.22-.265-.22-.53 0-.796l4.5-4.5c.265-.22.53-.22.796 0l4.5 4.5Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpCaptionBoldIcon);
export default ForwardRef;
