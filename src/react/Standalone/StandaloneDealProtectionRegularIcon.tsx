import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneDealProtectionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path d='M7.094 11.266h3.71c.665 0 1.25.117 1.798.351.546.195 1.015.547 1.406.977.39.43.703.976.898 1.64.196.664.313 1.407.313 2.266 0 .898-.117 1.64-.313 2.305a4.153 4.153 0 0 1-.898 1.64c-.39.43-.86.742-1.406.977a4.47 4.47 0 0 1-1.797.351H7.094V11.266Zm3.71 8.984c.782 0 1.407-.234 1.876-.742.468-.469.742-1.211.742-2.149v-1.68c0-.937-.274-1.679-.742-2.148-.47-.508-1.094-.742-1.875-.742H8.773v7.461h2.032Zm6.524 1.484V11.266h4.492c.977 0 1.72.312 2.266.859.508.586.781 1.367.781 2.305 0 .976-.273 1.718-.781 2.304-.547.586-1.29.86-2.266.86h-2.812v4.14h-1.68Zm1.68-5.625h2.734c.43 0 .742-.117.977-.351.234-.235.351-.547.351-.977v-.703c0-.43-.117-.742-.351-.976-.235-.235-.547-.352-.977-.352h-2.734v3.36Z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneDealProtectionRegularIcon);
export default ForwardRef;
