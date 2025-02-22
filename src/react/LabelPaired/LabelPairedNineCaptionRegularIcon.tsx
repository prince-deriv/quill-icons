import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedNineCaptionRegularIcon = (
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
      <path d='M1 8c.016.844.305 1.555.867 2.133.578.562 1.29.851 2.133.867.844-.016 1.547-.297 2.11-.844.546-.562.843-1.258.89-2.086V8c-.016-.844-.305-1.555-.867-2.133C5.555 5.305 4.843 5.016 4 5c-.844.016-1.555.305-2.133.867C1.305 6.445 1.016 7.157 1 8Zm3.773 3.68c-.25.047-.507.07-.773.07-1.063-.031-1.945-.398-2.648-1.102C.648 9.945.282 9.063.25 8c.031-1.063.398-1.945 1.102-2.648C2.055 4.648 2.937 4.282 4 4.25c1.063.031 1.945.398 2.648 1.102.704.703 1.07 1.585 1.102 2.648v.14a3.968 3.968 0 0 1-.96 2.415l-3.634 4.078c-.172.156-.351.164-.539.023-.156-.172-.164-.351-.023-.539l2.18-2.437Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineCaptionRegularIcon);
export default ForwardRef;
