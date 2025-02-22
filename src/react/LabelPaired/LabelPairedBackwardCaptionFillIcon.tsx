import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBackwardCaptionFillIcon = (
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
      <path d='M10.781 13.836 6.75 10.484V8.516l4.031-3.352c.235-.187.5-.219.797-.094.266.14.406.367.422.68v7.5c-.016.313-.156.54-.422.68-.297.125-.562.093-.797-.094ZM6 11.75v1.5c-.016.313-.156.54-.422.68-.297.125-.562.093-.797-.094l-4.5-3.75A.732.732 0 0 1 0 9.5c0-.234.094-.43.281-.586l4.5-3.75c.235-.187.5-.219.797-.094.266.14.406.367.422.68v6Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardCaptionFillIcon);
export default ForwardRef;
