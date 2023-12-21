import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedLocationDotLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M13.75 13c-.052-1.77-.664-3.242-1.836-4.414C10.742 7.414 9.271 6.802 7.5 6.75c-1.77.052-3.242.664-4.414 1.836C1.914 9.758 1.302 11.229 1.25 13c0 .625.221 1.445.664 2.46a25.812 25.812 0 0 0 1.68 3.243 41.351 41.351 0 0 0 2.07 3.047c.703.963 1.315 1.77 1.836 2.422a70.317 70.317 0 0 0 1.836-2.422 41.313 41.313 0 0 0 2.07-3.047 23.19 23.19 0 0 0 1.719-3.242c.417-1.016.625-1.836.625-2.461ZM15 13c-.052 1.172-.469 2.526-1.25 4.063a39.272 39.272 0 0 1-2.734 4.453C10 22.974 9.14 24.133 8.437 24.992c-.26.313-.572.469-.937.469-.365 0-.677-.156-.938-.469-.703-.86-1.562-2.018-2.578-3.476a39.266 39.266 0 0 1-2.734-4.453C.469 15.526.052 14.171 0 13c.052-2.135.781-3.906 2.188-5.313C3.593 6.282 5.364 5.553 7.5 5.5c2.135.052 3.906.781 5.313 2.188C14.219 9.094 14.947 10.864 15 13Zm-9.375 0c.026.703.339 1.25.938 1.64.625.313 1.25.313 1.875 0 .598-.39.911-.937.937-1.64-.026-.703-.339-1.25-.938-1.64-.624-.313-1.25-.313-1.874 0-.6.39-.912.937-.938 1.64ZM7.5 16.125c-1.172-.026-2.07-.547-2.695-1.563-.573-1.041-.573-2.083 0-3.124C5.43 10.421 6.328 9.9 7.5 9.874c1.172.026 2.07.547 2.695 1.563.573 1.041.573 2.083 0 3.124C9.57 15.579 8.672 16.1 7.5 16.125Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotLgRegularIcon);
export default ForwardRef;
