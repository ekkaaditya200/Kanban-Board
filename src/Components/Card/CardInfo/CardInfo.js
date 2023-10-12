import React, { useState } from 'react'
import Modal from '../../Modal/Modal'
import './CardInfo.css'
import { Calendar, Edit, Type, Tag, CheckSquare, Trash } from 'react-feather';
import Editable from '../../Editable/Editable';

const CardInfo = (props) => {
  const colors = [
    "#a8193d",
    "#4fcc25",
    "#1ebffa",
    "#8da377",
    "#9975bd",
    "#cf61a1",
    "#240959",
  ];
  const [activeColor, setActiveColor] = useState("");
  console.log(props);
  return (
    <div>
      <Modal onClose={() => props.onClose()}>

        <div className='cardinfo'>
          {/* Title */}
          <div className='cardinfo_box'>
            <div className='cardinfo_box_title'>
              <Type />
              Title No 1
            </div>
            <div className='cardinfo_box_body'>
              <Editable text={"Title"} placeholder='Enter Title' buttonText="Set Title" />
            </div>
          </div>
          {/* Description */}
          <div className='cardinfo_box'>
            <div className='cardinfo_box_title'>
              <Edit />
              Description
            </div>
            <div className='cardinfo_box_body'>
              <Editable text={"Description"} placeholder='Enter Description' buttonText="Set Description" />
            </div>
          </div>
          {/* Date */}
          <div className='cardinfo_box'>
            <div className='cardinfo_box_title'>
              <Calendar />
              Date
            </div>
            <div className='cardinfo_box_body'>
              <input type='date' />
            </div>
          </div>
          {/* Labels */}
          <div className='cardinfo_box'>
            <div className='cardinfo_box_title'>
              <Tag />
              Labels
            </div>
            <div className='cardinfo_box_colors'>
              {
                colors.map((item, index) =>
                  <li
                    key={index}
                    style={{ backgroundColor: item }}
                    className={item === activeColor ? "active" : ""}
                    onClick={() => setActiveColor(item)}
                  />)
              }
            </div>
            <div className='cardinfo_box_body'>
              <Editable text={"Add Label"}
                placeholder="Add Label" buttonText="Set Label" />
            </div>
          </div>

          <div className='cardinfo_box'>
            <div className='cardinfo_box_title'>
              <CheckSquare />
              Labels
            </div>
            <div className='cardinfo_box_progress_bar'>
              <div className='cardinfo_box_progress' style={{width:"30%"}}></div>
            </div>
            <div className='cardinfo_box_list'>
              <div className='cardinfo_task'>
                <input type='checkbox' />
                <p>Task 1</p>
                <Trash/>
              </div>
              <div className='cardinfo_task'>
                <input type='checkbox' />
                <p>Task 2</p>
                <Trash/>
              </div>
              <div className='cardinfo_task'>
                <input type='checkbox' />
                <p>Task 3</p>
                <Trash/>
              </div>
            </div>
            <div className='cardinfo_box_body'>
              <Editable text={"Add Task"}
                placeholder="Enter Task" buttonText="Add Task" />
            </div>
          </div>

        </div>
      </Modal>
    </div>
  )
}

export default CardInfo
