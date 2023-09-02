import { create } from 'zustand'

interface IModalState {
  show: boolean
  setShow: (show: boolean) => void
}

export default create<IModalState>()((setState, getState) => {
  return {
    show: false,
    setShow: (show: boolean) => {
      setState({ show })
    },
  }
})
