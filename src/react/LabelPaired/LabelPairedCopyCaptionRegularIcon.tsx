import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCopyCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M9.25 11.75a.73.73 0 0 0 .54-.21A.73.73 0 0 0 10 11V6.219c0-.11-.04-.196-.117-.258L8.289 4.367a.312.312 0 0 0-.258-.117H5.5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v6c0 .219.07.398.21.54.142.14.321.21.54.21h3.75Zm1.172-6.328c.219.219.328.484.328.797V11a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445H5.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 4 11V5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h2.531c.313 0 .578.11.797.328l1.594 1.594ZM1.75 6.5h1.5v.75h-1.5a.73.73 0 0 0-.54.21A.73.73 0 0 0 1 8v6c0 .219.07.398.21.54.142.14.321.21.54.21H5.5a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-.75H7V14a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445H1.75a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 14V8c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyCaptionRegularIcon);
export default ForwardRef;
