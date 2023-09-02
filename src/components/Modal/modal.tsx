import { clsx } from 'clsx'
import _ from 'lodash-es'
import useSWR from 'swr'
import About from './About.tsx'
import Stats from './Stats.tsx'
import { useState } from 'react'
import useModal from '../../store/useModal.ts'

enum Tab {
  About,
  Stats,
}

function Component() {
  const modal = useModal()
  const [showTab, setShowTab] = useState<Tab>(Tab.About)
  const url = `https://pokeapi.co/api/v2/pokemon/180/`
  const { isLoading, data, error } = useSWR(url)
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  const about = {
    height: data.height,
    weight: data.weight,
    abilities: data.abilities.map((item) => {
      return {
        name: item.ability.name,
        url: item.ability.url,
        is_hidden: item.is_hidden,
      }
    }),
  }

  const stats = data.stats.map((item) => {
    return {
      name: item.stat.name,
      base_stat: item.base_stat,
      effort: item.effort,
    }
  })

  function handleAbout() {
    setShowTab(Tab.About)
  }
  function handleStats() {
    setShowTab(Tab.Stats)
  }

  function handleLayer() {
    modal.setShow(false)
  }

  return (
    <div className={clsx('fixed inset-0')} onClick={handleLayer}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        className={clsx(
          'absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2',
          'outline',
        )}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <div
          className={clsx(
            'flex flex-row items-center gap-3',
            'w-96 h-64',
            'p-2 bg-blue-100',
          )}
        >
          <button
            className={clsx(showTab === Tab.About && 'bg-blue-200')}
            onClick={handleAbout}
          >
            about
          </button>
          <button
            className={clsx(showTab === Tab.Stats && 'bg-blue-200')}
            onClick={handleStats}
          >
            stats
          </button>
        </div>
        <div className={clsx('bg-white')}>
          {Tab.About === showTab && <About about={about}></About>}
          {Tab.Stats === showTab && <Stats stats={stats}></Stats>}
        </div>
      </div>
    </div>
  )
}

export default Component
