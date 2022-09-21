import { useEffect } from 'react'

const useLockNavScroll = (setElement) => {
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar)
    return () => window.removeEventListener('scroll', stickNavbar)
  }, [])

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY
      windowHeight > 50 ? setElement(true) : setElement(false)
    }
  }
}

export { useLockNavScroll }
