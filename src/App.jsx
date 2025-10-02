import React, { useEffect, useState } from 'react'

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://vercel-express-api-psi.vercel.app/")
      .then((response) => response.json())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Error fetching the message", error)
      )
  }, []);
  return (
    <p className='read-the-docs'>
      {message ? message : "Loading message..."}
    </p>
  )
}
