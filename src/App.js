import React, { useState } from 'react'
import Board from './Components/Board/Board'
import Editable from './Components/Editable/Editable'
import './App.css'
const App = () => {
  const [target, setTarget] = useState({
    cid: "",
    bid: "",
  });

  const [boards, setBoards] = useState([
    {
      id: Date.now() + Math.random() * 2,
      title: "Home",
      cards: [
        {
          id: Date.now() + Math.random(),
          title: "Card 1",
          tasks: [],
          labels: [
            {
              text: "frontend",
              color: "blue",
            },
            {
              text: "frontend must",
              color: "white",
            },
          ],
          desc: "abc",
          date: "",
        },
        {
          id: Date.now() + Math.random(),
          title: "Card 2",
          tasks: [],
          labels: [
            {
              text: "frontend",
              color: "pink",
            },
          ],
          desc: "abc",
          date: "",
        }
      ]
    },
    {
      id: Date.now() + Math.random() * 2,
      title: "Gym",
      cards: [
        {
          id: Date.now() + Math.random(),
          title: "Card 1",
          tasks: [],
          labels: [
            {
              text: "frontend",
              color: "red",
            },
          ],
          desc: "abc",
          date: "",
        },
        {
          id: Date.now() + Math.random(),
          title: "Card 2",
          tasks: [],
          labels: [
            {
              text: "backend",
              color: "blue",
            },
          ],
          desc: "abc",
          date: "",
        }
      ]
    }
  ])

  const addCard = (title, bid) => {
    const card = {
      id: Date.now() + Math.random(),
      title,
      labels: [],
      tasks: [],
      date: "",
      des: "",
    };
    const index = boards.findIndex(item => item.id === bid)
    if (index < 0) return;
    const tempboards = [...boards] //Creating copy
    tempboards[index].cards.push(card);
    setBoards(tempboards);
  };

  const removeCard = (cid, bid) => {
    const bIndex = boards.findIndex((item) => item.id === bid)
    if (bIndex < 0) return;

    const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid)
    if (cIndex < 0) return;

    const tempBoards = [...boards];
    tempBoards[bIndex].cards.splice(cIndex, 1)
    setBoards(tempBoards);
  };

  const addBoard = (title) => {
    setBoards([...boards, {
      id: Date.now() + Math.random(),
      title,
      cards: [],
    }]);
  };

  const removeBoard = (bid) => {
    const tempBoards = boards.filter((item) => item.id !== bid)
    setBoards(tempBoards);
  }

  const handleDragEnd = (cid, bid) => {
    let s_bIndex, s_cIndex, t_bIndex, t_cIndex;

    s_bIndex = boards.findIndex((item) => item.id === bid)
    if (s_bIndex < 0) return;

    s_cIndex = boards[s_bIndex].cards?.findIndex((item) => item.id === cid)
    if (s_cIndex < 0) return;

    t_bIndex = boards.findIndex((item) => item.id === target.bid)
    if (t_bIndex < 0) return;

    t_cIndex = boards[t_bIndex].cards?.findIndex((item) => item.id === target.cid)
    if (t_cIndex < 0) return;

    const tempboards = [...boards];
    const tempCard = tempboards[s_bIndex].cards[s_cIndex];

    tempboards[s_bIndex].cards.splice(s_cIndex, 1);
    tempboards[t_bIndex].cards.splice(t_cIndex, 0, tempCard); // no slice , add another
  };

  const handleDragEnter = (cid, bid) => {
    setTarget({
      cid,
      bid,
    });
  }

  return (

    <div className='app'>

      <div className='app_navbar'>
        <h1>Kanban Board</h1>
      </div>

      <div className='app_outer'>

        <div className='app_boards'>
          {boards.map((item) => (
            <Board
              key={item.id}
              board={item}
              removeBoard={removeBoard}
              addCard={addCard}
              removeCard={removeCard}
              handleDragEnd={handleDragEnd}
              handleDragEnter={handleDragEnter}
            />
          ))}
          <div className='add_boards_board'>
            <Editable
              displayClass="app_boards_board_add"
              text="Add Board"
              placeholder="Enter board title"
              onSubmit={(value) => addBoard(value)}
            />

          </div>
        </div>

      </div>

    </div>
  )
}

export default App;
