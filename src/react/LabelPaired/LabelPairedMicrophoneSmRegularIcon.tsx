import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMicrophoneSmRegularIcon = (
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
      <path d='M7.25 6.375c-.018-.492-.191-.902-.52-1.23-.328-.329-.738-.502-1.23-.52-.492.018-.902.191-1.23.52-.329.328-.502.738-.52 1.23v4.375c.018.492.191.902.52 1.23.328.329.738.502 1.23.52.492-.018.902-.191 1.23-.52.329-.328.502-.738.52-1.23V6.375Zm-4.375 0c.018-.747.273-1.367.766-1.86.492-.492 1.112-.747 1.859-.765.747.018 1.367.273 1.86.766.492.492.747 1.112.765 1.859v4.375c-.018.747-.273 1.367-.766 1.86-.492.492-1.112.747-1.859.765-.747-.018-1.367-.273-1.86-.766-.492-.492-.747-1.112-.765-1.859V6.375ZM2 9.438v1.312c.018.984.355 1.814 1.012 2.488.674.657 1.504.994 2.488 1.012.984-.018 1.814-.355 2.488-1.012.657-.674.994-1.504 1.012-2.488V9.437c.018-.273.164-.419.438-.437.273.018.419.164.437.438v1.312c-.018 1.167-.401 2.151-1.148 2.953-.73.802-1.66 1.267-2.79 1.395v1.777h1.75c.274.018.42.164.438.438-.018.273-.164.419-.438.437H3.313c-.273-.018-.419-.164-.437-.438.018-.273.164-.419.438-.437h1.75v-1.777c-1.13-.128-2.06-.593-2.79-1.395-.747-.802-1.13-1.786-1.148-2.953V9.437c.018-.273.164-.419.438-.437.273.018.419.164.437.438Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneSmRegularIcon);
export default ForwardRef;
