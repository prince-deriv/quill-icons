import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedGoogleMdIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M15.625 12.188c-.042 2.25-.73 4.062-2.063 5.437-1.354 1.375-3.166 2.083-5.437 2.125-1.438-.02-2.74-.375-3.906-1.063a7.737 7.737 0 0 1-2.782-2.78C.75 14.74.397 13.436.375 12c.02-1.438.375-2.74 1.063-3.906a7.737 7.737 0 0 1 2.78-2.781c1.167-.688 2.47-1.042 3.907-1.063 2.104.042 3.833.719 5.188 2.031l-2.094 2.032c-.98-.876-2.073-1.271-3.281-1.188-1.209.063-2.271.52-3.188 1.375-.896.875-1.375 2.042-1.438 3.5.042 1.396.51 2.552 1.407 3.469.916.916 2.052 1.396 3.406 1.437 1.02-.02 1.844-.229 2.469-.625.625-.396 1.094-.843 1.406-1.343.292-.521.469-.98.531-1.376H8.125v-2.687H15.5c.083.375.125.813.125 1.313Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGoogleMdIcon);
export default ForwardRef;
