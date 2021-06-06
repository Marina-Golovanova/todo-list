import "./todo.scss";
import React from "react";
import { InputDeal } from "../input-deal/Input-deal";

type TodoContainerProps = {
  onAddNew: (value: string) => void;
};

export const TodoContainer: React.FC<TodoContainerProps> = (props) => {
  return (
    <div className="todo-container">
      <InputDeal
        type="plus"
        onClick={props.onAddNew}
        isClearNeededOnEnter={true}
      />
    </div>
  );
};
