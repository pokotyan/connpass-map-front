import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DefaultButton } from "office-ui-fabric-react";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
import * as connpassActions from "../../../actions/connpass";
import DatePicker from "./date-picker";
import styles from "./style.module.scss";
import { AppState } from "../../../reducers";
import dayjs from "dayjs";

export default () => {
  const dispatch = useDispatch();
  const connpassState = useSelector((state: AppState) => state.connpass);
  const { events } = connpassState;
  useEffect(() => {
    dispatch(
      connpassActions.setDate({
        date: dayjs().format("YYYYMMDD")
      })
    );

    dispatch(connpassActions.search());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.header}>
      <SearchBox
        placeholder="キーワード、住所"
        onSearch={() => dispatch(connpassActions.search())}
        onChange={(e?: React.ChangeEvent<HTMLInputElement>) => {
          if (!e) {
            return;
          }
          dispatch(
            connpassActions.setKeyword({
              keyword: e.target.value
            })
          );
        }}
      />
      <DatePicker />
      <div className={styles.search}>
        <DefaultButton
          text="検索"
          onClick={() => dispatch(connpassActions.search())}
        />
      </div>
      {events.length ? (
        <div className={styles.result}>{events.length}件ヒットしました</div>
      ) : null}
    </div>
  );
};
