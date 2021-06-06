import "./list-deal.scss";
import React from "react";
import { InputDeal } from "../input-deal/Input-deal";
import { Deal } from "../../types";

type ListDealProps = {
  dealList: Deal[];
  doneList: Deal[];
  onRemove: (value: Deal) => void;
  onDone: (value: Deal) => void;
  onUpdate: (value: Deal) => void;
};

export const ListDeal: React.FC<ListDealProps> = (props) => {
  return (
    <div className="list-deal">
      <div className="list-deal__header">My deals</div>
      {props.dealList.map((item) => (
        <InputDeal
          key={item.id}
          type={props.doneList.includes(item) ? "done" : "inprogress"}
          onClick={() => {}}
          text={item.text}
          onRemove={() => props.onRemove(item)}
          onDone={() => props.onDone(item)}
          onUpdate={(value: string) =>
            props.onUpdate({ id: item.id, text: value })
          }
        />
      ))}
    </div>
  );
};
