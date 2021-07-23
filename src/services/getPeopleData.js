import { HTTPS,SWAPI_ROOT, SWAPI_PEOPLE,
  URL_IMG_PERSON, GUIDE_IMG_EXTENTION 
  } from "@constants/api"

const getId = (url, category) => {
  const id = url
    .replace(HTTPS+SWAPI_ROOT+category, '')
    .replace(/\//g, '')
  return id
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE )
export const getPeopleImg = (id) => `${URL_IMG_PERSON}${id}${GUIDE_IMG_EXTENTION}`

export const getPeoplePageId = url => +url.charAt(url.length - 1)