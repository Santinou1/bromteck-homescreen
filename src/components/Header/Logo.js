import React from "react";
import "./HeaderStyles.css";

function Logo({ children, ...restProps }) {
  return (
    <div>
      <a href="/" {...restProps}>
        {children}
        <img className="logo" href="/" src="./images/misc/bmk_tv-1024x91.png" alt="Netflix logo" />
      </a>
    </div>
  );
}

export default Logo;
