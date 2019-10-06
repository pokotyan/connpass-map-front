import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import useReactRouter from "use-react-router";
import * as hogeActions from "../../actions/hoge";
import { Hoge } from "../../components/hoge";
import { AppState } from "../../reducers";

export default () => {
  const dispatch = useDispatch();
  const updateName = React.useCallback(
    (v: string) => dispatch(hogeActions.updateName(v)),
    [dispatch]
  );
  const updateEmail = React.useCallback(
    (v: string) => dispatch(hogeActions.updateEmail(v)),
    [dispatch]
  );
  const hogeState = useSelector((state: AppState) => state.hoge);
  const { history } = useReactRouter();

  return (
    <>
      <Hoge {...hogeState} updateName={updateName} updateEmail={updateEmail} />
      <button onClick={() => history.push("/")}>topへ戻る</button>
    </>
  );
};
