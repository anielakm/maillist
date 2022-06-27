import styled from "styled-components"

interface SubTitleProps {
    children: string
}

const SubTitle: React.FC<SubTitleProps> = ({ children }) => {
    return (
        <H3>{children}</H3>
    )
}

export default SubTitle


const H3 = styled.h3`

   font-size: 15px;
   margin-bottom: 15px;
   margin-top: 5px;
   font-weight: 400;

`