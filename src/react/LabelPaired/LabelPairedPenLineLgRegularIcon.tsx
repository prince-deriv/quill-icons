import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPenLineLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M17.047 7.063c-.443-.365-.886-.365-1.328 0L13.57 9.171l3.008 3.008 2.11-2.149c.364-.442.364-.885 0-1.328l-1.641-1.64ZM3.492 19.25a2.858 2.858 0 0 0-.625 1.094l-1.054 3.593 3.593-1.054c.417-.13.782-.339 1.094-.625l9.18-9.18-3.008-3.008-9.18 9.18ZM14.82 6.164a2.205 2.205 0 0 1 1.563-.625c.573 0 1.08.208 1.523.625l1.68 1.68c.417.442.625.95.625 1.523 0 .6-.208 1.12-.625 1.563L7.359 23.156a3.7 3.7 0 0 1-1.562.938L1.07 25.46c-.26.078-.468.026-.625-.156-.182-.157-.234-.352-.156-.586l1.367-4.727a3.519 3.519 0 0 1 .977-1.601L14.82 6.164ZM9.625 24.25h12.5c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-12.5c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineLgRegularIcon);
export default ForwardRef;
