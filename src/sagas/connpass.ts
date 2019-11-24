import { all, fork, take, put, select, call } from "redux-saga/effects";
import * as connpasssActions from "../actions/connpass";
import * as connpassApi from "../api/connpass";
import { AppState } from "../reducers";
import { Event } from "../domain/connpass";

function* search() {
  while (true) {
    yield take(connpasssActions.SEARCH);

    const search = yield select((state: AppState) => state.connpass.search);
    const res: {
      data: {
        events: Event[];
      };
    } = yield connpassApi.getEvent({
      keyword: search.keyword,
      ymdList: [parseInt(search.date, 10)]
    });

    yield put(
      connpasssActions.setEvents({
        events: res.data.events.map(event => ({ ...event, is_visible: false }))
      })
    );
  }
}

function* _resetIsDetailCardVisible() {
  let events: Event[] = yield select(
    (state: AppState) => state.connpass.events
  );

  events = events.map(event => ({ ...event, is_visible: false }));

  yield put(
    connpasssActions.setEvents({
      events
    })
  );
}

function* resetIsDetailCardVisible() {
  while (true) {
    yield take(connpasssActions.RESET_IS_DETAIL_CARD_IS_VISIBLE);

    yield call(_resetIsDetailCardVisible);
  }
}

function* setIsDetailCardVisible() {
  while (true) {
    const {
      payload: { eventId }
    } = yield take(connpasssActions.SET_IS_DETAIL_CARD_IS_VISIBLE);

    yield call(_resetIsDetailCardVisible);

    let events: Event[] = yield select(
      (state: AppState) => state.connpass.events
    );

    events = events.map(event => {
      if (event.event_id === eventId) {
        return { ...event, is_visible: true };
      }
      return event;
    });

    yield put(
      connpasssActions.setEvents({
        events
      })
    );
  }
}

function* rootSaga() {
  yield all([
    fork(search),
    fork(setIsDetailCardVisible),
    fork(resetIsDetailCardVisible)
  ]);
}

export default rootSaga;
