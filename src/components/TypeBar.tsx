import { clsx } from 'clsx'
import _ from 'lodash-es'
interface Props {
  setType: (type: string) => void
}

function Component({ setType }: Props) {
  const types = [
    'bug',
    'dark',
    'dragon',
    'electric',
    'fairy',
    'fighting',
    'fire',
    'flying',
    'ghost',
    'grass',
    'ground',
    'ice',
    'normal',
    'poison',
    'psychic',
    'rock',
    'steel',
    'water',
  ]

  function handleClick(type: string) {
    setType(type)
  }

  return (
    <div
      className={clsx(
        'bg-blue-50 p-5 rounded-full shadow ',
        'grid grid-cols-9 gap-2',
      )}
    >
      {types.map((type) => {
        return (
          <div
            key={type}
            className={clsx(
              'inline-block',
              'p-2 rounded-full bg-purple-400',
              'transition-transform  hover:scale-125',
              // color just css className no tailwind
              `${type}`,
            )}
            onClick={() => {
              handleClick(type)
            }}
          >
            <img
              className={clsx('w-5')}
              src={`/images/types-icons/${type}.svg`}
              alt=""
            />
          </div>
        )
      })}
    </div>
  )
}

export default Component
