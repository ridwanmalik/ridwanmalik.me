"use client"

import { useSyncExternalStore } from "react"

// React 19's set-state-in-effect rule rejects the `useEffect(() => setX(true), [])`
// pattern, so both hooks below read their value through useSyncExternalStore: the
// server snapshot is the SSR value and the client snapshot is the real one.

const subscribeNever = () => () => {}

// False while rendering on the server, true once hydrated — portals need this,
// since document does not exist during SSR.
export const useIsMounted = () =>
  useSyncExternalStore(
    subscribeNever,
    () => true,
    () => false,
  )

const HOVER_QUERY = "(hover: hover)"

const subscribeHover = (onChange: () => void) => {
  const query = window.matchMedia(HOVER_QUERY)
  query.addEventListener("change", onChange)
  return () => query.removeEventListener("change", onChange)
}

// True when the device supports real hover (desktop); false on touch screens.
// Assumes hover on the server so the desktop markup renders first.
export const useCanHover = () =>
  useSyncExternalStore(
    subscribeHover,
    () => window.matchMedia(HOVER_QUERY).matches,
    () => true,
  )
