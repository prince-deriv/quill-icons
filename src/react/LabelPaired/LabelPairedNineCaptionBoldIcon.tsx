import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedNineCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M1.375 8c.016.75.273 1.367.773 1.852.485.5 1.102.757 1.852.773.781-.016 1.422-.297 1.922-.844l.117-.14c.39-.485.586-1.032.586-1.641-.016-.75-.273-1.367-.773-1.852-.485-.5-1.102-.757-1.852-.773-.75.016-1.367.273-1.852.773-.5.485-.757 1.102-.773 1.852Zm2.953 3.727A2.32 2.32 0 0 1 4 11.75c-1.063-.031-1.945-.398-2.648-1.102C.648 9.945.282 9.063.25 8c.031-1.063.398-1.945 1.102-2.648C2.055 4.648 2.937 4.282 4 4.25c1.063.031 1.945.398 2.648 1.102.704.703 1.07 1.585 1.102 2.648-.016 1-.344 1.844-.984 2.531L3.508 14.54c-.25.25-.516.281-.797.094-.25-.25-.281-.516-.094-.797l1.711-2.11Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineCaptionBoldIcon);
export default ForwardRef;
