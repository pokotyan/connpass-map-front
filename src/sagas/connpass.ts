import { all, fork, take, put, select } from "redux-saga/effects";
import * as connpasssActions from "../actions/connpass";
import * as connpassApi from "../api/connpass";
import { AppState } from "../reducers";

function* search() {
  while (true) {
    yield take(connpasssActions.SEARCH);

    const search = yield select((state: AppState) => state.connpass.search);
    const res = yield connpassApi.getEvent({
      keyword: search.keyword,
      ymdList: [parseInt(search.date, 10)]
    });

    yield put(
      connpasssActions.setEvents({
        events: res.data.events
      })
    );
  }
}

function* rootSaga() {
  yield all([fork(search)]);
}

export default rootSaga;
