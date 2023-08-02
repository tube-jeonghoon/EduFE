import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  textColor?: string;
  bgColor?: string;
}

const Button: React.FC<ButtonProps> = props => {
  const { children, textColor, bgColor } = props;
  return (
    <div className={`btn border-none ${textColor} ${bgColor} flex`}>
      {children}
    </div>
  );
};

export default Button;
