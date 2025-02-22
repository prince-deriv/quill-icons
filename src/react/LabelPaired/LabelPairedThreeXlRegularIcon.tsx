import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedThreeXlRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M0 8.25c.031-.469.281-.719.75-.75H13.5c.344 0 .578.156.703.469a.841.841 0 0 1-.187.843L5.672 16.5H9c1.688.031 3.11.61 4.266 1.734C14.39 19.391 14.969 20.812 15 22.5c-.031 1.688-.61 3.11-1.734 4.266C12.109 27.89 10.687 28.469 9 28.5H4.172a4.426 4.426 0 0 1-2.344-.656 4.235 4.235 0 0 1-1.64-1.828l-.094-.188c-.188-.437-.078-.765.328-.984.406-.188.734-.078.984.328l.094.187c.594 1.063 1.484 1.61 2.672 1.641H9c1.281-.031 2.344-.469 3.188-1.313.843-.843 1.28-1.906 1.312-3.187-.031-1.281-.469-2.344-1.313-3.188C11.345 18.47 10.281 18.032 9 18H3.75c-.344 0-.578-.156-.703-.469a.841.841 0 0 1 .187-.843L11.578 9H.75C.281 8.969.031 8.719 0 8.25Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeXlRegularIcon);
export default ForwardRef;
