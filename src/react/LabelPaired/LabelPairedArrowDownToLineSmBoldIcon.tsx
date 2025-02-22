import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownToLineSmBoldIcon = (
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
      <path d='M10.094 16.875H.906c-.4-.037-.62-.255-.656-.656.036-.401.255-.62.656-.657h9.188c.4.037.62.256.656.657-.037.4-.255.62-.656.656Zm-5.059-3.719v.028l-3.5-3.72c-.255-.327-.246-.637.028-.929.31-.255.62-.246.93.027l2.35 2.516V5.281c.037-.4.256-.62.657-.656.401.036.62.255.656.656V11.078l2.38-2.515c.29-.274.6-.283.929-.028.255.292.264.593.027.902l-3.5 3.72a.68.68 0 0 1-.492.218.595.595 0 0 1-.465-.219Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineSmBoldIcon);
export default ForwardRef;
