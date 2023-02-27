import { Button } from "./Button";

// 스토리북 실행하면 옆 사이드 lecture카테고리 지정 후 button탭 생성
export default {
  title: "lecture/button",
  component: Button,
  tags: ["autodocs"],
  args: { ...Button.defaultProps, children: "회원가입" },
};

export const Primary = {
  args: {},
};

export const Secondary = {
  args: {
    secondary: true,
  },
};

export const PrimaryDisabled = {
  args: {
    disabled: true,
  },
};

export const SecondaryDisabled = {
  args: {
    disabled: true,
    ...Secondary.args,
  },
};
