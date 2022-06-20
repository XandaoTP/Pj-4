import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Nav } from "react-bootstrap"
import styled from "styled-components"

type Props = {
    withoutMargin?: boolean
}

export function Footer ({ withoutMargin = false }: Props) {
    return (
        <>
            <FooterBar className={` text-center ${withoutMargin ? '' : ' mt-2'}`}>
                <Nav className="flex-column mb-0">
                    <Nav.Link className="text-white">SAIBA MAIS</Nav.Link>
                </Nav>
                <Nav className="justify-content-center mt-0" >
                    <Nav.Link className="pt-0">
                        <IconFont icon={faInstagram} />
                    </Nav.Link>
                    <Nav.Link className="pt-0">
                        <IconFont icon={faFacebook} />
                    </Nav.Link>
                </Nav>
            </FooterBar>
        </>
    )
}

const FooterBar = styled.footer`
    Background: #000000;
    bottom: 0;
    width: 100%;
`
const IconFont = styled(FontAwesomeIcon)`
    font-size: 25px;
`