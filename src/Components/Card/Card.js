import React, { useState } from 'react'
import './Card.css'
import Chip from '../Chip/Chip';
import { Clock, CheckSquare, MoreHorizontal } from 'react-feather'
import Dropdown from '../Dropdown/Dropdown';
import CardInfo from './CardInfo/CardInfo';

const Card = (props) => {
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    return (
        <div className='card'
            draggable
            onDragEnd={() => props.handleDragEnd(props.card?.id, props.boardId)}
            onDragEnter={() => props.handleDragEnter(props.card?.id, props.boardId)}
        >
            {showModal && <CardInfo onClose={() => setShowModal} />}
            <div className='card_top'>
                <div className='card_top_labels'>
                    {
                        props.card?.labels?.map((item, index) => {
                            return <Chip
                                key={index}
                                text={item.text}
                                color={item.color}
                            />
                        })
                    }
                </div>

                <main className='card_top_more' onClick={() => {
                    setShow(!show);
                }}>
                    <MoreHorizontal />
                    {
                        show &&
                        <Dropdown>
                            <div className='card_dropdown'>
                                <p onClick={() => props.removeCard(props.card?.id, props.boardId)}>Delete Card</p>
                            </div>
                        </Dropdown>
                    }
                </main>
            </div>

            <div className='card_title'>
                {props.card?.title}
            </div>
            <div className='card_footer'>
                {props.card?.date &&
                    <p><Clock />{props.card?.date}</p>
                }
                <p><CheckSquare />1/2</p>
            </div>
        </div>
    )
}

export default Card
