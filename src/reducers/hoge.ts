import { reducerWithInitialState } from "typescript-fsa-reducers";
import * as hogeActions from "../actions/hoge";

export const initialState = {
  name: "",
  email: ""
};

export default reducerWithInitialState(initialState)
  .case(hogeActions.updateName, (state, name) => {
    return { ...state, ...{ name } };
  })
  .case(hogeActions.updateEmail, (state, email) => {
    return { ...state, ...{ email } };
  });
