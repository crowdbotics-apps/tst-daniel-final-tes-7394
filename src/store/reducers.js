import * as types from "./constants"

const initialState = {}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_PETS_LIST:
    case types.GET_PETS_LIST_SUCCEEDED:
    case types.GET_PETS_LIST_FAILED:
    default:
      return state
  }
}
