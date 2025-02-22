import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpToLineSmBoldIcon = (
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
      <path d='M.906 4.625h9.188c.4.036.62.255.656.656-.037.401-.255.62-.656.657H.906C.506 5.9.286 5.681.25 5.28c.036-.4.255-.62.656-.656Zm5.086 3.719h-.027l3.5 3.719c.255.31.246.61-.027.902-.31.255-.611.246-.903-.027l-2.379-2.489v5.77c-.036.4-.255.62-.656.656-.401-.037-.62-.255-.656-.656v-5.77l-2.38 2.516c-.29.255-.592.264-.901.027-.274-.31-.283-.62-.028-.93l3.5-3.718a.596.596 0 0 1 .465-.219.68.68 0 0 1 .492.219Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineSmBoldIcon);
export default ForwardRef;
