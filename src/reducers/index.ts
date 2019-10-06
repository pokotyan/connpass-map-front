import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import hoge, { initialState as hogeState } from "./hoge";

export type AppState = {
  router: any;
  hoge: typeof hogeState;
};

export const createRootReducer = (history: History) =>
  combineReducers<AppState>({
    router: connectRouter(history),
    hoge
  });
