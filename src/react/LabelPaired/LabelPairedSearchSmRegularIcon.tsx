import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSearchSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M10.5 9.438a4.59 4.59 0 0 0-.656-2.407 4.74 4.74 0 0 0-1.75-1.75 4.781 4.781 0 0 0-2.406-.656c-.839 0-1.641.219-2.407.656a4.74 4.74 0 0 0-1.75 1.75 4.59 4.59 0 0 0-.656 2.407c0 .874.219 1.677.656 2.406a4.742 4.742 0 0 0 1.75 1.75 4.782 4.782 0 0 0 2.406.656c.839 0 1.641-.219 2.407-.656a4.742 4.742 0 0 0 1.75-1.75 4.59 4.59 0 0 0 .656-2.406Zm-1.121 4.32c-1.02.875-2.251 1.33-3.691 1.367-1.605-.037-2.945-.592-4.02-1.668C.592 12.382.036 11.042 0 9.437c.036-1.604.592-2.944 1.668-4.019 1.075-1.076 2.415-1.632 4.02-1.668 1.604.036 2.944.592 4.019 1.668 1.076 1.075 1.631 2.415 1.668 4.02-.037 1.44-.492 2.67-1.367 3.69l3.855 3.884c.183.2.183.4 0 .601-.2.183-.4.183-.601 0l-3.883-3.855Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchSmRegularIcon);
export default ForwardRef;
