import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedNineSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M1.438 9c.018.875.319 1.595.902 2.16.565.583 1.285.884 2.16.902.911-.018 1.659-.346 2.242-.984l.137-.164A2.969 2.969 0 0 0 7.563 9c-.019-.875-.32-1.595-.903-2.16-.565-.583-1.285-.884-2.16-.902-.875.018-1.595.319-2.16.902-.583.565-.884 1.285-.902 2.16Zm3.445 4.348a2.708 2.708 0 0 1-.383.027c-1.24-.037-2.27-.465-3.09-1.285C.59 11.27.161 10.24.125 9 .161 7.76.59 6.73 1.41 5.91c.82-.82 1.85-1.249 3.09-1.285 1.24.036 2.27.465 3.09 1.285.82.82 1.249 1.85 1.285 3.09-.018 1.167-.401 2.151-1.148 2.953L3.926 16.63c-.292.292-.602.328-.93.11-.292-.292-.328-.602-.11-.93l1.997-2.461Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineSmBoldIcon);
export default ForwardRef;
