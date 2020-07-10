import * as types from "./constants"
export const get_pets_list = () => ({ type: types.GET_PETS_LIST })
export const get_pets_listSucceeded = response => ({
  type: types.GET_PETS_LIST_SUCCEEDED,
  response
})
export const get_pets_listFailed = error => ({
  type: types.GET_PETS_LIST_FAILED,
  error
})
