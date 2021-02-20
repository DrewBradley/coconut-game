import React from 'react';
import Shell from './Shell'

const Board = (props) => {
  const shellsOnBoard = props.nuts.map(nut => {
    if(props.flipped.find(flipShell => flipShell.id === nut.id)) {
      return <Shell symbol={nut.symbol} key={nut.id} id={nut.id} flipped={true} flipShell={props.flipShell}/>
    }else{
      return <Shell symbol={nut.symbol} key={nut.id} id={nut.id} flipped={false} flipShell={props.flipShell}/>
    }})
  return(
    <article className="game-board">
      { shellsOnBoard }
    </article>
  )
}

export default Board