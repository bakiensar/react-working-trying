import React, { useState } from 'react'
import '../style/button.css'

const Button = (props) => {
  const [tiklandi, setTiklandi] = useState(false)
  return (
    <div>
      {props.type === 'primary' && (
        <button
          className={props.type}
          onClick={() => {
            setTiklandi(true)
          }}
        >
          {tiklandi === true ? 'tiklandi' : props.buttonText}
        </button>
      )}
      {props.type === 'primary' && (
        <button className="primary" onClick={props.basilinca}>
          {props.buttonText}
        </button>
      )}
    </div>
  )
}

export default Button
