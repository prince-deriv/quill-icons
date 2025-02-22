import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketForexHkdjpyIcon = (
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
      fill='#F0371D'
      d='M22 4H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z'
    />
    <path
      fill='#fff'
      d='M15.477 14.705c.473 1.456-.033 2.925-1.13 3.282-.407-1.25-1.11-1.16-1.305-1.762-.24-.738-.3-.925.02-2.192.32-1.267-.97-1.142-.428-1.318 1.097-.357 2.37.534 2.843 1.99Zm-3.868-1.47c.678.934.224 2.42-1.014 3.32-1.239.9-2.793.872-3.47-.061 1.063-.773.76-1.414 1.272-1.786.627-.456.787-.572 2.09-.658 1.304-.087.787-1.275 1.122-.815Zm-2.367 2.049a.347.347 0 0 0-.075.485c.113.155.33.19.485.078a.347.347 0 0 0-.41-.563Zm4.832-.121a.347.347 0 1 0 .214.659.347.347 0 0 0 .224-.437.347.347 0 0 0-.438-.222Zm-7.76-6.021c1.064.773 1.58.287 2.09.658.629.456.788.572 1.273 1.785.485 1.214 1.456.355 1.121.815-.678.934-2.232.96-3.47.061-1.238-.9-1.692-2.386-1.014-3.32Zm8.915.327c1.53 0 2.771.935 2.771 2.089-1.315 0-1.446.696-2.079.696-.775 0-.973 0-2.078-.696-1.106-.697-1.386.569-1.386 0 0-1.154 1.24-2.09 2.771-2.09Zm-7.594 1.39a.347.347 0 0 0 .075.485.347.347 0 0 0 .485-.078.347.347 0 0 0-.075-.485.347.347 0 0 0-.485.078Zm5.4-4.767c-.406 1.25.216 1.59.02 2.192-.24.738-.3.925-1.304 1.761-1.004.837.113 1.494-.428 1.318-1.098-.356-1.604-1.825-1.131-3.281.473-1.456 1.746-2.347 2.843-1.99Zm2.54 4.504a.347.347 0 0 0-.346.348c0 .193.155.349.346.349a.347.347 0 0 0 .346-.348.347.347 0 0 0-.346-.349ZM11.37 8.1a.347.347 0 0 0 .224.437.347.347 0 1 0 .214-.659.347.347 0 0 0-.438.222Z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 5H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM2 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M8 14a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V14Z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M30 13H10a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1Zm-20-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2H10Z'
      clipRule='evenodd'
    />
    <path fill='#ED293F' d='M24.5 20a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z' />
  </svg>
);
const ForwardRef = forwardRef(MarketForexHkdjpyIcon);
export default ForwardRef;
