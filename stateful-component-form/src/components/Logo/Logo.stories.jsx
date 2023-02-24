import { Logo } from "./Logo";

export default {
  title: "Lecture/Logo",
  component: Logo,
  args: Logo.defaultProps,
};

export const Base = {
  args: {},
};

export const Rotation90 = {
  args: {
    rotation: 90,
  },
};
