import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const SocialYoutubeBrandIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='red'
      d='M31.34 8.303a4.01 4.01 0 0 0-2.82-2.82C26.016 4.797 16 4.797 16 4.797s-10.017 0-12.52.66C2.134 5.824 1.027 6.931.658 8.302 0 10.807 0 16 0 16s0 5.22.659 7.697a4.01 4.01 0 0 0 2.82 2.82c2.53.686 12.52.686 12.52.686s10.017 0 12.521-.66a4.01 4.01 0 0 0 2.82-2.82c.66-2.504.66-7.697.66-7.697s.026-5.219-.66-7.723Z'
    />
    <path fill='#fff' d='M12.81 20.797 21.14 16l-8.33-4.797v9.594Z' />
  </svg>
);
const ForwardRef = forwardRef(SocialYoutubeBrandIcon);
export default ForwardRef;
