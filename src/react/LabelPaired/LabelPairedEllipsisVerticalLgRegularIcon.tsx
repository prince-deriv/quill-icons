import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedEllipsisVerticalLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={5}
    height={30}
    viewBox='0 0 5 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M2.5 20.5c.365 0 .664.117.898.352.235.234.352.533.352.898s-.117.664-.352.898c-.234.235-.533.352-.898.352s-.664-.117-.898-.352c-.235-.234-.352-.533-.352-.898s.117-.664.352-.898c.234-.235.533-.352.898-.352Zm0-6.25c.365 0 .664.117.898.352.235.234.352.533.352.898s-.117.664-.352.898c-.234.235-.533.352-.898.352s-.664-.117-.898-.352c-.235-.234-.352-.533-.352-.898s.117-.664.352-.898c.234-.235.533-.352.898-.352Zm1.25-5c0 .365-.117.664-.352.898-.234.235-.533.352-.898.352s-.664-.117-.898-.352c-.235-.234-.352-.533-.352-.898s.117-.664.352-.898C1.836 8.117 2.135 8 2.5 8s.664.117.898.352c.235.234.352.533.352.898Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalLgRegularIcon);
export default ForwardRef;
