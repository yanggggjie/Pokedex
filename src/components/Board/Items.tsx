import { clsx } from 'clsx'
import _ from 'lodash-es'
import { useEffect, useState } from 'react'
import Item from './Item.tsx'
import { useWindowScroll } from '@uidotdev/usehooks'
interface Props {
  pokemonIDList: string[]
}

function Component({ pokemonIDList }: Props) {
  const [page, setPage] = useState(0)
  const [{ x, y }] = useWindowScroll()
  const offset = page * 9
  useEffect(() => {
    const srollBottom = y + window.innerHeight
    const bodyHeight = document.body.scrollHeight
    if (bodyHeight - srollBottom < 100) {
      setPage((prev) => {
        return prev + 1
      })
    }
  }, [y])

  return (
    <div className={clsx('grid grid-cols-3 gap-x-10 gap-y-12')}>
      {pokemonIDList.slice(0, offset + 9).map((id) => {
        return <Item key={id} id={id}></Item>
      })}
    </div>
  )
}

export default Component
