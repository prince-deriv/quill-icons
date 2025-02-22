import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedForwardLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M8.75 9.172c0-.339.117-.612.352-.82.208-.235.481-.352.82-.352.26 0 .495.078.703.234l8.984 6.524c.26.182.391.43.391.742a.86.86 0 0 1-.39.742l-8.985 6.524a1.142 1.142 0 0 1-.703.234c-.339 0-.612-.117-.82-.352-.235-.208-.352-.481-.352-.82v-3.867l-6.914 4.844c-.208.13-.43.195-.664.195-.339 0-.612-.117-.82-.352-.235-.208-.352-.481-.352-.82V9.172c0-.339.117-.612.352-.82C.56 8.117.833 8 1.172 8c.26 0 .482.065.664.195L8.75 13.04V9.172Zm0 6.172-6.875-4.805V20.5l6.875-4.844v-.312Zm8.71.156-6.835-4.96v9.92l6.836-4.96Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardLgBoldIcon);
export default ForwardRef;
