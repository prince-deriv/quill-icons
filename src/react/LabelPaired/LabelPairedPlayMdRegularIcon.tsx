import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlayMdRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M1.75 6.063a.531.531 0 0 0-.5 0A.49.49 0 0 0 1 6.5v11a.49.49 0 0 0 .25.438.531.531 0 0 0 .5 0l9-5.5A.49.49 0 0 0 11 12a.49.49 0 0 0-.25-.438l-9-5.5Zm-.969-.875c.5-.271 1-.26 1.5.03l9 5.5c.459.292.698.72.719 1.282-.02.563-.26.99-.719 1.281l-9 5.5c-.5.292-1 .302-1.5.032-.5-.292-.76-.73-.781-1.313v-11c.02-.583.281-1.02.781-1.313Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayMdRegularIcon);
export default ForwardRef;
