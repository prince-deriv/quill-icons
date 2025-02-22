import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedThreeSmRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.125 5.063c.018-.274.164-.42.438-.438H8c.2 0 .337.091.41.273a.49.49 0 0 1-.11.493L3.435 9.875h1.941c.984.018 1.814.355 2.488 1.012.657.674.994 1.504 1.012 2.488-.018.984-.355 1.814-1.012 2.488-.674.657-1.504.994-2.488 1.012H2.559c-.493 0-.948-.128-1.368-.383a2.47 2.47 0 0 1-.957-1.066l-.054-.11c-.11-.255-.046-.446.191-.574.237-.11.428-.045.574.192l.055.109c.346.62.866.939 1.559.957h2.816c.747-.018 1.367-.273 1.86-.766.492-.492.747-1.112.765-1.859-.018-.747-.273-1.367-.766-1.86-.492-.492-1.112-.747-1.859-.765H2.312c-.2 0-.337-.091-.41-.273a.49.49 0 0 1 .11-.493L6.879 5.5H.563c-.274-.018-.42-.164-.438-.438Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeSmRegularIcon);
export default ForwardRef;
