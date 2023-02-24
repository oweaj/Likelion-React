/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import classes from "./A11yHidden.module.scss";
// import { bool, string } from "prop-types";

/* Higher-order Component ------------------------------------------------------ */

export const A11yHidden = forwardRef(function A11yHidden(
  { as: Component = "span", focusable = false, className = "", ...restProps },
  ref
) {
  const combinedClassNames = `${classes.A11yHidden} ${focusable ? classes.focusable : ""} ${className}`.trim();

  return <Component ref={ref} className={combinedClassNames} {...restProps} />;
});

/* Props -------------------------------------------------------------------- */

// 바로 props에 default값 지정해서 아래와  위 import 주석처리 함

// A11yHidden.defaultProps = {
//   as: "span",
//   focusable: false,
//   className: "",
// };

// A11yHidden.propTypes = {
//   as: string,
//   focusable: bool,
//   className: string,
// };

// return A11yHidden;
