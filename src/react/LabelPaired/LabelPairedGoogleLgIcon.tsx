import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedGoogleLgIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M19.531 15.734c-.052 2.813-.911 5.079-2.578 6.797-1.693 1.719-3.958 2.604-6.797 2.657-1.797-.026-3.424-.47-4.883-1.329a9.672 9.672 0 0 1-3.476-3.476C.937 18.924.495 17.297.469 15.5c.026-1.797.469-3.425 1.328-4.883a9.671 9.671 0 0 1 3.476-3.476c1.459-.86 3.086-1.302 4.883-1.329 2.63.053 4.792.899 6.485 2.54l-2.618 2.539c-1.223-1.094-2.59-1.589-4.101-1.485-1.51.078-2.839.651-3.985 1.719-1.12 1.094-1.718 2.552-1.796 4.375.052 1.745.638 3.19 1.757 4.336 1.146 1.146 2.566 1.745 4.258 1.797 1.276-.026 2.305-.287 3.086-.781.781-.495 1.367-1.055 1.758-1.68.365-.651.586-1.224.664-1.719h-5.508v-3.36h9.219c.104.47.156 1.016.156 1.641Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGoogleLgIcon);
export default ForwardRef;
