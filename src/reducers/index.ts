import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import connpass, { initialState as connpassState } from "./connpass";
import ui, { initialState as uiState } from "./ui";

export type AppState = {
  router: any;
  connpass: typeof connpassState;
  ui: typeof uiState;
};

export const createRootReducer = (history: History) =>
  combineReducers<AppState>({
    router: connectRouter(history),
    connpass,
    ui
  });
