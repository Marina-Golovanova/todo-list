import React from "react";
import { Deal } from "../../types";
import "./styles.scss";
import { Header } from "../header/Header";
import { TodoContainer } from "../todo/todo";
import { ListDeal } from "../list-deal/list-deal";
import { Button } from "../button/button";

const buttons = ["all", "active", "completed"];

export const App = () => {
  const [dealList, setDealList] = React.useState<Deal[]>([]);

  const [doneList, setDoneList] = React.useState<Deal[]>([]);

  const [activeButton, setActiveButton] = React.useState("all");

  const remove = (value: Deal) => {
    setDealList(dealList.filter((it) => it.id !== value.id));
  };

  const onDone = (value: Deal) => {
    if (doneList.includes(value)) {
      setDoneList(doneList.filter((it) => it.id !== value.id));
    } else {
      setDoneList(doneList.concat(value));
    }
  };

  const onUpdate = (deal: Deal) => {
    setDealList(dealList.map((it) => (it.id === deal.id ? deal : it)));
    setDoneList(doneList.map((it) => (it.id === deal.id ? deal : it)));
  };

  const filteredList =
    activeButton === "all"
      ? dealList
      : activeButton === "completed"
      ? doneList
      : dealList.filter((deal) => !doneList.includes(deal));

  return (
    <>
      <Header />
      <TodoContainer
        onAddNew={(text) =>
          setDealList(dealList.concat([{ id: Date.now(), text }]))
        }
      />
      <ListDeal
        dealList={filteredList}
        onRemove={remove}
        doneList={doneList}
        onDone={onDone}
        onUpdate={onUpdate}
      />
      {dealList.length && (
        <div className="button-controls">
          {buttons.map((it) => (
            <Button
              key={it}
              text={it}
              onClick={() => setActiveButton(it)}
              isActive={it === activeButton}
            />
          ))}
        </div>
      )}
    </>
  );
};
