import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCloneRegularIcon = (
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
    <path d='M8.5 25.25h8.75c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-2.5h1.25V24c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H8.5c-.703-.026-1.29-.273-1.758-.742C6.273 25.289 6.026 24.703 6 24v-8.75c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742H11V14H8.5c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898V24c0 .365.117.664.352.898.234.235.533.352.898.352ZM14.75 19h8.75c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898V9c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352h-8.75c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v8.75c0 .365.117.664.352.898.234.235.533.352.898.352Zm-2.5-1.25V9c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h8.75c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v8.75c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-8.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758Z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCloneRegularIcon);
export default ForwardRef;
