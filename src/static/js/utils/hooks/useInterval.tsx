import { useRef, useEffect } from 'react'


const useInterval = (callback: () => void , delay: number | null) => {
    const savedCallback = useRef<() => void | null>(null!)
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback])
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current()
      }
      if (delay !== null) {
        let id = setInterval(tick, delay)
        return () => clearInterval(id)
      }else {
        return
      }
    }, [delay])
}

export default useInterval