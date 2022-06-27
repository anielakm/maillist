
import SingleMail from 'components/molecules/SingleMail/SingleMail'
import styled from 'styled-components'
import { Mail } from 'types/Mail'

interface MailListProps {
    list: Mail[]
}

const MailList: React.FC<MailListProps> = ({list}) => {
    return (
        <MailListWrapper>
            <Ul>
                {list.map(el => <SingleMail key={el.id} mail={el} />)}
            </Ul>
        </MailListWrapper>
    )
}

export default MailList

const MailListWrapper = styled.div`

   display: flex;
   justify-content: center;

`
const Ul = styled.ul`

    list-style: none;
    padding: 0;
    margin: 0;
    background-color: white;
    padding: 15px;
    max-width: 500px;
    width: 100%;

    @media (min-width: 768px) {
        padding: 30px;
    }

`