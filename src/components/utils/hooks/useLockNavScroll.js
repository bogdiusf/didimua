import { useEffect } from 'react'

const useLockNavScroll = (setIsNavSticky) => {
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar)
    return () => window.removeEventListener('scroll', stickNavbar)
  }, [])

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY
      // window height changed for the demo
      windowHeight > 50 ? setIsNavSticky(true) : setIsNavSticky(false)
    }
  }
}

export { useLockNavScroll }