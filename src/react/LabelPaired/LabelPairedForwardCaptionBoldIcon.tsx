import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedForwardCaptionBoldIcon = (
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
      <path d='M5.25 5.703c0-.203.07-.367.21-.492.126-.14.29-.211.493-.211.156 0 .297.047.422.14l5.39 3.915c.157.11.235.258.235.445a.516.516 0 0 1-.234.445L6.375 13.86a.686.686 0 0 1-.422.141.627.627 0 0 1-.492-.21.627.627 0 0 1-.211-.493v-2.32l-4.148 2.906A.74.74 0 0 1 .703 14a.627.627 0 0 1-.492-.21.627.627 0 0 1-.211-.493V5.703c0-.203.07-.367.21-.492C.337 5.07.5 5 .704 5c.156 0 .29.04.399.117L5.25 8.023v-2.32Zm0 3.703L1.125 6.523V12.5L5.25 9.594v-.188Zm5.227.094L6.375 6.523v5.954L10.477 9.5Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardCaptionBoldIcon);
export default ForwardRef;
