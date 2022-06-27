import { useMailList } from "contexts/MailListContext"
import styled from "styled-components"

const TotalChecked: React.FC<{}> = () => {
    const { totalMailChecked , mailList} = useMailList()
    return (
        <Text><Span>total checked:</Span> {totalMailChecked} / {mailList.length}</Text>
    )
}

export default TotalChecked

const Text = styled.p`

    text-align: right;
    padding: 30px 15px;
    max-width: 500px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-transform: uppercase;
    font-size: 16px;

`

const Span = styled.span`

    font-size: .8em;

`