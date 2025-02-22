import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCaretUpSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      <path d='m4.336 8.18-3.281 3.117a.185.185 0 0 0-.055.137c.018.109.082.173.191.191H7.81A.214.214 0 0 0 8 11.434c0-.055-.018-.1-.055-.137L4.665 8.18a.294.294 0 0 0-.165-.055.294.294 0 0 0-.164.055Zm-.602-.63c.22-.2.474-.3.766-.3.292 0 .547.1.766.3l3.28 3.118c.22.2.329.456.329.766s-.1.565-.3.765c-.201.2-.457.301-.766.301H1.19c-.31 0-.565-.1-.765-.3-.2-.201-.301-.457-.301-.766 0-.31.11-.575.328-.793l3.281-3.09Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpSmRegularIcon);
export default ForwardRef;
