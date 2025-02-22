import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedInfoSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={22}
    viewBox='0 0 6 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M1.906 5.719c.018-.42.2-.739.547-.957.365-.183.73-.183 1.094 0 .346.218.529.537.547.957-.018.419-.2.738-.547.957-.365.182-.73.182-1.094 0-.346-.219-.529-.538-.547-.957Zm-1.093 3.5c.036-.401.255-.62.656-.656H3c.401.036.62.255.656.656v7.219H4.97c.4.036.62.255.656.656-.036.4-.255.62-.656.656H1.03c-.4-.037-.62-.255-.656-.656.036-.401.255-.62.656-.657h1.313V9.875h-.875c-.401-.036-.62-.255-.657-.656Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoSmBoldIcon);
export default ForwardRef;
