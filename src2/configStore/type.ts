import { IntialState } from "./slices/Sample/type"

export type Status = "loading" | "loaded" | "loadingError"

export interface RootState {
  test : IntialState
}