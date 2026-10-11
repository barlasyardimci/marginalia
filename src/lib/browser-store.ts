"use client";

import { useSyncExternalStore } from "react";

const SERVER = "__marginalia_server__";
const ERROR = "__marginalia_error__";

function subscribe(eventName: string, onStoreChange: () => void) {
  const notify = () => onStoreChange();
  window.addEventListener(eventName, notify);
  window.addEventListener("storage", notify);
  return () => {
    window.removeEventListener(eventName, notify);
    window.removeEventListener("storage", notify);
  };
}

export function writeBrowserValue(storage: Storage, key: string, value: string, eventName: string) {
  storage.setItem(key, value);
  window.dispatchEvent(new Event(eventName));
}

export function useBrowserValue(storage: "local" | "session", key: string, eventName: string) {
  return useSyncExternalStore(
    (onStoreChange) => subscribe(eventName, onStoreChange),
    () => {
      try {
        const box = storage === "local" ? window.localStorage : window.sessionStorage;
        return box.getItem(key) ?? "";
      } catch {
        return ERROR;
      }
    },
    () => SERVER,
  );
}

export function isServerSnapshot(value: string) {
  return value === SERVER;
}

export function isErrorSnapshot(value: string) {
  return value === ERROR;
}

const clientSubscribe = () => () => {};

export function useIsClient() {
  return useSyncExternalStore(clientSubscribe, () => true, () => false);
}
