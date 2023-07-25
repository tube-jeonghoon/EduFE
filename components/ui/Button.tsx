import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = props => {
  const { children, textColor } = props;
  return <div className={`text-[${textColor}] flex`}>{children}</div>;
};

export default Button;
