import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBellCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      <path d='M5.5 3.5a.73.73 0 0 1 .54.21c.14.142.21.321.21.54v.422c.875.156 1.586.555 2.133 1.195.562.64.851 1.414.867 2.32v.774a4.745 4.745 0 0 0 1.031 2.93l.352.445a.609.609 0 0 1 .07.586.595.595 0 0 1-.515.328H.812a.595.595 0 0 1-.515-.328.539.539 0 0 1 .07-.586l.352-.445A4.745 4.745 0 0 0 1.75 8.96v-.774c.016-.906.305-1.68.867-2.32.547-.64 1.258-1.039 2.133-1.195V4.25a.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21Zm0 2.25h-.188c-.687.016-1.265.25-1.734.703-.453.469-.687 1.047-.703 1.734v.774a5.907 5.907 0 0 1-.938 3.164h7.125a5.649 5.649 0 0 1-.937-3.164v-.774c-.016-.687-.25-1.265-.703-1.734C6.953 6 6.375 5.766 5.688 5.75H5.5ZM7 14c0 .406-.148.758-.445 1.055A1.441 1.441 0 0 1 5.5 15.5c-.406 0-.758-.148-1.055-.445A1.442 1.442 0 0 1 4 14h3Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellCaptionBoldIcon);
export default ForwardRef;
