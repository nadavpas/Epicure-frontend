import type { SVGProps } from "react";
const SvgStar = ({fill='none',...props}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={37}
    fill={fill}
    {...props}
  >
    <path
      stroke="#DE9200"
      d="m24.015 13.975.112.344h13.355l-10.51 7.637-.294.214.112.346 4.014 12.354-10.51-7.636-.294-.213-.294.213-10.51 7.636 4.014-12.354.112-.346-.294-.214-10.51-7.637h13.355l.112-.344L20 1.617z"
    />
  </svg>
);
export default SvgStar;
