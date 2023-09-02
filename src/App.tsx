import { clsx } from 'clsx'
import _ from 'lodash-es'
import TypeBar from './components/TypeBar.tsx'
import { useState } from 'react'
import Board from './components/Board/Board.tsx'
import Modal from './components/Modal/modal.tsx'
import useModal from './store/useModal.ts'

function Title() {
  return (
    <div>
      <h1
        className="text-yellow-400 flex text-[5rem] leading-none font-bold text-center"
        style={{
          textShadow: 'rgb(29, 44, 94) -1px 0px 0px',
        }}
      >
        Pokédex
      </h1>
    </div>
  )
}

function Component() {
  const modal = useModal()
  const [type, setType] = useState('ice')

  return (
    <div className={clsx('bg-gray-100', 'flex flex-col items-center gap-3')}>
      <Title></Title>
      <TypeBar setType={setType}></TypeBar>
      <div className={clsx('my-10')}>
        <Board type={type}></Board>
      </div>
      {modal.show && <Modal></Modal>}
    </div>
  )
}

export default Component
