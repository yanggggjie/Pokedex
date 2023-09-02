import { clsx } from 'clsx'
import _ from 'lodash-es'
import useSWR from 'swr'
import axios from 'axios'
import * as QueryString from 'qs'
import Item from './Item.tsx'
import Items from './Items.tsx'
interface Props {
  type: string
}

function Component({ type }: Props) {
  const url = import.meta.env.VITE_BASE_URL + `/type/${type}`
  const { isLoading, error, data } = useSWR(url)
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  const pokemonIDList = data.pokemon.map((item) => {
    let url = item.pokemon.url
    url = url.slice(0, -1)
    const lastSlashIndex = url.lastIndexOf('/')
    const id = url.slice(lastSlashIndex + 1)
    return id
  })

  return (
    <>
      <Items pokemonIDList={pokemonIDList}></Items>
    </>
  )
}

export default Component
