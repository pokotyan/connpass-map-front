import actionCreatorFactory from "typescript-fsa";
import { Event } from "../domain/connpass";

const actionCreator = actionCreatorFactory();

export const SET_KEYWORD = "SET_KEYWORD";
export const setKeyword = actionCreator<{
  keyword: string;
}>(SET_KEYWORD);

export const SET_DATE = "SET_DATE";
export const setDate = actionCreator<{
  date: string;
}>(SET_DATE);

export const SEARCH = "SEARCH";
export const search = actionCreator(SEARCH);

export const SET_EVENTS = "SET_EVENTS";
export const setEvents = actionCreator<{ events: Event[] }>(SET_EVENTS);

export const SET_CURRENT_EVENT_ID = "SET_CURRENT_EVENT_ID";
export const setCurrentEventId = actionCreator<{ eventId: null | number }>(
  SET_CURRENT_EVENT_ID
);

export const SET_CURSOR = "SET_CURSOR";
export const setCursor = actionCreator<{ cursor: number }>(SET_CURSOR);

export const SET_IS_MONOCHROME = "SET_IS_MONOCHROME";
export const setIsMonochrome = actionCreator<{ isMonochrome: boolean }>(
  SET_IS_MONOCHROME
);
