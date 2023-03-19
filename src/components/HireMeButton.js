import React from 'react'

const HireMeButton = ({upwork}) => {

    const style = {
        width: "90%",
        height: '5rem',
        backgroundColor: upwork ? "#13a300" : "white",
        color: upwork ? "white" : "#13a300"
    }

    const action = () => {

    }
  return (
    <button style={style} onClick={action}>
        {`Hire Me on ${upwork ? "Upwork" : "Fiverr"}`}
    </button>
  )
}

export default HireMeButton