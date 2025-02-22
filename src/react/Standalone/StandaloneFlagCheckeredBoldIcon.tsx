import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneFlagCheckeredBoldIcon = (
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
    <path d='M8.188 6.5c.572.052.885.365.937.938V8.53l3.32-.82a6.58 6.58 0 0 1 4.453.469 6.157 6.157 0 0 0 2.852.703c.99 0 1.953-.235 2.89-.703l.352-.157c.443-.208.834-.195 1.172.04.365.208.56.546.586 1.015v10.938c-.026.547-.3.937-.82 1.172l-1.328.507c-1.901.677-3.75.573-5.547-.312-1.537-.73-3.138-.899-4.805-.508l-3.125.781v3.907c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938V7.438c.052-.572.365-.885.938-.937Zm.937 5.898 3.125-.703V9.703l-3.125.781v1.914Zm0 1.915v1.835l3.125-.703v-1.797l-3.125.665Zm0 3.75v1.68l2.695-.704c.13-.026.274-.052.43-.078v-1.563l-3.125.665Zm5 .742a9.017 9.017 0 0 1 3.75.898V17.79l-2.148-.664a3.693 3.693 0 0 0-1.602-.117v1.797Zm5.625 1.445a5.318 5.318 0 0 0 2.188-.313l.937-.351V17.75l-1.016.234a7.218 7.218 0 0 1-2.109.157v2.109Zm3.125-4.414V14l-1.016.234a7.218 7.218 0 0 1-2.109.157v1.875a5.474 5.474 0 0 0 1.719-.118l1.406-.312Zm0-3.75v-1.953a8.161 8.161 0 0 1-3.125.625v1.758a5.474 5.474 0 0 0 1.719-.118l1.406-.312Zm-5-1.563a7.078 7.078 0 0 1-1.836-.664 4.819 4.819 0 0 0-1.914-.468v1.953a7.092 7.092 0 0 1 2.11.234l1.64.508v-1.563Zm0 3.516-2.148-.664a3.693 3.693 0 0 0-1.602-.117v1.875a6.324 6.324 0 0 1 2.11.195l1.64.508v-1.797Z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFlagCheckeredBoldIcon);
export default ForwardRef;
