import styled from "styled-components"

type Props = {
    children: React.ReactNode
}
export function PageTitle ({ children }: Props) {
    return(
        <TitleH1 className="mt-3 text-center">
            {children}
        </TitleH1>
    )
}

const TitleH1  = styled.h1`
    font-weight: 400;
    color: #e84a16;
`
