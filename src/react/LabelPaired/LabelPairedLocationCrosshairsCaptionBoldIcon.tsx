import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedLocationCrosshairsCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M6 3.5c.344.031.531.219.563.563v.984c1.03.14 1.906.562 2.625 1.266.703.718 1.132 1.593 1.289 2.625h.96c.344.03.532.218.563.562-.031.344-.219.531-.563.563h-.96c-.157 1.03-.586 1.906-1.29 2.624-.718.704-1.593 1.133-2.624 1.29v.96c-.032.344-.22.532-.563.563-.344-.031-.531-.219-.563-.563v-.96c-1.03-.157-1.906-.586-2.625-1.29-.703-.718-1.124-1.593-1.265-2.624H.563C.219 10.03.03 9.842 0 9.5c.031-.344.219-.531.563-.563h.984c.14-1.03.562-1.906 1.266-2.624.718-.704 1.593-1.125 2.624-1.266v-.984c.032-.344.22-.532.563-.563Zm-3.375 6c0 .61.148 1.172.445 1.688.297.515.711.93 1.243 1.242A3.407 3.407 0 0 0 6 12.875c.594 0 1.156-.148 1.688-.445a3.383 3.383 0 0 0 1.242-1.242A3.323 3.323 0 0 0 9.375 9.5c0-.61-.148-1.172-.445-1.688A3.383 3.383 0 0 0 7.688 6.57 3.408 3.408 0 0 0 6 6.125c-.594 0-1.156.148-1.688.445A3.383 3.383 0 0 0 3.07 7.812 3.323 3.323 0 0 0 2.625 9.5Zm4.5 0a1.168 1.168 0 0 0-.563-.984 1.195 1.195 0 0 0-1.125 0c-.359.234-.546.562-.562.984.016.422.203.75.563.984.375.188.75.188 1.125 0 .359-.234.546-.562.562-.984Zm-3.375 0c0-.406.102-.781.305-1.125s.476-.617.82-.82c.36-.203.734-.305 1.125-.305a2.255 2.255 0 0 1 1.945 1.125c.203.344.305.719.305 1.125s-.102.781-.305 1.125A2.255 2.255 0 0 1 6 11.75a2.255 2.255 0 0 1-1.945-1.125A2.172 2.172 0 0 1 3.75 9.5Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsCaptionBoldIcon);
export default ForwardRef;
