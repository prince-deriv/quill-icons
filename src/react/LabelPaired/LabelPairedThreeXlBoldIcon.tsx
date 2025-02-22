import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedThreeXlBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M0 8.625C.063 7.937.438 7.562 1.125 7.5h12c.5.031.844.266 1.031.703.188.469.11.875-.234 1.219l-6.985 6.703h1.875c1.75.031 3.204.64 4.36 1.828 1.187 1.156 1.797 2.61 1.828 4.36-.031 1.75-.64 3.203-1.828 4.359-1.156 1.187-2.61 1.797-4.36 1.828H4.548c-.938 0-1.781-.25-2.531-.75a4.917 4.917 0 0 1-1.829-1.922l-.046-.187c-.25-.657-.094-1.157.468-1.5.657-.25 1.157-.094 1.5.468l.094.188c.531.937 1.313 1.422 2.344 1.453h4.266c1.124-.031 2.046-.422 2.765-1.172.75-.719 1.14-1.64 1.172-2.765-.031-1.125-.422-2.047-1.172-2.766-.719-.75-1.64-1.14-2.765-1.172H4.125c-.5-.031-.844-.266-1.031-.703-.188-.469-.11-.875.234-1.219l6.985-6.703H1.124C.437 9.687.062 9.312 0 8.625Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeXlBoldIcon);
export default ForwardRef;
