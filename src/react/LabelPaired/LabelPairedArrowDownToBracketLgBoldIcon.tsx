import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownToBracketLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='m14.664 13.977-5 5c-.443.364-.885.364-1.328 0l-5-5c-.365-.443-.365-.886 0-1.329.443-.364.885-.364 1.328 0l3.399 3.399v-9.61c.052-.572.364-.885.937-.937.573.052.885.365.938.938v9.609l3.398-3.399c.443-.364.885-.364 1.328 0 .365.443.365.886 0 1.329Zm-12.539 4.96v3.125c0 .443.156.808.469 1.094.286.313.65.469 1.094.469h10.624c.443 0 .808-.156 1.094-.469.313-.286.469-.65.469-1.093v-3.125c.052-.573.365-.886.938-.938.572.052.885.365.937.938v3.125c-.026.963-.365 1.77-1.016 2.421-.65.651-1.458.99-2.422 1.016H3.688c-.964-.026-1.771-.365-2.422-1.016-.651-.65-.99-1.458-1.016-2.422v-3.125c.052-.572.365-.885.938-.937.572.052.885.365.937.938Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketLgBoldIcon);
export default ForwardRef;
