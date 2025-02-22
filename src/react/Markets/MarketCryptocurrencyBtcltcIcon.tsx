import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketCryptocurrencyBtcltcIcon = (
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
    <path fill='#F7931A' d='M20 11a8.999 8.999 0 1 1-17.998 0A8.999 8.999 0 0 1 20 11Z' />
    <path
      fill='#fff'
      d='M15.02 10.115c.176-1.179-.722-1.813-1.95-2.236l.399-1.597-.972-.242-.388 1.555c-.255-.064-.518-.124-.78-.183l.392-1.566-.972-.242-.398 1.597c-.212-.049-.42-.096-.621-.146V7.05l-1.34-.335-.259 1.038s.722.166.707.176c.393.098.464.358.452.565l-.453 1.82a.873.873 0 0 1 .101.032l-.103-.025L8.2 12.87c-.048.119-.17.298-.446.23.01.014-.706-.176-.706-.176l-.483 1.113 1.265.315c.236.06.466.121.693.18l-.402 1.614.971.242.398-1.597c.266.071.523.138.775.2l-.397 1.591.972.242.402-1.612c1.658.314 2.905.188 3.43-1.312.422-1.207-.022-1.904-.894-2.358.636-.146 1.114-.564 1.242-1.427Zm-2.222 3.115c-.3 1.207-2.333.554-2.992.39l.534-2.14c.66.165 2.772.49 2.458 1.75Zm.3-3.133c-.273 1.099-1.965.54-2.513.404l.483-1.94c.549.136 2.316.39 2.03 1.536Z'
    />
    <path fill='#BFBBBB' d='M30 21a8.999 8.999 0 1 1-17.998 0A8.999 8.999 0 0 1 30 21Z' />
    <path
      fill='#fff'
      d='m17.866 22.808-.802.311.387-1.552.812-.326 1.17-4.74h2.885l-.854 3.484.793-.32-.383 1.546-.802.321-.477 1.959h4.343l-.491 2.009h-7.242l.661-2.692Z'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketCryptocurrencyBtcltcIcon);
export default ForwardRef;
