import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeMultipleMarketsIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M12 4.667H8A3.335 3.335 0 0 0 4.667 8v4A3.335 3.335 0 0 0 8 15.333h6c.733 0 1.333-.6 1.333-1.333V8A3.335 3.335 0 0 0 12 4.667ZM8 14c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v6H8Z' />
      <path d='M11.333 9.333c-.366 0-.666.3-.666.667v1.333c0 .367.3.667.666.667.367 0 .667-.3.667-.667V10c0-.367-.3-.667-.667-.667ZM8.667 8.667c-.367 0-.667.3-.667.666v2c0 .367.3.667.667.667.366 0 .666-.3.666-.667v-2c0-.366-.3-.666-.666-.666ZM24 4.667h-4A3.335 3.335 0 0 0 16.667 8v6c0 .733.6 1.333 1.333 1.333h6A3.335 3.335 0 0 0 27.333 12V8A3.335 3.335 0 0 0 24 4.667ZM26 12c0 1.1-.9 2-2 2h-6V8c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4Z' />
      <path d='M23.333 8c-.366 0-.666.3-.666.667v2.666c0 .367.3.667.666.667.367 0 .667-.3.667-.667V8.667C24 8.3 23.7 8 23.333 8ZM20.667 10c-.367 0-.667.3-.667.667v.666c0 .367.3.667.667.667.366 0 .666-.3.666-.667v-.666c0-.367-.3-.667-.666-.667ZM24 16.667h-6c-.733 0-1.333.6-1.333 1.333v6A3.335 3.335 0 0 0 20 27.333h4A3.335 3.335 0 0 0 27.333 24v-4A3.334 3.334 0 0 0 24 16.667ZM26 24c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-6h6c1.1 0 2 .9 2 2v4Z' />
      <path d='M23.333 22c-.366 0-.666.3-.666.667v.666c0 .367.3.667.666.667.367 0 .667-.3.667-.667v-.666c0-.367-.3-.667-.667-.667ZM20.667 20c-.367 0-.667.3-.667.667v2.666c0 .367.3.667.667.667.366 0 .666-.3.666-.667v-2.666c0-.367-.3-.667-.666-.667ZM14.613 19.08s-.006-.013-.013-.02a.671.671 0 0 0-.12-.173c-.013-.02-.033-.034-.053-.047a.513.513 0 0 0-.14-.093c-.02-.014-.04-.02-.06-.034a.691.691 0 0 0-.234-.046H12.66c-.367 0-.667.3-.667.666 0 .287.18.527.434.627l-2.434 2.433L7.8 20.2a.664.664 0 0 0-.94 0l-1.32 1.32a.676.676 0 0 0-.093.853c.206.307.62.387.926.187 0 0 .254-.24.287-.267l.68-.68 2.193 2.194c.134.133.3.193.474.193.173 0 .34-.067.473-.193l2.907-2.907c.093.253.333.44.62.44.366 0 .666-.3.666-.667V19.313a.583.583 0 0 0-.046-.233h-.014Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeMultipleMarketsIcon);
export default ForwardRef;
