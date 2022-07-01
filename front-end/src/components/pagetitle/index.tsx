import styled from "styled-components"

type Props = {
    children: React.ReactNode
}
export function PageTitle ({ children }: Props) {
    return(
        <TitleH1 className="mt-0 text-center">
            {children}
        </TitleH1>
    )
}

const TitleH1  = styled.h1`
    font-weight: 400;
    color: #0d8417;
`
