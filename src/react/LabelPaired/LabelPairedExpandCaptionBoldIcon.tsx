import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedExpandCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M3.438 4.25c.343.031.53.219.562.563-.031.343-.219.53-.563.562H1.376v2.063c-.031.343-.219.53-.563.562-.343-.031-.53-.219-.562-.563V4.813c.031-.343.219-.53.563-.562h2.625ZM.25 11.563c.031-.344.219-.532.563-.563.343.031.53.219.562.563v2.062h2.063c.343.031.53.219.562.563-.031.343-.219.53-.563.562H.813c-.344-.031-.532-.219-.563-.563v-2.624Zm9.938-7.313c.343.031.53.219.562.563v2.625c-.031.343-.219.53-.563.562-.343-.031-.53-.219-.562-.563V5.376H7.562c-.343-.031-.53-.219-.562-.563.031-.343.219-.53.563-.562h2.625Zm-.563 7.313c.031-.344.219-.532.563-.563.343.031.53.219.562.563v2.624c-.031.344-.219.532-.563.563H7.563c-.344-.031-.532-.219-.563-.563.031-.343.219-.53.563-.562h2.062v-2.063Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandCaptionBoldIcon);
export default ForwardRef;
