import Checkbox from "components/atoms/Checkbox/Checkbox"
import SubTitle from "components/atoms/SubTitle/SubTitle"
import Title from "components/atoms/Title/Title"
import { useMailList } from "contexts/MailListContext"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Mail } from "types/Mail"

interface MailProps{
    mail: Mail
}

const SingleMail: React.FC<MailProps> = ({mail}) => {
    const {toggleMailStatus} = useMailList()
    return (
        <SingleMailWrapper>
            <Checkbox isChecked={mail.is_unread} handleCheck={()=>toggleMailStatus(mail.id)} />
            <Link 
                to="/mail"
                state={{...mail}}
            >
                <Title>{mail.subject}</Title>
                <SubTitle>{mail.from}</SubTitle>
                <Date>{mail.sent_date}</Date>
            </Link>
            
        </SingleMailWrapper>
    )
}

export default SingleMail

const SingleMailWrapper = styled.li`

    border-bottom: 1px solid #e7e7e7;
    padding-bottom: 30px;
    margin-bottom: 30px;

    display: flex;
    align-items: center;
    gap: 15px;

    position: relative;

    &:last-child {
        padding: 0;
        margin: 0;
        border: none;
    }

    @media (min-width: 768px) {
        gap: 30px;
    }

`

const Date = styled.p`

    font-size: 12px;

`
