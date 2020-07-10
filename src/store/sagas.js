import { put, call, all, spawn } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* get_pets_listWorker(action) {
  try {
    const result = yield call(apiService.get_pets_list, action)
    yield put(actions.get_pets_listSucceeded(result))
  } catch (err) {
    yield put(actions.get_pets_listFailed(err))
  }
}
function* get_pets_listWatcher() {
  yield takeEvery(types.GET_PETS_LIST, get_pets_listWorker)
}
export default function* rootSaga() {
  const sagas = [get_pets_listWatcher]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
