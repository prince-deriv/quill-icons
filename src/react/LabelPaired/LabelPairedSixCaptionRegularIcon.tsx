import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSixCaptionRegularIcon = (
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
      <path d='M7 11c-.016-.844-.305-1.555-.867-2.133C5.555 8.305 4.843 8.016 4 8c-.844.016-1.54.305-2.086.867-.562.547-.867 1.235-.914 2.063V11c.016.844.305 1.555.867 2.133.578.562 1.29.851 2.133.867.844-.016 1.555-.305 2.133-.867.562-.578.851-1.29.867-2.133ZM3.227 7.344c.25-.063.507-.094.773-.094 1.063.031 1.945.398 2.648 1.102.704.703 1.07 1.585 1.102 2.648-.031 1.063-.398 1.945-1.102 2.648-.703.704-1.585 1.07-2.648 1.102-1.063-.031-1.945-.398-2.648-1.102C.648 12.945.282 12.063.25 11v-.14a3.867 3.867 0 0 1 .96-2.391l3.634-4.102c.172-.156.351-.164.539-.023.156.172.164.351.023.539l-2.18 2.46Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixCaptionRegularIcon);
export default ForwardRef;
