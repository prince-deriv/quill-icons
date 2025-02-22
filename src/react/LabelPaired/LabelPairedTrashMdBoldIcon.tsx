import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTrashMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M5.531 5.5c-.083 0-.146.042-.187.125L4.75 6.5h4.531l-.594-.875c-.062-.083-.135-.125-.218-.125H5.53Zm5.532 1H13.25c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-.375l-.75 10.156a1.96 1.96 0 0 1-.625 1.313c-.375.333-.823.51-1.344.531H3.844a2.086 2.086 0 0 1-1.344-.531 1.96 1.96 0 0 1-.625-1.313L1.125 8H.75C.292 7.958.042 7.708 0 7.25c.042-.458.292-.708.75-.75h2.188l1.156-1.719c.354-.5.833-.76 1.437-.781H8.47c.604.02 1.094.281 1.469.781L11.062 6.5Zm.312 1.5h-8.75l.719 10.031c.062.292.229.448.5.469h6.312c.271-.02.438-.177.5-.469L11.375 8Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashMdBoldIcon);
export default ForwardRef;
