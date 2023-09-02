import { clsx } from 'clsx'
import _ from 'lodash-es'
import useSWR from 'swr'
import useModal from '../../store/useModal.ts'
interface Props {
  id: string
}

function Component({ id }: Props) {
  const modal = useModal()
  const _url = import.meta.env.VITE_BASE_URL + `/pokemon-form/${id}`
  const { isLoading, error, data } = useSWR(_url)
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  const name = data.name
  const url = data.pokemon.url
  const back_default = data.sprites.back_default
  const front_default = data.sprites.front_default
  const back_shiny = data.sprites.back_shiny
  const front_shiny = data.sprites.front_shiny
  const types = data.types.map((item) => {
    return item.type.name
  })

  function handleItemClick() {
    modal.setShow(true)
  }

  return (
    <div
      className={clsx(
        types[0],
        'types',
        'rounded-xl p-2',
        'space-y-2',
        'transition-transform hover:scale-[1.2]',
      )}
      onClick={handleItemClick}
    >
      <div className={clsx('font-bold')}>#{id}</div>
      <div className={clsx('font-bold text-white text-2xl')}>
        {_.capitalize(name)}
      </div>
      <div className={clsx('space-x-3')}>
        {types.map((type) => {
          return (
            <span
              key={type}
              className={clsx(
                `${type}`,
                'inline-flex items-center gap-1',
                'font-bold text-white px-2 py-1 rounded',
              )}
            >
              <img
                className={clsx('w-5')}
                src={`/images/types-icons/${type}.svg`}
                alt={type}
              />
              <span>{type}</span>
            </span>
          )
        })}
      </div>
      <div className={clsx('grid grid-cols-2')}>
        <img
          className={clsx('w-24 h-24')}
          src={front_default}
          alt="front_default"
        />
        <img
          className={clsx('w-24 h-24')}
          src={front_shiny}
          alt="front_shiny"
        />
        <img
          className={clsx('w-24 h-24')}
          src={back_default}
          alt="back_default"
        />
        <img className={clsx('w-24 h-24')} src={back_shiny} alt="back_shiny" />
      </div>
    </div>
  )
}

export default Component
