import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartAreaLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      <path d='M1.875 7.688v13.75c.052.572.365.885.938.937h16.25c.572.052.885.365.937.938-.052.572-.365.885-.938.937H2.813c-.807-.026-1.47-.3-1.992-.82-.52-.521-.794-1.185-.82-1.992V7.688c.052-.573.365-.886.938-.938.572.052.885.365.937.938Zm9.297 6.64L8.75 11.906l-3.125 3.125v3.594h11.25v-3.047l-1.992-2.305-1.055 1.055a1.808 1.808 0 0 1-1.328.547c-.52 0-.963-.182-1.328-.547ZM12.5 13l1.328-1.328.235-.235c.26-.234.56-.351.898-.351.364.026.664.17.898.43l2.422 2.851c.313.339.469.742.469 1.211v3.672c0 .365-.117.664-.352.898-.234.235-.533.352-.898.352H5c-.365 0-.664-.117-.898-.352-.235-.234-.352-.533-.352-.898v-4.219c0-.52.182-.963.547-1.328l3.555-3.555c.26-.26.56-.39.898-.39.339 0 .638.13.898.39l1.524 1.524L12.5 13Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaLgBoldIcon);
export default ForwardRef;
