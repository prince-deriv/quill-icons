import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTiktokCaptionIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M10.75 8.422a4.867 4.867 0 0 1-2.883-.914v4.172c0 .812-.226 1.539-.68 2.18a3.79 3.79 0 0 1-1.78 1.406 3.908 3.908 0 0 1-2.274.117c-.75-.188-1.399-.586-1.946-1.195a3.882 3.882 0 0 1-.914-2.086 3.874 3.874 0 0 1 2.063-3.82 3.964 3.964 0 0 1 2.25-.376v2.11a1.693 1.693 0 0 0-1.078.023c-.344.11-.633.32-.867.633a1.76 1.76 0 0 0-.329 1.031c0 .36.11.703.329 1.031.234.297.53.5.89.61.344.125.703.125 1.078 0 .36-.125.649-.336.868-.633.218-.297.328-.64.328-1.031V3.5h2.062c0 .172.016.344.047.516A2.925 2.925 0 0 0 9.18 5.89a3.001 3.001 0 0 0 1.57.492v2.039Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTiktokCaptionIcon);
export default ForwardRef;
