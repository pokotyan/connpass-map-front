import * as React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../reducers";
import Header from "./header";
import List from "./list";
import styles from "./style.module.scss";
import Map from "./map";

export default () => {
  const connpassState = useSelector((state: AppState) => state.connpass);
  const { events } = connpassState;

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.mapContainer}>
        <div className={styles.map}>
          <Map events={events} />
        </div>
        {events.length ? (
          <div className={styles.list}>
            <List />
          </div>
        ) : null}
      </div>
    </div>
  );
};
