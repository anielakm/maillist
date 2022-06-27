import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Mail } from 'types/Mail'
import { MdArrowBackIosNew } from 'react-icons/md'
import Title from "components/atoms/Title/Title";


const SingleMail: React.FC<{}> = () => {

    const location = useLocation();
    const state = location.state as Mail; 
    const { from, sent_date, snippet, subject } = state;

    return (
        <MailWrapper>

            <StyledLink to="/"><MdArrowBackIosNew /></StyledLink>
            <Title>{subject}</Title>
            <p className="small">From: {from}</p>
            <p className="small">Sent date: {sent_date}</p>
            {snippet &&  <p>{snippet}</p>}
           
        </MailWrapper>
    )
}

export default SingleMail;

const MailWrapper = styled.div`

    max-width: 500px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    background-color: white;
    padding: 30px;
    position: relative;

    p {
        margin: 20px 0 0;

        &.small {
            font-size: .8em;
            margin: 5px 0;
        }

        &:last-child {
            margin-bottom: 0;
        }

    }

`

const StyledLink = styled(Link)`
    
    display: flex;
    align-items: center;
    justify-content: center;
    color: #696868;
    text-decoration: none;
    position: absolute;
    left: -50px;
    top: 0;
    background-color: white;
    border-radius: 50%;
    padding: 10px;
    


`

