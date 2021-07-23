import { useLocation } from "react-router"

export const useQueryparams = () => {
  return new URLSearchParams( useLocation().search )
}
