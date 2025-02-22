import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBackwardStepLgFillIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='m10.719 22.727-7.5-6.25-.469-.391v5.664c0 .365-.117.664-.352.898-.234.235-.533.352-.898.352s-.664-.117-.898-.352c-.235-.234-.352-.533-.352-.898V9.25c0-.365.117-.664.352-.898C.836 8.117 1.135 8 1.5 8s.664.117.898.352c.235.234.352.533.352.898v5.664l.469-.39 7.5-6.25c.39-.313.833-.365 1.328-.157.443.235.677.612.703 1.133v12.5c-.026.52-.26.898-.703 1.133-.495.208-.938.156-1.328-.156Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepLgFillIcon);
export default ForwardRef;
