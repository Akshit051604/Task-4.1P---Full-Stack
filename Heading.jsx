import React from 'react'


const center = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height:"45px"
}
const Heading = (props) => {
  return (
    <div style={center}>
      <h1>{props.title}</h1>
    </div>
  )
}

export default Heading
