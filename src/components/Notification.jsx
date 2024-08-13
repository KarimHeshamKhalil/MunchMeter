import React, { useEffect, useState } from 'react'

export default function Notification({ message, callback }) {
  const [isShown, setIsShown] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      callback()
      setIsShown(false)
    } ,2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isShown && (
        <div className={`fixed top-4 left-[35%] right-[35%] text-lg px-6 py-3 rounded-md text-white bg-green2 z-[1200]`}>
          {message}!
        </div>
        )
      }
    </>
  )
}
