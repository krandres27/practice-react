import { useEffect, useState } from "react";

const Debounce = () => {
  const [text, setText] = useState('')
  const [displayMessage, setDisplayMessage] = useState('')

  useEffect(() => {
    const timeOutId = setTimeout(() => setDisplayMessage(text), 500);
    return () => clearTimeout(timeOutId);
  }, [text]);

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>{displayMessage}</p>
    </div>
  )
}

export default Debounce