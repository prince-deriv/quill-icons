import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedImageCaptionRegularIcon = (
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
      <path d='M1.5 5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v5.46l1.594-1.57A.9.9 0 0 1 3 9.36a.9.9 0 0 1 .656.28l1.594 1.57 3.094-3.07A.9.9 0 0 1 9 7.86a.9.9 0 0 1 .656.28l1.594 1.57V5.75a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21h-9Zm-.75 7.29v.96c0 .219.07.398.21.54.142.14.321.21.54.21h.96l2.25-2.25-1.57-1.594a.235.235 0 0 0-.28 0L.75 12.29Zm8.39-3.634a.234.234 0 0 0-.28 0L3.54 14h6.96a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-2.46L9.14 8.655ZM0 5.75c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h9c.422.016.773.164 1.055.445.28.282.43.633.445 1.055v7.5a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-9a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 0 13.25v-7.5Zm3.75 1.125c-.016-.234-.14-.36-.375-.375-.234.016-.36.14-.375.375.016.234.14.36.375.375.234-.016.36-.14.375-.375Zm-1.5 0c.016-.422.203-.75.563-.984.374-.188.75-.188 1.124 0 .36.234.547.562.563.984-.016.422-.203.75-.563.984-.374.188-.75.188-1.124 0a1.168 1.168 0 0 1-.563-.984Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageCaptionRegularIcon);
export default ForwardRef;
