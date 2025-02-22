import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneInfoBoldIcon = (
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
    <path d='M14.438 9.313c.025-.6.286-1.055.78-1.368a1.66 1.66 0 0 1 1.563 0c.495.313.756.769.782 1.367-.026.6-.287 1.055-.782 1.368a1.66 1.66 0 0 1-1.562 0c-.495-.313-.755-.769-.781-1.367Zm-1.563 5c.052-.573.365-.886.938-.938H16c.573.052.885.365.938.938v10.312h1.875c.572.052.885.365.937.938-.052.572-.365.885-.938.937h-5.625c-.572-.052-.885-.365-.937-.938.052-.572.365-.885.938-.937h1.874V15.25h-1.25c-.572-.052-.885-.365-.937-.938Z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneInfoBoldIcon);
export default ForwardRef;
