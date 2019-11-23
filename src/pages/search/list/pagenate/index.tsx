import * as React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import style from "./style.module.scss";
import { Event } from "../../../../domain/connpass";
import Icon from "../../../../components/icon";
import * as connpassActions from "../../../../actions/connpass";

const prev = ({
  cursor,
  dispatch
}: {
  cursor: number;
  dispatch: Dispatch<any>;
}) => () => {
  const prevCursor = cursor - 1;
  const currentCursor = prevCursor < 0 ? 0 : prevCursor;

  dispatch(
    connpassActions.setCursor({
      cursor: currentCursor
    })
  );
};

const next = ({
  cursor,
  eventsList,
  dispatch
}: {
  cursor: number;
  eventsList: Event[][];
  dispatch: Dispatch<any>;
}) => () => {
  const maxCursor = eventsList.length - 1;
  const nextCursor = cursor + 1;
  const currentCursor = nextCursor >= maxCursor ? maxCursor : nextCursor;

  dispatch(
    connpassActions.setCursor({
      cursor: currentCursor
    })
  );
};

export default ({
  cursor,
  eventsList
}: {
  cursor: number;
  eventsList: Event[][];
}) => {
  const dispatch = useDispatch();

  return (
    <div className={style.pagenate}>
      <div className={style.cursor} onClick={prev({ cursor, dispatch })}>
        <Icon iconName="ChevronLeft" color="#69f0ae" />
      </div>
      {eventsList.map((_, i) => {
        const isActive = i === cursor;

        return (
          <div
            key={i}
            className={`${style.count} ${isActive ? style.active : ""}`}
            onClick={() => {
              dispatch(
                connpassActions.setCursor({
                  cursor: i
                })
              );
            }}
          >
            {i + 1}
          </div>
        );
      })}
      <div
        className={style.cursor}
        onClick={next({ cursor, eventsList, dispatch })}
      >
        <Icon iconName="ChevronRight" color="#69f0ae" />
      </div>
    </div>
  );
};
