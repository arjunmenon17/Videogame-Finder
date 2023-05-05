import React, { ReactNode } from "react";
import "./Button.css";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  buttonStyle?: "btn--primary" | "btn--outline";
  buttonSize?: "btn--medium" | "btn--large";
}

function Button({
  children,
  type = "button",
  onClick,
  buttonStyle = "btn--primary",
  buttonSize = "btn--medium",
}: Props) {
  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${buttonStyle} ${buttonSize}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;

// const STYLES = ["btn--primary", "btn--outline"];
// const SIZES = ["btn--medium", "btn--large"];

// export const Button = ({
//   children,
//   type,
//   onClick,
//   buttonStyle,
//   buttonSize,
// }) => {
//   const checkButtonStyle = STYLES.includes(buttonStyle)
//     ? buttonStyle
//     : STYLES[0];

//   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

//   return (
//     <Link to="/sign-up" className="btn-mobile">
//       <button
//         className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//         onClick={onClick}
//         type={type}
//       >
//         {children}
//       </button>
//     </Link>
//   );
// };
