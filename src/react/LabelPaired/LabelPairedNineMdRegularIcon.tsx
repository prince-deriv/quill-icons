import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedNineMdRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M1 10c.02 1.125.406 2.073 1.156 2.844.771.75 1.719 1.135 2.844 1.156 1.125-.02 2.063-.396 2.813-1.125.729-.75 1.125-1.677 1.187-2.781V10c-.02-1.125-.406-2.073-1.156-2.844C7.073 6.406 6.125 6.021 5 6c-1.125.02-2.073.406-2.844 1.156C1.406 7.927 1.021 8.875 1 10Zm5.031 4.906A5.576 5.576 0 0 1 5 15c-1.417-.042-2.594-.531-3.531-1.469C.53 12.594.042 11.417 0 10c.042-1.417.531-2.594 1.469-3.531C2.406 5.53 3.583 5.042 5 5c1.417.042 2.594.531 3.531 1.469C9.47 7.406 9.958 8.583 10 10v.188a5.29 5.29 0 0 1-1.281 3.218l-4.844 5.438c-.23.208-.469.218-.719.031-.208-.23-.219-.469-.031-.719l2.906-3.25Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineMdRegularIcon);
export default ForwardRef;
