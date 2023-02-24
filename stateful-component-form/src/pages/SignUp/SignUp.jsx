import { useState } from "react";
import { BaseLayout, FormInput, Button } from "@/components";
import classes from "./SignUp.module.scss";

/* Intialization ------------------------------------------------------------ */

// const initialFormState = {
//   name: "",
//   email: "",
//   password: "",
//   passwordConfirm: "",
// };

/* Component ---------------------------------------------------------------- */

// 쓸데없는 렌더링을 막기위해 아래처럼 각각의 상태를 따로 관리(그래서 위에 객체 주석처리)
export default function SignUp() {
  // const [formState, setFormState] = useState(initialFormState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    console.log("reset");
    // setFormState(initialFormState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("회원가입 시도 → Firebase Authentication");
  };

  return (
    <BaseLayout className={classes.SignUp}>
      <h2>회원가입 페이지</h2>
      <form className={classes.form} onSubmit={handleSubmit} onReset={handleReset}>
        <FormInput label="이름" value={name} onChange={(e) => setName(e.target.value)} />

        <FormInput type="email" label="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />

        <FormInput type="password" label="패스워드" value={password} onChange={(e) => setPassword(e.target.value)} />

        <FormInput
          type="password"
          label="패스워드 확인"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />

        <div className={classes.group}>
          <Button type="submit">회원가입</Button>
          <Button secondary type="reset">
            초기화
          </Button>
        </div>
      </form>
    </BaseLayout>
  );
}
