
import './App.css'
import AddMenu from './components/AddMenu'
import Header from './components/Header'
import MenuCard from './components/MenuCard'
import { initialMenus } from './data'
import { useState } from 'react'
function App() {

  const [menus, setMenus] = useState(initialMenus)


  const total = menus.reduce((sum, m) => sum + m.votes, 0)
  const topVotes = Math.max(...menus.map((m) => m.votes))

  const vote = (id) => {
    setMenus(menus.map((m) => (m.id === id ? { ...m, votes: m.votes + 1 } : m)))
  }


  const addMenu = (name) => {
    setMenus([...menus, {
      id: Date.now(),
      emoji: '🛵',
      name: name,
      votes: 0
    }])
  }

  const reset = () => setMenus(menus.map((m) => ({ ...m, votes: 0 })))

  return (
    <div className='app'>
      <Header title={'🏍️ 오늘의 이동수단은?'} total={total}/>
      <AddMenu onAdd={addMenu} />
      <ul className="menus">
        {menus.map((m) => (
          <MenuCard
            key={m.id}
            {...m}
            isTop={topVotes > 0 && m.votes == topVotes}
            onVote={() => vote(m.id)}
          />
        ))}
      </ul>
      <footer className='footer'>
        <button type='button' className='reset' onClick={reset}>투표 초기화</button>
      </footer>
    </div>
  )
}

export default App
