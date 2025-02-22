import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBookmarkSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.25 5.063c.018-.365.146-.675.383-.93.255-.237.565-.365.93-.383h7.875c.364.018.674.146.93.383.236.255.364.565.382.93v12.085c-.037.365-.237.566-.602.602a.509.509 0 0 1-.328-.11L5.5 14.77l-4.32 2.87a.51.51 0 0 1-.328.11c-.365-.037-.566-.237-.602-.602V5.063Zm1.313-.438c-.274.018-.42.164-.438.438v11.566l4.129-2.735a.41.41 0 0 1 .492 0l4.129 2.735V5.062c-.018-.273-.164-.419-.438-.437H1.564Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkSmRegularIcon);
export default ForwardRef;
