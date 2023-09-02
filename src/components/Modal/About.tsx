import { clsx } from 'clsx'
import _ from 'lodash-es'
interface Props {
  about: {
    height: number
    weight: number
    abilities: {
      name: string
      url: string
      is_hidden: boolean
    }[]
  }
}

function Component({ about }: Props) {
  const { height, weight, abilities } = about
  return (
    <div className={clsx('h-64', 'flex flex-col gap-3')}>
      <div>Height : {height}</div>
      <div>Weight : {weight}</div>
      <div>
        <span>Abilities : </span>
        {abilities.map((item, index) => {
          return (
            <div key={item.name}>
              <span>{index}</span>
              <span> </span>
              <span>{item.name}</span>
              {item.is_hidden && <span>(hidden)</span>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Component
