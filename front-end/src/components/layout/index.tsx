import styled from "styled-components"
import { Footer } from "./footer"
import { Header } from "./header"

type Props = {
    children: React.ReactNode
    startTransparent?: boolean
    withoutMargin?: boolean
}
export const Layout: React.FC<Props> = ({ children, startTransparent, withoutMargin }) => {
    return (
        <>
            <Header startTransparent={startTransparent} />
            <MainStyled startTransparent={startTransparent}>
                {children}
            </MainStyled>
            <Footer withoutMargin={withoutMargin} />
        </>
    )
}

type MainProps = Pick<Props, 'startTransparent'>

const MainStyled = styled.main<MainProps>`
${props => !props.startTransparent && `
    padding-top: 3.5rem;
`}

`