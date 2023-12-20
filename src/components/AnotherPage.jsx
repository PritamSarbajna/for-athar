import React, { useState } from 'react'

const AnotherPage = () => {
    const [name, setName] = useState(0);
    const [email, setEmail] = useState(0);
    const [result, setResult] = useState(0);


    const handleSubmit = () => {
        setResult(Number(name) - 0.75);
    }

  return (
    <>
        <input type="number" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="submit" onClick={handleSubmit} />

        {(result == 0)? "No INPUT" : result}
    </>
  )
}

export default AnotherPage