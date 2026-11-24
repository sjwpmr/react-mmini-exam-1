import React, { useRef } from 'react'

const AddMenu = ({ onAdd }) => {

  const inputRef = useRef(null)


  const handleSubmit = (e) => {
    e.preventDefault()

    const name = inputRef.current.value.trim()

    if (!name) {
      inputRef.current.focus()
      return;
    }

    onAdd(name)
    inputRef.current.value = ''
    inputRef.current.focus()
  }
  return (
    <form className='add' onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        placeholder='이동수단을추가해주세요(예:자전거)' />
      <button type='submit'>추가</button>
    </form>
  )
}

export default AddMenu