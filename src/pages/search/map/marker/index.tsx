import * as React from "react";
import { useState } from "react";
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
  dispatch,
  setIsDetailCardVisible
}: {
  event: Event;
  eventsList: Event[][];
  dispatch: Dispatch<any>;
  setIsDetailCardVisible: React.Dispatch<React.SetStateAction<boolean>>;
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

  setIsDetailCardVisible(true);
};

const toUnVisible = ({
  dispatch,
  setIsDetailCardVisible
}: {
  dispatch: Dispatch<any>;
  setIsDetailCardVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  dispatch(
    connpassActions.setCurrentEventId({
      eventId: null
    })
  );
  setIsDetailCardVisible(false);
};

export default ({ event }: { event: Event }) => {
  const dispatch = useDispatch();
  const [isDetailCardVisible, setIsDetailCardVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const events = useSelector((state: AppState) => state.connpass.events);
  const eventsList = getEventsList(events);

  const handleClick = () => {
    setIsOpen(!isOpen);

    if (!isDetailCardVisible) {
      return toVisible({
        event,
        eventsList,
        dispatch,
        setIsDetailCardVisible
      });
    }
    toUnVisible({
      dispatch,
      setIsDetailCardVisible
    });
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
        {isOpen ? (
          <InfoWindow
            key={event.event_id}
            onCloseClick={() => {
              setIsDetailCardVisible(false);
              setIsOpen(false);
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
