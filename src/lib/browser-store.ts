"use client";

export function writeBrowserValue(storage: Storage, key: string, value: string, eventName: string) {
  storage.setItem(key, value);
  window.dispatchEvent(new Event(eventName));
}
