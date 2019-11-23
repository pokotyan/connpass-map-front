import { reducerWithInitialState } from "typescript-fsa-reducers";
import produce from "immer";
import * as connpassActions from "../actions/connpass";
import { Event } from "../domain/connpass";

interface InitialState {
  search: {
    keyword: string;
    date: string;
  };
  events: Event[];
  currentModalEventId: null | number;
  cursor: number;
  isMonochrome: boolean;
}

export const initialState: InitialState = {
  search: {
    keyword: "",
    date: ""
  },
  events: [],
  currentModalEventId: null,
  cursor: 0,
  isMonochrome: false
};

export default reducerWithInitialState(initialState)
  .case(connpassActions.setKeyword, (state, { keyword }) => {
    return produce(state, draftState => {
      draftState.search.keyword = keyword;
    });
  })
  .case(connpassActions.setDate, (state, { date }) => {
    return produce(state, draftState => {
      draftState.search.date = date;
    });
  })
  .case(connpassActions.setEvents, (state, { events }) => {
    return produce(state, draftState => {
      draftState.events = events;
    });
  })
  .case(connpassActions.setCurrentEventId, (state, { eventId }) => {
    return produce(state, draftState => {
      draftState.currentModalEventId = eventId;
    });
  })
  .case(connpassActions.setCursor, (state, { cursor }) => {
    return produce(state, draftState => {
      draftState.cursor = cursor;
    });
  })
  .case(connpassActions.setIsMonochrome, (state, { isMonochrome }) => {
    return produce(state, draftState => {
      draftState.isMonochrome = isMonochrome;
    });
  });
