import { useRef, useEffect } from 'react'

const useRender = () => {
  const renders = useRef(0)
  
  useEffect(() => {
    renders.current += 1
  })

  return [renders.current]
}

export default useRender
