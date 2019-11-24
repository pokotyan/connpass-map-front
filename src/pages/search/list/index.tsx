import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import * as connpassActions from "../../../actions/connpass";
import dayjs from "dayjs";
import {
  IDetailsListStyles,
  IDetailsListStyleProps,
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  IColumn
} from "office-ui-fabric-react/lib/DetailsList";
import { IStyle } from "office-ui-fabric-react";
import {
  IStyleFunctionOrObject,
  classNamesFunction
} from "office-ui-fabric-react/lib/Utilities";
import { TooltipHost } from "office-ui-fabric-react/lib/Tooltip";
import Icon from "../../../components/icon";
import Pagenate from "./pagenate";
import { AppState } from "../../../reducers";
import { Event, getEventsList } from "../../../domain/connpass";
import styles from "./style.module.scss";
import { useWindowDimensions } from "../../../utils/hooks";

interface IStyles {
  root: IStyle;
  subComponentStyles: {
    detailList: IStyleFunctionOrObject<
      IDetailsListStyleProps,
      IDetailsListStyles
    >;
  };
}

const getStyles = (): Partial<IStyles> => ({
  subComponentStyles: {
    detailList: {
      headerWrapper: {
        marginTop: -16
      }
    }
  }
});

const clickMarker = (eventId: null | number, dispatch: Dispatch<any>) => {
  if (!eventId) {
    return;
  }

  dispatch(
    connpassActions.setCurrentEventId({
      eventId
    })
  );

  const marker = document.getElementById(`${eventId}`);

  marker!.click();
};

const getColumns = ({
  eventId,
  dispatch,
  width
}: {
  eventId: null | number;
  dispatch: Dispatch<any>;
  width: number;
}): IColumn[] => [
  {
    key: "Title",
    name: "Title",
    minWidth: 10,
    maxWidth: width < 740 ? 100 : 300,
    isRowHeader: true,
    isResizable: true,
    data: "string",
    onRender: (event: Event) => {
      return (
        <TooltipHost
          content={event.title}
          calloutProps={{ gapSpace: 0 }}
          styles={{ root: { display: "inline-block" } }}
        >
          <span
            className={`${styles.cursor} ${
              eventId === event.event_id ? styles.active : ""
            }`}
            onClick={() => clickMarker(event.event_id, dispatch)}
          >
            {event.title}
          </span>
        </TooltipHost>
      );
    },
    isPadded: true
  },
  {
    key: "日付",
    name: "日付",
    minWidth: 10,
    maxWidth: 100,
    isResizable: true,
    isCollapsible: true,
    data: "string",
    onRender: (event: Event) => {
      const date = dayjs(event.started_at).format("YYYY-MM-DD HH:mm");

      return (
        <TooltipHost
          content={`${date} ~`}
          calloutProps={{ gapSpace: 0 }}
          styles={{ root: { display: "inline-block" } }}
        >
          <span
            className={`${styles.cursor} ${
              eventId === event.event_id ? styles.active : ""
            }`}
            onClick={() => clickMarker(event.event_id, dispatch)}
          >
            {date} ~
          </span>
        </TooltipHost>
      );
    }
  },
  {
    key: "場所",
    name: "場所",
    minWidth: 20,
    maxWidth: 200,
    isResizable: true,
    isCollapsible: true,
    data: "string",
    onRender: (event: Event) => {
      return (
        <TooltipHost
          content={event.address}
          calloutProps={{ gapSpace: 0 }}
          styles={{ root: { display: "inline-block" } }}
        >
          <span
            className={`${styles.cursor} ${
              eventId === event.event_id ? styles.active : ""
            }`}
            onClick={() => clickMarker(event.event_id, dispatch)}
          >
            {event.address}
          </span>
        </TooltipHost>
      );
    }
  },
  {
    key: "参加者",
    name: "参加者",
    minWidth: 50,
    maxWidth: 50,
    isResizable: true,
    isCollapsible: true,
    data: "string",
    onRender: (event: Event) => {
      return (
        <TooltipHost
          content={`${event.accepted}/${event.limit}`}
          calloutProps={{ gapSpace: 0 }}
          styles={{ root: { display: "inline-block" } }}
        >
          <span
            className={`${styles.cursor} ${
              eventId === event.event_id ? styles.active : ""
            }`}
            onClick={() => clickMarker(event.event_id, dispatch)}
          >
            {`${event.accepted}/${event.limit}`}
          </span>
        </TooltipHost>
      );
    }
  },
  {
    key: "詳細",
    name: "詳細",
    minWidth: 30,
    maxWidth: 30,
    isResizable: true,
    isCollapsible: true,
    data: "string",
    onRender: (event: Event) => {
      return (
        <a
          style={{ outline: 0 }}
          href={event.event_url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon iconName="OpenInNewTab" color="#69f0ae" />
        </a>
      );
    }
  }
];

export default () => {
  const getClassNames = classNamesFunction<{}, IStyles>();
  const classNames = getClassNames(getStyles);

  const connpassState = useSelector((state: AppState) => state.connpass);
  const { currentModalEventId, cursor } = connpassState;

  const { width } = useWindowDimensions();

  const dispatch = useDispatch();
  const columns = getColumns({ eventId: currentModalEventId, dispatch, width });
  const events = useSelector((state: AppState) => state.connpass.events);
  const eventsList = getEventsList(events);

  return (
    <>
      <DetailsList
        styles={classNames.subComponentStyles.detailList}
        items={eventsList[cursor]}
        columns={columns}
        selectionMode={SelectionMode.none}
        setKey="none"
        layoutMode={DetailsListLayoutMode.justified}
        isHeaderVisible={true}
      />
      <Pagenate cursor={cursor} eventsList={eventsList} />
    </>
  );
};
