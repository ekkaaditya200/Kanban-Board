import React, { useState } from 'react';
import { X } from "react-feather";
import './Editable.css'

const Editable = (props) => {
  const [inputValue, setinputValue] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  return (
    <div className='editable'>

      {showEdit ? (

        <form className={`editable_edit ${props.editClass || ""}`}
          onSubmit={(e) => {
            e.preventDefault()
            if (props.onSubmit) props.onSubmit(inputValue)
            setShowEdit(false);
            setinputValue("");
          }}>

          <input
            type='text'
            autoFocus
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
            placeholder={props.placeholder || "Enter Item"}
          ></input>

          <div className='editable_edit_footer'>
            <button type="submit">{props.buttonText || "Add"}</button>
            <X onClick={() => setShowEdit(false)} />
          </div>

        </form>
      ) :
        (
          <p className={`editable_display ${props.displayClass || ""}`} onClick={() => setShowEdit(true)}>{props.text || "Add Item"}</p>
        )
      }


    </div>
  )
}

export default Editable
