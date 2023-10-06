import React, { useState } from 'react'
import './Board.css'
import Card from '../Card/Card'
import { MoreHorizontal } from 'react-feather'
import Editable from '../Editable/Editable';
import Dropdown from '../Dropdown/Dropdown';

const Board = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleClose = () => {
    setShowDropdown(false);
  }

  return (
    <div className='board'>
      <div className='board_top'>
        <p className='board_top_title'>{props.board?.title}<span>{`${props.board?.cards?.length}`}</span></p>
        <div className='board_top_more' onClick={() => setShowDropdown(!showDropdown)}>
          <MoreHorizontal />
          {
            showDropdown &&
            <Dropdown onClose={handleClose}>
              <div className='board_dropdown'>
                <p onClick={() => props.removeBoard(props.board?.id)}>Delete Board</p>
              </div>
            </Dropdown>
          }
        </div>
      </div>
      <div className='board_cards custom-scroll'>
        {
          props.board?.cards?.map((item) => (
            <Card
              key={item.id}
              card={item}
              removeCard={props.removeCard}
              boardId={props.board?.id}
              handleDragEnd={props.handleDragEnd}
              handleDragEnter={props.handleDragEnter}
            />
          ))
        }
        <Editable
          displayClass="board_cards_add"
          text="Add Card"
          placeholder="Enter Card Title"
          onSubmit={(value) => props.addCard(value, props.board?.id)}
        />
      </div>
    </div>
  )
}
export default Board
