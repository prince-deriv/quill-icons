import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPenMdRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='m12.375 5.25-1.719 1.688 2.406 2.406 1.688-1.719c.292-.354.292-.708 0-1.063L13.437 5.25c-.354-.292-.708-.292-1.062 0ZM9.937 7.656 2.595 15c-.23.25-.396.542-.5.875L1.25 18.75l2.875-.844c.333-.104.625-.27.875-.5l7.344-7.343-2.406-2.407Zm4.188-3.125 1.344 1.344c.333.354.5.76.5 1.219 0 .479-.167.896-.5 1.25l-9.781 9.75c-.355.375-.771.635-1.25.781L.655 19.969c-.208.062-.375.02-.5-.125-.146-.125-.187-.282-.125-.469l1.094-3.781c.146-.5.396-.927.75-1.281l9.781-9.782c.354-.333.771-.5 1.25-.5.459 0 .865.167 1.219.5Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenMdRegularIcon);
export default ForwardRef;
