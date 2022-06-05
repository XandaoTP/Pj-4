import { Button, ButtonProps, Spinner } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";

type Props =  ButtonProps & {
     loading?: boolean 
     to?: string
}
export function CustomButton ({ children, loading, to, ...otherProps }: Props) {
    const button = (
        <ButtonCustom {...otherProps}>
            {loading && (
                <Spinner animation="grow" role="status" size="sm" className="me-1" variant="dark">
                    <span className="visually-hidden">Carregando...</span>
                </Spinner>
            )}
            {children}
        </ButtonCustom>    
    )
    if (to) {
        return (
            <LinkContainer to={to}>
                {button}
            </LinkContainer>
        )
    }
    return button
}

const ButtonCustom = styled(Button)`
    border-radius: 55px;
    font-weight: 500;
    ${props => props.size === 'lg' && `
        font-size: 1.125rem;
    `}
    ${props => (props.variant === 'success' || !props.variant) && `
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &:hover {
        background-color: #225106;
        box-shadow: 0px 4px 4px rgba(140, 231, 149, 0.25);
    }
    `}
`