import { useOutletContext } from "react-router-dom";
import { Note } from "../types/global.types";

export function useNote() {
  return useOutletContext<Note>();
}
