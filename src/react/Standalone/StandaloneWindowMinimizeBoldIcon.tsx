import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneWindowMinimizeBoldIcon = (
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
    <path d='M6.938 23.375h18.125c.572.052.885.365.937.938-.052.572-.365.885-.938.937H6.938c-.572-.052-.885-.365-.937-.938.052-.572.365-.885.938-.937Z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWindowMinimizeBoldIcon);
export default ForwardRef;
