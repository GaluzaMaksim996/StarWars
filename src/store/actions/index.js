import { ADD_SET_PERSON_TO_FAVORITE, REMOVE_PERSON_TO_FAVORITE } from "../constants/actionTypes"

export const setPersonToFavorite = person => ({
  type: ADD_SET_PERSON_TO_FAVORITE,
  payload: person
})

export const removePersonToFavorite = personId => ({
  type: REMOVE_PERSON_TO_FAVORITE,
  payload: personId
})