import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowUpRightFromSquareBoldIcon = (
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
    <path d='M17.875 7.438c.052-.573.365-.886.938-.938h6.25c.572.052.885.365.937.938v6.25c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938V9.704l-8.71 8.711c-.444.365-.886.365-1.33 0-.364-.443-.364-.885 0-1.328l8.712-8.711h-3.985c-.572-.052-.885-.365-.937-.938Zm-9.063.312h5c.573.052.886.365.938.938-.052.572-.365.885-.938.937h-5c-.572.052-.885.365-.937.938v13.124c.052.573.365.886.938.938h13.124c.573-.052.886-.365.938-.938v-5c.052-.572.365-.885.938-.937.572.052.885.365.937.938v5c-.026.807-.3 1.47-.82 1.992-.521.52-1.185.794-1.992.82H8.813c-.808-.026-1.472-.3-1.993-.82-.52-.521-.794-1.185-.82-1.992V10.563c.026-.808.3-1.472.82-1.993.521-.52 1.185-.794 1.992-.82Z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpRightFromSquareBoldIcon);
export default ForwardRef;
