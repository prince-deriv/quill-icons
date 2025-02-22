import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCaretDownLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='m6.734 19.172 4.688-4.453a.265.265 0 0 0 .078-.196.305.305 0 0 0-.273-.273H1.773a.305.305 0 0 0-.273.273c0 .079.026.144.078.196l4.688 4.453a.42.42 0 0 0 .234.078.42.42 0 0 0 .234-.078Zm.86.898c-.313.287-.677.43-1.094.43-.417 0-.781-.143-1.094-.43L.72 15.656a1.543 1.543 0 0 1-.469-1.133c0-.442.143-.807.43-1.093.286-.287.65-.43 1.093-.43h9.454c.442.026.807.182 1.093.469.287.286.43.638.43 1.054 0 .443-.156.82-.469 1.133L7.594 20.07Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownLgRegularIcon);
export default ForwardRef;
