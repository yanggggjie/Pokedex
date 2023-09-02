import { clsx } from 'clsx'
import _ from 'lodash-es'
interface Props {
  stats: {
    name: string
    base_stat: number
    effort: number
  }[]
}

function Component({ stats }: Props) {
  return (
    <div className={clsx('h-64', 'flex flex-col flex-wrap gap-3')}>
      {stats.map((item) => {
        return (
          <div key={item.name}>
            <div>
              <div className={clsx('font-bold')}>{item.name}</div>
              <div>
                <div className={clsx('space-x-2 ')}>
                  <span>base</span>
                  <span>:</span>
                  <span>{item.base_stat}</span>
                </div>
                <div className={clsx('space-x-2')}>
                  <span>effort</span>
                  <span>:</span>
                  <span>{item.effort}</span>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Component
