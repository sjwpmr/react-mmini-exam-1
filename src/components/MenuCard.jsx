import React from 'react'

const MenuCard = ({ emoji, name, votes }) => {
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
            <button type='button' className='cardbtn'>투표하기</button>
        </li>
    )
}

export default MenuCard