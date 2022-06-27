import styled from "styled-components"

interface TitleProps {
    children: string
}

const Title: React.FC<TitleProps> = ({ children }) => {
    return (
        <H2>{children}</H2>
    )
}

export default Title


const H2 = styled.h2`

    font-size: 24px;
    font-weight: 600;

`