import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedHouseBlankLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='m12.125 5.734 10.313 8.75c.39.391.416.834.078 1.329-.391.39-.82.416-1.29.078l-.976-.782v7.266c-.026.885-.326 1.628-.898 2.227-.6.572-1.342.872-2.227.898H5.875c-.885-.026-1.628-.326-2.227-.898-.572-.6-.872-1.342-.898-2.227v-7.266l-.977.782c-.468.338-.898.312-1.289-.079-.338-.494-.312-.937.079-1.328l10.312-8.75c.417-.312.833-.312 1.25 0Zm6.25 7.774L11.5 7.688l-6.875 5.82v8.867c0 .365.117.664.352.898.234.235.533.352.898.352h11.25c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-8.867Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankLgBoldIcon);
export default ForwardRef;
