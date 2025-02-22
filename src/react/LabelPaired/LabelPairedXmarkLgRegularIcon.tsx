import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedXmarkLgRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12.695 21.555 7.5 16.398l-5.156 5.157c-.313.234-.612.234-.899 0-.234-.287-.234-.573 0-.86L6.602 15.5l-5.157-5.156c-.234-.313-.234-.612 0-.899.287-.234.586-.234.899 0L7.5 14.602l5.195-5.157c.287-.234.573-.234.86 0 .234.287.234.586 0 .899L8.398 15.5l5.157 5.195c.234.287.234.573 0 .86-.287.234-.573.234-.86 0Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkLgRegularIcon);
export default ForwardRef;
