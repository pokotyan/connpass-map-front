import * as React from "react";
import { initialState as hogeState } from "../reducers/hoge";
import { HogeActions } from "../actions/hoge";

interface OwnProps {}

type HogeProps = OwnProps & typeof hogeState & HogeActions;

export const Hoge: React.SFC<HogeProps> = (props: HogeProps) => {
  return (
    <>
      <div className="field">
        <input
          type="text"
          placeholder="name"
          value={props.name}
          onChange={e => props.updateName(e.target.value)}
        />
      </div>
      <div className="field">
        <input
          type="email"
          placeholder="email"
          value={props.email}
          onChange={e => props.updateEmail(e.target.value)}
        />
      </div>
    </>
  );
};
