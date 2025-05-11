import { useContext } from "react";
import { RootContext } from "../providers/Root";

export const useRootContext = () => {
  const context = useContext(RootContext);
  if (!context) {
    throw new Error("useRootContext must be used within a RootProvider");
  }
  return context;
}