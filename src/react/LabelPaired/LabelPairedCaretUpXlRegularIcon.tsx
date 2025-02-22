import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCaretUpXlRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='m7.219 13.594-5.625 5.344a.318.318 0 0 0-.094.234c.031.187.14.297.328.328h11.344a.366.366 0 0 0 .328-.328.318.318 0 0 0-.094-.235l-5.625-5.343A.503.503 0 0 0 7.5 13.5a.503.503 0 0 0-.281.094Zm-1.032-1.078A1.881 1.881 0 0 1 7.5 12c.5 0 .938.172 1.313.516l5.624 5.343c.376.344.563.782.563 1.313 0 .531-.172.969-.516 1.312-.343.344-.78.516-1.312.516H1.828c-.531 0-.969-.172-1.312-.516-.344-.343-.516-.78-.516-1.312 0-.531.188-.985.563-1.36l5.625-5.296Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpXlRegularIcon);
export default ForwardRef;
