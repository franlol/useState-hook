import React from 'react';

const InputField = props => {
  const { handler, value, name, type, children } = props;

  return (
    <p>
      <label>{children}</label><input name={name} type={type} value={value} onChange={(event) => handler(event)} />
    </p>
  );
};

export default InputField;