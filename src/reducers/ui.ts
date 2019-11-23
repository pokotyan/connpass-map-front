import { reducerWithInitialState } from "typescript-fsa-reducers";
import * as uiActions from "../actions/ui";

export const initialState = {
  isLoading: false
};

export default reducerWithInitialState(initialState)
  .case(uiActions.showLoading, state => {
    return { ...state, ...{ isLoading: true } };
  })
  .case(uiActions.hideLoading, state => {
    return { ...state, ...{ isLoading: false } };
  });
