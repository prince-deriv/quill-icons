import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedFacebookXlIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M23.625 18c-.063 2.969-1 5.5-2.813 7.594-1.812 2.093-4.14 3.39-6.984 3.89v-8.109h2.719L17.062 18h-3.234v-2.203a1.679 1.679 0 0 1 .375-1.219c.281-.375.781-.562 1.5-.562h1.453v-2.86c-.031-.031-.297-.078-.797-.14a15.348 15.348 0 0 0-1.78-.094c-1.345 0-2.407.39-3.188 1.172-.782.781-1.188 1.89-1.22 3.328V18H7.22v3.375h2.953v8.11c-2.844-.5-5.172-1.797-6.985-3.891C1.375 23.5.438 20.969.376 18c.031-2.156.563-4.11 1.594-5.86A11.606 11.606 0 0 1 6.14 7.97C7.89 6.937 9.844 6.406 12 6.375c2.156.031 4.11.563 5.86 1.594a11.605 11.605 0 0 1 4.171 4.172c1.032 1.75 1.563 3.703 1.594 5.859Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFacebookXlIcon);
export default ForwardRef;
