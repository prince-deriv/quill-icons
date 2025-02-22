import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneImagePolaroidUserRegularIcon = (
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
    <path d='M20.375 21.5H8.5v1.25c0 .365.117.664.352.898.234.235.533.352.898.352h12.5c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898V21.5h-3.125Zm-.078-1.25H23.5v-10c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352H9.75c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v10h3.203a3.175 3.175 0 0 1 1.055-1.797c.547-.443 1.21-.677 1.992-.703h2.5c.781.026 1.445.26 1.992.703a3.175 3.175 0 0 1 1.055 1.797Zm-7.305 0h6.016c-.313-.781-.899-1.198-1.758-1.25h-2.5c-.86.052-1.445.469-1.758 1.25Zm11.758-10v12.5c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H9.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758v-12.5c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h12.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758ZM17.25 14c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352s-.664.117-.898.352c-.235.234-.352.533-.352.898s.117.664.352.898c.234.235.533.352.898.352s.664-.117.898-.352c.235-.234.352-.533.352-.898ZM16 11.5c.938.026 1.654.443 2.148 1.25.47.833.47 1.667 0 2.5-.494.807-1.21 1.224-2.148 1.25-.938-.026-1.654-.443-2.148-1.25-.47-.833-.47-1.667 0-2.5.494-.807 1.21-1.224 2.148-1.25Z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneImagePolaroidUserRegularIcon);
export default ForwardRef;
