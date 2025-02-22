import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandalonePresentationScreenBoldIcon = (
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
    <path d='M5.688 6.5h20.625c.572.052.885.365.937.938-.052.572-.365.885-.938.937H5.688c-.572-.052-.885-.365-.937-.938.052-.572.365-.885.938-.937ZM6 9.625h1.875v8.438c.026.182.13.286.313.312h15.625c.182-.026.286-.13.312-.313V9.626H26v8.438c-.026.625-.234 1.145-.625 1.562-.417.39-.938.599-1.563.625h-6.875v1.797l2.852 2.851c.365.443.365.886 0 1.329-.443.364-.885.364-1.328 0L16 23.766l-2.46 2.46c-.444.365-.886.365-1.33 0-.364-.442-.364-.885 0-1.328l2.852-2.851V20.25H8.189c-.626-.026-1.146-.234-1.563-.625-.39-.417-.599-.938-.625-1.563V9.626Z' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePresentationScreenBoldIcon);
export default ForwardRef;
