import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPenLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M1.406 19.602a3.324 3.324 0 0 1 .899-1.446L14.18 6.242c.52-.469 1.107-.703 1.758-.703a2.47 2.47 0 0 1 1.757.703l1.563 1.563.312.39a2.5 2.5 0 0 1 .39 1.602 2.505 2.505 0 0 1-.702 1.523L7.383 23.195l-.156.157c-.391.338-.834.585-1.329.742l-3.046.898-1.641.469c-.365.104-.677.026-.938-.234-.26-.26-.338-.573-.234-.938l.469-1.64.898-3.047Zm1.797.507-.234.938-.664 2.148 2.148-.625.938-.273c.234-.078.455-.209.664-.39l8.906-8.946-2.422-2.422-8.906 8.906-.04.04-.038.038a1.95 1.95 0 0 0-.352.586Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLgBoldIcon);
export default ForwardRef;
