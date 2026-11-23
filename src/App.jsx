import './App.css'
import AddMenu from './components/AddMenu'
import Header from './components/Header'
import MenuCard from './components/MenuCard'
import { initialMenus } from './data'
import { useState } from 'react'

function App() {
  const [menus, setMenus] = useState(initialMenus)

  const addMenu = (name) => {
    setMenus([...menus, {
      id: Date.now(),
      emoji: '🏍️',
      name: name,
      votes: 0
    }])
  }

  const voteMenu = (id) => {
    setMenus(menus.map((m) =>
      m.id === id ? { ...m, votes: m.votes + 1 } : m
    ))
  }

  const resetVotes = () => {
    setMenus(menus.map((m) => ({
      ...m,
      votes: 0
    })))
  }

  return (
    <div className='app'>
      <Header title={'🚦 자주이용하는 이동수단은?'} />

      <AddMenu onAdd={addMenu} />

      <ul className='menus'>
        {menus.map((m) => (
          <MenuCard
            key={m.id}
            {...m}
            onVote={voteMenu}
          />
        ))}
      </ul>

      <footer className='footer'>
        <button
          type='button'
          className='reset'
          onClick={resetVotes}
        >
          투표 초기화
        </button>
      </footer>
    </div>
  )
}

export default App