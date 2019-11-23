import * as React from "react";
import { Provider, useSelector } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { initializeIcons } from "@uifabric/icons";
import { AppState } from "../src/reducers";
import Loading from "../src/components/loading";
import { Header } from "../src/components/header";
import Router from "./router";
import store, { history } from "./store";

initializeIcons();

export default () => {
  const uiState = useSelector((state: AppState) => state.ui);

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Loading isLoading={uiState.isLoading} />
        <Header />
        <Router />
      </ConnectedRouter>
    </Provider>
  );
};
