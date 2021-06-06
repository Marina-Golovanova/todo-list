import React from "react";
import "./input-deal.scss";
import plus from "./assets/plus-60.png";
import done from "./assets/done.png";
import remove from "./assets/remove.png";

type InputProps = {
  type: "plus" | "done" | "inprogress";
  text?: string;
  isClearNeededOnEnter?: boolean;
  onClick: (value: string) => void;
  onRemove?: (value: string) => void;
  onDone?: (value: string) => void;
  onUpdate?: (value: string) => void;
};

export const InputDeal: React.FC<InputProps> = (props) => {
  const [value, setValue] = React.useState(props.text || "");

  const onChangeValue = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setValue(target.value);
  };

  const onClick = () => {
    props.onClick(value);
    if (props.isClearNeededOnEnter) {
      setValue("");
    }
  };

  const onDone = () => {
    if (props.onDone && props.text) {
      props.onDone(props.text);
    }
  };

  const removeItem = () => {
    if (props.text) {
      props.onRemove?.(props.text);
    }
  };

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onClick();
      onUpdate();

      const target = e.target as HTMLInputElement;
      target.blur();
    }
  };

  const onUpdate = () => {
    if (props.onUpdate) {
      props.onUpdate(value);
    }
  };

  return (
    <div className="input">
      <div className="input__control" onClick={onDone} onKeyUp={onClick}>
        {props.type === "plus" && (
          <img className="input__img" src={plus} alt="plus" onClick={onClick} />
        )}
        {props.type === "done" && (
          <img className="input__img" src={done} alt="done" onClick={onDone} />
        )}
      </div>
      {props.type !== "done" && (
        <input
          className="input__item"
          type="text"
          placeholder="To do"
          onChange={onChangeValue}
          value={value}
          onKeyPress={onKeyPress}
          onBlur={onUpdate}
        />
      )}
      {props.type === "done" && (
        <input
          className="input__item input__item--done"
          type="text"
          placeholder="To do"
          onChange={onChangeValue}
          value={props.text}
          onBlur={onUpdate}
        />
      )}
      {props.type !== "plus" && (
        <div className="input__control">
          <img
            className="input__img"
            src={remove}
            alt="close"
            onClick={removeItem}
          ></img>
        </div>
      )}
    </div>
  );
};
