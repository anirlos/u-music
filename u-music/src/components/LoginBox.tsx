import React, { ReactNode } from "react";

interface LoginBoxProps {
  children?: ReactNode;
}

const LoginBox: React.FC<LoginBoxProps> = ({ children }) => {
  return <div className="login-box">{children}</div>;
};

export default LoginBox;
