import { useEffect } from 'react'

const useIntersectionObserverAnimation = (setIsElementVisibleCallback, ref) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setIsElementVisibleCallback(entry.isIntersecting)
      },
      {
        threshold: 0.5
      }
    )
    observer.observe(ref.current)
  }, [])
}

export { useIntersectionObserverAnimation }