import { useEffect, useRef } from 'react'

export function useInterval (callback: Function, delay?: number | null): void {
  const savedCallback = useRef<Function>(() => {});

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    if (delay !== null && delay !== 0) {
      const interval = setInterval(() => {
        savedCallback.current()
      }, delay || 0)
      return () => { clearInterval(interval) }
    }
    return undefined
  }, [delay])
}
