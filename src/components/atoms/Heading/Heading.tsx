import styled from "styled-components"

const Heading: React.FC<{}> = () => <H1>Mail List</H1>

export default Heading

const H1 = styled.h1`

    font-size: 33px;
    letter-spacing: 1px;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    max-width: 500px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    margin-bottom: 30px;

`