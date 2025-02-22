import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedAndroidCaptionIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M10.117 10.578c.328-.031.516-.219.563-.562-.047-.344-.235-.532-.563-.563-.344.031-.531.219-.562.563.03.343.218.53.562.562Zm-6.234 0c.344-.031.531-.219.562-.562-.03-.344-.218-.532-.562-.563-.328.031-.516.219-.563.563.047.343.235.53.563.562Zm6.422-3.398a6.549 6.549 0 0 1 2.367 2.203c.61.906.969 1.945 1.078 3.117H.25c.11-1.172.469-2.21 1.078-3.117A6.549 6.549 0 0 1 3.695 7.18L2.57 5.234A.252.252 0 0 1 2.547 5a.23.23 0 0 1 .21-.117A.23.23 0 0 1 2.97 5l1.148 1.992A6.852 6.852 0 0 1 7 6.36c1 0 1.96.211 2.883.633L11.03 5a.23.23 0 0 1 .211-.117.23.23 0 0 1 .211.117.252.252 0 0 1-.023.234L10.305 7.18Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAndroidCaptionIcon);
export default ForwardRef;
