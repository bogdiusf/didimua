import { useEffect } from 'react'

const useIntersectionObserverAnimation = (setIsElementVisibleCallback, refs, threshold) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => setIsElementVisibleCallback(entry.isIntersecting)),
      {
        threshold: threshold
      }
    )
    refs.forEach(ref => observer.observe(ref.current))

  }, [])
}

export { useIntersectionObserverAnimation }