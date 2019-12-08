import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { Event, getEventsList } from "../../../../domain/connpass";
import * as connpassActions from "../../../../actions/connpass";
import { AppState } from "../../../../reducers";
import styles from "./style.module.scss";
import { Marker, InfoWindow } from "react-google-maps";

const toVisible = ({
  event,
  eventsList,
  dispatch
}: {
  event: Event;
  eventsList: Event[][];
  dispatch: Dispatch<any>;
}) => {
  dispatch(
    connpassActions.setCurrentEventId({
      eventId: event.event_id
    })
  );

  const cursor = eventsList.findIndex(events =>
    events.some(e => e.event_id === event.event_id)
  );

  dispatch(
    connpassActions.setCursor({
      cursor
    })
  );

  dispatch(
    connpassActions.setIsDetailCardVisible({
      eventId: event.event_id
    })
  );
};

const toUnVisible = ({ dispatch }: { dispatch: Dispatch<any> }) => {
  dispatch(
    connpassActions.setCurrentEventId({
      eventId: null
    })
  );
  dispatch(connpassActions.resetIsDetailCardVisible());
};

export default ({ event }: { event: Event }) => {
  const dispatch = useDispatch();
  const events = useSelector((state: AppState) => state.connpass.events);
  const eventsList = getEventsList(events);

  const handleClick = () => {
    if (!event.is_visible) {
      return toVisible({
        event,
        eventsList,
        dispatch
      });
    }
  };

  return (
    <div id={`${event.event_id}`} onClick={() => handleClick()}>
      <Marker
        key={event.event_id}
        position={{
          lat: parseFloat(event.lat),
          lng: parseFloat(event.lon)
        }}
        onClick={() => handleClick()}
      >
        {event.is_visible ? (
          <InfoWindow
            key={event.event_id}
            onCloseClick={() => {
              toUnVisible({
                dispatch
              });
            }}
            options={{
              maxWidth: 300
            }}
          >
            <div className={styles.card}>
              <div className={styles.title}>{event.title}</div>
              <div
                dangerouslySetInnerHTML={{
                  __html: event.description
                }}
              />
            </div>
          </InfoWindow>
        ) : null}
      </Marker>
    </div>
  );
};
