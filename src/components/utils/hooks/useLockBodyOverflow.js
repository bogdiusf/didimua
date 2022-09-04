import { useEffect } from 'react'

const useLockBodyOverflow = (isSidebarToggled) => {
  useEffect(() => {
    if (isSidebarToggled) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isSidebarToggled])
}

export { useLockBodyOverflow }