import React from 'react'

const useInterval = (callback: () => void, delay: number) => {
  const intervalRef = React.useRef<number | null>(null)
  const savedCallback = React.useRef(callback)

  React.useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  React.useEffect(() => {
    const tick = () => savedCallback.current()

    intervalRef.current = window.setInterval(tick, delay)

    return () => window.clearInterval(intervalRef.current ?? undefined)
  }, [delay])
  return intervalRef
}

export default useInterval
