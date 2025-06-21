import React from 'react'
import { Link } from 'react-router-dom'

const Hooks = () => {
  return (
<div style={{ display: "flex", flexDirection: "column" }}>
        <Link to ='/state'>UseState</Link>
        <Link to ='/effect'>Effect</Link>
    </div>
  )
}

export default Hooks