import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTriangleExclamationLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      <path d='M9.688 8.781 1.952 21.516a.556.556 0 0 0-.078.312c.026.339.221.521.586.547h15.117c.339-.026.521-.208.547-.547a.693.693 0 0 0-.078-.312L10.312 8.78A.371.371 0 0 0 10 8.625a.371.371 0 0 0-.313.156Zm-1.602-.976C8.555 7.128 9.193 6.776 10 6.75c.833.026 1.471.378 1.914 1.055l7.734 12.734c.235.39.352.82.352 1.29-.026.676-.26 1.25-.703 1.718-.469.443-1.042.677-1.719.703H2.461c-.703-.026-1.29-.26-1.758-.703C.26 23.078.026 22.505 0 21.828c0-.469.117-.898.352-1.289L8.086 7.805Zm3.164 12.07c0 .365-.117.664-.352.898-.234.235-.533.352-.898.352s-.664-.117-.898-.352c-.235-.234-.352-.533-.352-.898s.117-.664.352-.898c.234-.235.533-.352.898-.352s.664.117.898.352c.235.234.352.533.352.898Zm-.313-7.188v3.75c-.052.573-.364.886-.937.938-.573-.052-.885-.365-.938-.938v-3.75c.053-.572.365-.885.938-.937.573.052.885.365.938.938Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationLgBoldIcon);
export default ForwardRef;
