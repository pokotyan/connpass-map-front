import _ from "lodash";

export type Event = {
  event_url: string;
  event_type: string;
  owner_nickname: string;
  series: {
    url: string;
    id: number;
    title: number;
  };
  updated_at: string;
  started_at: string;
  ended_at: string;
  hash_tag: string;
  title: string;
  event_id: number;
  lat: string;
  lon: string;
  waiting: number;
  limit: number;
  owner_id: number;
  owner_display_name: string;
  description: string;
  address: string;
  catch: string;
  accepted: number;
  place: string;
  isOpen?: boolean;
};

export const getEventsList = (events: Event[]) => {
  const PAGENATE_EVENTS_COUNT = 10;
  const eventsList = _.chunk(events, PAGENATE_EVENTS_COUNT);

  return eventsList;
};
