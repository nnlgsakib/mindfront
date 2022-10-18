import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="26" height="26" viewBox="0 0 26 26" {...props}>
      <path d="M13 26C5.82915 26 0 20.1708 0 13C0 5.82915 5.82915 0 13 0C20.1708 0 26 5.82915 26 13C26 20.1708 20.1708 26 13 26ZM13 5.07872C8.63382 5.07872 5.07872 8.63382 5.07872 13C5.07872 17.3662 8.63382 20.9213 13 20.9213C17.3662 20.9213 20.9213 17.3662 20.9213 13C20.9213 8.63382 17.3662 5.07872 13 5.07872Z" fill="url(#paint0_linear_198_16002)"/>
      <path d="M17.2458 12.4692V12.1281H19.3304V11.2185H17.2079V9.24762H15.7677L14.1001 11.9765V10.5362H13.1905V13.7957H12.8872V10.5362H11.9018V12.0523L10.2342 9.24762H8.71815V11.2185H6.5957V12.1281H8.71815V12.5071H6.5957V13.4167H8.71815V16.6762L10.4237 16.7141V12.3176L12.6219 15.8803H13.38L15.5782 12.3176V16.6383H17.2458V13.4546H19.3683V12.4692H17.2458Z" fill="#FCC804"/>
      <defs>
      <linearGradient id="paint0_linear_198_16002" x1="9.53682" y1="0.424945" x2="16.4769" y2="25.6248" gradientUnits="userSpaceOnUse">
      <stop stopColor="#D8A62E"/>
      <stop offset="0.2765" stopColor="#FBCA02"/>
      <stop offset="0.5084" stopColor="#F6F583"/>
      <stop offset="0.757" stopColor="#FBCA02"/>
      <stop offset="1" stopColor="#C69752"/>
      </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
