import actionCreatorFactory, { Action } from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export interface UiActions {
  showLoading: () => Action<{}>;
  hideLoading: () => Action<{}>;
}

export const SHOW_LOADING = "SHOW_LOADING";
export const showLoading = actionCreator<{}>(SHOW_LOADING);

export const HIDE_LOADING = "HIDE_LOADING";
export const hideLoading = actionCreator<{}>(HIDE_LOADING);
