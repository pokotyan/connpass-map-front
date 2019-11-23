import { all, fork } from "redux-saga/effects";
import connpass from "./connpass";

export function* rootSaga() {
  yield all([fork(connpass)]);
}
