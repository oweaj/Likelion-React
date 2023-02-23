import classes from "./A11yHidden.module.css";

export const A11yHidden = ({
  as: Component = "span",
  focusable = false,
  className = "",
  ...restProps // 나머지 매개변수: { id, title, 'data-myName', children }
}) => {
  // classes.srOnly를 className에 넣으면 className의 값이 안보여짐 그래서 합성
  // 변수(문자 값) + ' ' + 변수(문자 값)
  // `${개발자의 클래스이름} ${사용자의 클래스이름}`
  const combinedClassNames = `${classes.srOnly} ${className}`.trim();
  return (
    <Component
      className={combinedClassNames}
      {...restProps} // 전개 구문: { className, id, title, 'data-myName', children }
    />
  );
};
// props (외부에서 전달되는 함수의 인자 집합)
// 함수 내부에서는 기본 값 설정
// A11yHidden.defaultProps = {
//   as: 'span',
// };
