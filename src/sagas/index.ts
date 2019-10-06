import { all, fork } from "redux-saga/effects";
import hoge from "./hoge";

export function* rootSaga() {
  yield all([fork(hoge)]);
}
