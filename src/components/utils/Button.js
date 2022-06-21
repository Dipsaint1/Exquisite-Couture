import React from 'react';
import "../utils/Button.css"

function Button({children, type, onClick, buttonStyle, buttonSize}) {
  const STYLES = [" btn--primary", "btn-outline"];
  const SIZES = ['btn--medium', 'btn--large'];

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZE[0];



  return (
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        type={type}
        onClick={onClick}
        >
        {children}
      </button>
    )
}

export default Button