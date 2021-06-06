import "./button.scss";
import React from "react";

type ButtonProps = {
  text: string;
  isActive: boolean;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={
        props.isActive ? "deal-state deal-state--primary" : "deal-state"
      }
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
