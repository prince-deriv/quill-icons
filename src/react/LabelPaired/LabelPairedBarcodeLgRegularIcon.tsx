import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBarcodeLgRegularIcon = (
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
      <path d='M0 7.375c.026-.39.234-.599.625-.625.39.026.599.234.625.625v16.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V7.375Zm2.5 0c.026-.39.234-.599.625-.625.39.026.599.234.625.625v16.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V7.375Zm3.125-.625c.39.026.599.234.625.625v16.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V7.375c.026-.39.234-.599.625-.625Zm3.125.625c.026-.39.234-.599.625-.625.39.026.599.234.625.625v16.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V7.375Zm3.125-.625c.39.026.599.234.625.625v16.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V7.375c.026-.39.234-.599.625-.625ZM15 7.375c.026-.39.234-.599.625-.625.39.026.599.234.625.625v16.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V7.375Zm4.375-.625c.39.026.599.234.625.625v16.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V7.375c.026-.39.234-.599.625-.625Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeLgRegularIcon);
export default ForwardRef;
