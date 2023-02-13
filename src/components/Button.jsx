import React from 'react';

const Button = (props) => {
  const { text, onmousemove, onclick, classes, position } = props;
  return (
    <button
      style={position}
      onClick={onclick}
      onMouseMove={onmousemove}
      className={classes}
    >
      {text}
    </button>
  );
};

export default Button;
