import { all, fork, take } from "redux-saga/effects";
import * as hogeActions from "../actions/hoge";

function* updateName() {
  while (true) {
    const { payload } = yield take(hogeActions.UPDATE_NAME);

    console.log(payload);
  }
}

function* rootSaga() {
  yield all([fork(updateName)]);
}

export default rootSaga;
