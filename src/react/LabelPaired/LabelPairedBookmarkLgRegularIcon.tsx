import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBookmarkLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M0 7.375c.026-.52.208-.964.547-1.328.364-.339.807-.521 1.328-.547h11.25c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v17.266c-.052.52-.338.807-.86.859a.727.727 0 0 1-.468-.156L7.5 21.242l-6.172 4.102a.727.727 0 0 1-.469.156c-.52-.052-.807-.338-.859-.86V7.376Zm1.875-.625c-.39.026-.599.234-.625.625v16.523l5.898-3.906a.586.586 0 0 1 .704 0l5.898 3.906V7.375c-.026-.39-.234-.599-.625-.625H1.875Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkLgRegularIcon);
export default ForwardRef;
