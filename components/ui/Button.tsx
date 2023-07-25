import React from 'react';

const Button = props => {
  const { children, textColor } = props;
  return <div className={`text-[${textColor}] flex`}>{children}</div>;
};

export default Button;
