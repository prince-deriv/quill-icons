import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedStarCaptionFillIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='m7.68 3.922 1.5 3.094 3.375.515c.297.047.5.211.61.492a.778.778 0 0 1-.188.774l-2.438 2.414.563 3.422c.046.297-.055.539-.305.726a.698.698 0 0 1-.774.047L7 13.812l-3 1.594c-.281.14-.547.125-.797-.047a.774.774 0 0 1-.305-.726l.586-3.422-2.437-2.414a.716.716 0 0 1-.188-.774.688.688 0 0 1 .586-.492l3.375-.515 1.5-3.094A.798.798 0 0 1 7 3.5c.313.016.54.156.68.422Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarCaptionFillIcon);
export default ForwardRef;
