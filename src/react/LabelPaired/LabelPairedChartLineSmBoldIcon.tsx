import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartLineSmBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M1.313 5.281v9.625c.036.401.255.62.656.656h11.375c.4.037.62.256.656.657-.037.4-.255.62-.656.656H1.969c-.565-.018-1.03-.21-1.395-.574-.364-.365-.556-.83-.574-1.395V5.281c.036-.4.255-.62.656-.656.401.036.62.255.656.656Zm11.62 3.09L9.216 12.09c-.31.255-.62.255-.93 0l-2.16-2.16-2.16 2.16c-.31.255-.62.255-.93 0-.255-.31-.255-.62 0-.93L5.66 8.535a.633.633 0 0 1 .465-.191c.182 0 .337.064.465.191l2.16 2.16 3.254-3.254c.31-.255.62-.255.93 0 .255.31.255.62 0 .93Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineSmBoldIcon);
export default ForwardRef;
