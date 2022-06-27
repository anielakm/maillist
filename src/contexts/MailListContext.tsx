
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Mail } from 'types/Mail'
import { data } from "assets/data";

interface MailListInterface {
    mailList: Mail[],
    totalMailChecked: number,
    setMailList: Dispatch<SetStateAction<string>>,
    toggleMailStatus: Dispatch<SetStateAction<number>>,
}


interface MailListProviderProps {
    children: JSX.Element
}

const MailListContext = createContext<MailListInterface>({
    mailList: [],
    totalMailChecked: 0,
  setMailList: () => {},
  toggleMailStatus: () => {},
})

export const useMailList = () => useContext(MailListContext)

const MailListProvider: React.FC<MailListProviderProps> = ({ children }) => {
  const [mailList, setMailList] = useState(data)
  const [totalMailChecked, setTotalMailChecked] = useState(0)

  const toggleMailStatus = (id) => {
      
    const tmp = mailList.map((item) => {
        if (item.id === id) item.is_unread = !item.is_unread
        return item
    })

    setMailList(tmp)
  }

  useEffect(()=>{
    setTotalMailChecked(mailList.filter(mail=>mail.is_unread).length)
  }, [mailList])

  return (
    <MailListContext.Provider value={{ mailList, totalMailChecked, setMailList, toggleMailStatus }}>
      {children}
    </MailListContext.Provider>
  )
}

export default MailListProvider
