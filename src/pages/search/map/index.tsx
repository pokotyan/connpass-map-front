import * as React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { Event } from "../../../domain/connpass";
import MyMarker from "./marker";

const SHIBUYA = {
  lat: 35.658034,
  lng: 139.701636
};

const MapContainer = compose(
  withProps({
    googleMapURL: process.env.REACT_APP_GOOGLE_MAP_URL,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props: any) => (
  <GoogleMap defaultZoom={11} defaultCenter={SHIBUYA}>
    {(props.events as Event[]).map(event => (
      <MyMarker key={event.event_id} event={event} />
    ))}
  </GoogleMap>
));

export default MapContainer as any;
