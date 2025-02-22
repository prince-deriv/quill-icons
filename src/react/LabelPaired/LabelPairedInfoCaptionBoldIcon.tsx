import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedInfoCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={5}
    height={18}
    viewBox='0 0 5 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M1.563 5.188a.965.965 0 0 1 .468-.82.996.996 0 0 1 .938 0c.297.187.453.46.469.82a.965.965 0 0 1-.47.82.996.996 0 0 1-.937 0 .965.965 0 0 1-.469-.82Zm-.938 3c.031-.344.219-.532.563-.563H2.5c.344.031.531.219.563.563v6.187h1.124c.344.031.532.219.563.563-.031.343-.219.53-.563.562H.813c-.343-.031-.53-.219-.562-.563.031-.343.219-.53.563-.562h1.125V8.75h-.75c-.344-.031-.532-.219-.563-.563Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoCaptionBoldIcon);
export default ForwardRef;
