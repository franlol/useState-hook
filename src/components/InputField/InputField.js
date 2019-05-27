import React from 'react';

const InputField = props => {
  const { handler, value, name, type, children } = props;

  return (
    <>
      <p>{children}<input name={name} type={type} value={value} onChange={(e) => handler(e)} /></p>
    </>
  );
};

export default InputField;