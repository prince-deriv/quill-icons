import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedExclamationCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={2}
    height={18}
    viewBox='0 0 2 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M1.563 4.813v6.75c-.032.343-.22.53-.563.562-.344-.031-.531-.219-.563-.563v-6.75c.032-.343.22-.53.563-.562.344.031.531.219.563.563ZM1 14.75a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21.73.73 0 0 1 .54.21c.14.142.21.321.21.54a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationCaptionBoldIcon);
export default ForwardRef;
