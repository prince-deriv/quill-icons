import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedRectangleAdSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M1.875 5.5a.852.852 0 0 0-.629.246.852.852 0 0 0-.246.629v8.75c0 .255.082.465.246.629a.852.852 0 0 0 .629.246h12.25a.852.852 0 0 0 .629-.246.852.852 0 0 0 .246-.629v-8.75a.852.852 0 0 0-.246-.629.852.852 0 0 0-.629-.246H1.875Zm-1.75.875c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h12.25c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v8.75c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H1.875c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23v-8.75Zm5.879 1.996 1.969 4.375c.073.255 0 .456-.22.602-.254.073-.455 0-.6-.22l-.274-.628h-2.57l-.274.629c-.146.219-.346.292-.601.219-.237-.146-.31-.347-.22-.602l1.97-4.375a.442.442 0 0 1 .41-.246c.182 0 .319.082.41.246Zm-.41 1.258-.903 1.996h1.805l-.902-1.996Zm4.812.684c-.419.018-.738.2-.957.546-.182.365-.182.73 0 1.094.219.347.538.529.957.547.42-.018.739-.2.957-.547.183-.364.183-.729 0-1.094-.218-.346-.537-.528-.957-.546Zm1.094-.547V8.562c.018-.273.164-.419.438-.437.273.018.419.164.437.438v4.374c-.018.274-.164.42-.438.438a.471.471 0 0 1-.437-.328c-.31.219-.675.328-1.094.328-.565-.018-1.03-.21-1.394-.574-.365-.365-.556-.83-.575-1.395.019-.565.21-1.03.575-1.394.364-.365.83-.556 1.394-.575.42 0 .784.11 1.094.329Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdSmRegularIcon);
export default ForwardRef;
