import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSignalLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M23.125 6.125v18.75c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V6.125c.026-.39.234-.599.625-.625.39.026.599.234.625.625ZM17.5 9.25c.39.026.599.234.625.625v15c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-15c.026-.39.234-.599.625-.625Zm-4.375 4.375v11.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-11.25c.026-.39.234-.599.625-.625.39.026.599.234.625.625ZM7.5 16.75c.39.026.599.234.625.625v7.5c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-7.5c.026-.39.234-.599.625-.625Zm-5 3.75c.39.026.599.234.625.625v3.75c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-3.75c.026-.39.234-.599.625-.625Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalLgRegularIcon);
export default ForwardRef;
