import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedVideoSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M1.875 6.813c-.273.018-.42.164-.438.437v7c.019.273.165.42.438.438h7c.273-.019.42-.165.438-.438v-7c-.019-.273-.165-.42-.438-.438h-7Zm-1.75.437c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h7c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v7c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52h-7c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23v-7Zm14.438 6.426V7.824L11.5 9.191V7.742l2.844-1.258c.146-.073.3-.109.465-.109.291 0 .537.11.738.328.219.2.328.456.328.766v6.59c0 .291-.11.537-.328.738a.963.963 0 0 1-.738.328c-.164 0-.32-.027-.465-.082L11.5 13.758v-1.45l3.063 1.368Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoSmBoldIcon);
export default ForwardRef;
