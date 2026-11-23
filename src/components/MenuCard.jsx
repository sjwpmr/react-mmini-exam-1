import React from 'react'

const MenuCard = ({ id, emoji, name, votes, onVote }) => {
    return (
        <li className='card'>
            <div className="cardemoji">
                {emoji}
            </div>

            <div className="cardname">
                {name}
            </div>

            <div className="cardvotes">
                {votes}
            </div>

            <button
                type='button'
                className='cardbtn'
                onClick={() => onVote(id)}
            >
                투표하기
            </button>
        </li>
    )
}

export default MenuCard