import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneUserBoldIcon = (
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
    <path d='M19.125 11.5c-.026-1.172-.547-2.07-1.563-2.695-1.041-.573-2.083-.573-3.125 0-1.015.625-1.536 1.523-1.562 2.695.026 1.172.547 2.07 1.563 2.695 1.041.573 2.083.573 3.124 0 1.016-.625 1.537-1.523 1.563-2.695ZM11 11.5c0-.912.221-1.745.664-2.5A5.167 5.167 0 0 1 13.5 7.164 4.991 4.991 0 0 1 16 6.5c.885 0 1.719.221 2.5.664A5.167 5.167 0 0 1 20.336 9c.443.755.664 1.588.664 2.5 0 .912-.221 1.745-.664 2.5a5.167 5.167 0 0 1-1.836 1.836 4.991 4.991 0 0 1-2.5.664 4.991 4.991 0 0 1-2.5-.664A5.167 5.167 0 0 1 11.664 14 4.853 4.853 0 0 1 11 11.5ZM9.164 24.625h13.672c-.208-1.276-.768-2.318-1.68-3.125-.937-.807-2.057-1.224-3.36-1.25h-3.593c-1.302.026-2.409.443-3.32 1.25-.938.807-1.51 1.849-1.719 3.125Zm-1.914.703c.052-1.953.73-3.594 2.031-4.922 1.328-1.302 2.969-1.979 4.922-2.031h3.594c1.953.052 3.594.73 4.922 2.031 1.302 1.328 1.979 2.969 2.031 4.922 0 .339-.117.612-.352.82-.208.235-.481.352-.82.352H8.422c-.339 0-.612-.117-.82-.352-.235-.208-.352-.481-.352-.82Z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneUserBoldIcon);
export default ForwardRef;
